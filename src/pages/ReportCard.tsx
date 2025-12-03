import { CheckCircle, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SubjectDropdown } from "@/components/SubjectDropdown";
import { Badge } from "@/components/ui/badge";
import { useMode } from "@/contexts/ModeContext";

interface Item {
  id: number;
  title: string;
  status: "progressing" | "mastering" | "need-focus";
  score: number;
}

// Learn Mode - Concepts
const concepts: Item[] = [
  {
    id: 1,
    title: "Surface Area Fundamental & Key Formulas",
    status: "progressing",
    score: 40,
  },
  {
    id: 2,
    title: "Volume Fundamental & Key Formulas",
    status: "mastering",
    score: 85,
  },
  {
    id: 3,
    title: "Derived & Partial Solids",
    status: "need-focus",
    score: 6,
  },
];

// Exam Mode - Chapters
const chapters: Item[] = [
  {
    id: 1,
    title: "Real Numbers",
    status: "progressing",
    score: 40,
  },
  {
    id: 2,
    title: "Polynomials",
    status: "mastering",
    score: 85,
  },
  {
    id: 3,
    title: "Quadratic Equations",
    status: "need-focus",
    score: 6,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "progressing":
      return "text-status-progressing";
    case "mastering":
      return "text-status-mastering";
    case "need-focus":
      return "text-status-needfocus";
    default:
      return "text-muted-foreground";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "progressing":
      return "Progressing";
    case "mastering":
      return "Mastering";
    case "need-focus":
      return "Need Focus";
    default:
      return "";
  }
};

const getProgressBarClass = (status: string) => {
  switch (status) {
    case "progressing":
      return "progress-progressing";
    case "mastering":
      return "progress-mastering";
    case "need-focus":
      return "progress-needfocus";
    default:
      return "";
  }
};

export default function ReportCard() {
  const { mode } = useMode();
  const isExamMode = mode === "exam";
  const items = isExamMode ? chapters : concepts;

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-foreground" />
          <span className="text-foreground font-medium">Report card</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full hover:bg-secondary"
        >
          <Sun className="h-5 w-5 text-primary" />
        </Button>
      </div>

      {/* Subject Selection Card */}
      <Card className="bg-secondary/50 border-0 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <SubjectDropdown />
            {/* Score Circle */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="8"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - (isExamMode ? 25/80 : 0.25))}`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {isExamMode ? (
                  <>
                    <span className="text-4xl font-bold text-primary">25</span>
                    <span className="text-xl text-muted-foreground">/80</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-primary">25%</span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Breakdown Section */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-bold text-foreground">
            {isExamMode ? "Chapter Breakdown" : "Concept Breakdown"}
          </h2>
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
            {isExamMode ? "14 Chapters" : "5 Master Concepts"}
          </Badge>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="bg-secondary/50 border-0">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${getStatusColor(item.status)}`}>
                  {getStatusLabel(item.status)}
                </p>
                
                <Progress 
                  value={item.score} 
                  className={`h-2 mb-4 ${getProgressBarClass(item.status)}`}
                />
                
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{item.score}%</span>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border text-foreground hover:bg-muted"
                  >
                    Know More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
