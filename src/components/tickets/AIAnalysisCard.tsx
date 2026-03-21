import { IntelligenceGrid } from "@/components/analysis/IntelligenceGrid";
import { AnalysisResult } from "@/lib/types";

export function AIAnalysisCard({ analysis }: { analysis: AnalysisResult }) {
  return <IntelligenceGrid analysis={analysis} />;
}
