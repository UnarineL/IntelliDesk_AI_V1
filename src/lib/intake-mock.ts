import { IntakeMessage, TicketDraft } from "./intake-types";

const now = () => new Date().toISOString();
const id = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const createMessage = (role: "user" | "assistant", text: string): IntakeMessage => ({
  id: id(),
  role,
  text,
  timestamp: now(),
});

const containsAny = (text: string, keywords: string[]) => keywords.some((k) => text.toLowerCase().includes(k.toLowerCase()));

export function needsClarification(history: string[]): { shouldAsk: boolean; questions: string[] } {
  const combined = history.join(" ").toLowerCase();

  const hasSystem = containsAny(combined, [
    "outlook", "teams", "vpn", "wifi", "internet", "laptop", "desktop", "email", "password", "mfa", "account", "printer", "adobe", "app", "application",
  ]);
  const hasSymptom = containsAny(combined, [
    "cannot", "can't", "not working", "fails", "failing", "error", "slow", "blocked", "locked", "crash", "sync", "login", "sign in", "access",
  ]);
  const hasImpact = containsAny(combined, ["only me", "my device", "multiple users", "everyone", "team", "office", "company"]);

  const questions: string[] = [];
  if (!hasSystem) questions.push("Which system, application, or device is affected?");
  if (!hasSymptom) questions.push("What exactly is happening, and are you seeing any error message?");
  if (!hasImpact) questions.push("Is this affecting only you, or multiple users/devices?");

  return { shouldAsk: questions.length > 0, questions: questions.slice(0, 2) };
}

export function buildDraft(history: string[]): TicketDraft {
  const combined = history.join(" ");
  const lower = combined.toLowerCase();
  const securityFlag = containsAny(lower, ["phishing", "suspicious", "malware", "clicked a link", "breach"]);

  let category: TicketDraft["category"] = "General Inquiry";
  let priority: TicketDraft["priority"] = "Medium";
  let routedTeam = "Service Desk General";
  let impactedServices: string[] = [];

  if (containsAny(lower, ["password", "mfa", "account", "sign in", "login"])) {
    category = "MFA / Authentication";
    priority = "High";
    routedTeam = "Identity & Access Support";
    impactedServices = ["Authentication"];
  }
  if (containsAny(lower, ["outlook", "teams", "email"])) {
    category = "Email / Collaboration";
    priority = "High";
    routedTeam = "End User Support";
    impactedServices = ["Outlook", "Teams", "Email"].filter((s) => lower.includes(s.toLowerCase()));
  }
  if (containsAny(lower, ["wifi", "internet", "vpn", "network"])) {
    category = "Network / Connectivity";
    priority = "High";
    routedTeam = "Network Support";
    impactedServices = ["Network", "VPN", "Internet"].filter((s) => lower.includes(s.toLowerCase()));
  }
  if (containsAny(lower, ["laptop", "desktop", "device", "hardware", "screen", "keyboard"])) {
    category = "Device / Hardware";
    priority = priority === "High" ? "High" : "Medium";
    routedTeam = "End User Support";
    if (!impactedServices.length) impactedServices = ["Device"];
  }
  if (containsAny(lower, ["adobe", "excel", "word", "app", "application", "software"])) {
    category = "Application Support";
    routedTeam = "Application Support";
    if (!impactedServices.length) impactedServices = ["Application"];
  }
  if (securityFlag) {
    category = "Security Incident";
    priority = "Critical";
    routedTeam = "Security Operations";
    impactedServices = impactedServices.length ? impactedServices : ["Email", "Device"];
  }
  if (containsAny(lower, ["multiple users", "everyone", "whole team", "office"])) {
    if (priority === "Medium") priority = "High";
  }

  const summary = combined.length > 140 ? combined.slice(0, 137) + "..." : combined;
  return {
    summary,
    category,
    priority,
    routedTeam,
    impactedServices,
    securityFlag,
    confidence: securityFlag ? 0.97 : 0.89,
    recommendedActions: securityFlag
      ? [
          "Escalate immediately to Security Operations",
          "Capture affected systems and user details",
          "Preserve evidence and avoid further interaction",
        ]
      : [
          "Validate user-reported symptoms",
          "Confirm affected system and scope",
          "Route to the recommended support team",
        ],
    draftResponse: securityFlag
      ? "We have identified this as a potential security incident and are escalating it immediately to Security Operations."
      : "We’ve analyzed your request and prepared a structured support ticket for review and submission.",
  };
}
