# SupportOps AI

An intelligent support intake and ticket management system designed to simplify how users submit requests and how teams handle them.

---

## Overview

SupportOps AI is built to remove confusion from traditional support processes by guiding users through a structured, AI-assisted intake flow.

Instead of users guessing which team to contact, the system helps clarify the request, gathers the right information, and prepares it for accurate routing and handling.

---

## Key Features

### AI-Assisted Request Intake
A guided, clarification-first chat experience that helps users describe their issue clearly before submitting a ticket.

### Structured Ticket System
Tickets are organized with clear communication threads, including:
- Public messages (visible to users)
- Internal notes (visible to support teams only)
- System events (status updates and actions)

### Role-Based Experience
Different views based on user roles- `/my-tickets` End-user ticket list
- `/my-tickets/[id]` End-user ticket detail + public thread
- `/dashboard` Support operations dashboard
- `/tickets` Support ticket queue
- `/tickets/[id]` Support ticket detail + AI analysis + internal notes visibility

## Notes

This is still a frontend-first mock system. Authentication, real route protection, persistence, and backend integration.
