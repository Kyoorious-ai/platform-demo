import { CheckCircle, Sun } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SubjectDropdown } from "@/components/SubjectDropdown";
import { MasteryCircle } from "@/components/MasteryCircle";
import { Badge } from "@/components/ui/badge";

interface Concept {
  id: number;
  title: string;
  status: "progressing" | "mastering" | "need-focus";
  score: number;
}

const concepts: Concept[] = [
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
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Report card</span>
        </div>
        <Avatar className="h-8 w-8 bg-primary">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Sun className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Subject Selection Card */}
      <Card className="bg-secondary border-0 mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <SubjectDropdown />
            <MasteryCircle percentage={25} />
          </div>
        </CardContent>
      </Card>

      {/* Concept Breakdown Section */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-bold text-foreground">Concept Breakdown</h2>
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
            5 Master Concepts
          </Badge>
        </div>

        {/* Concept Cards */}
        <div className="space-y-4">
          {concepts.map((concept) => (
            <Card key={concept.id} className="bg-secondary border-0">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {concept.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${getStatusColor(concept.status)}`}>
                  {getStatusLabel(concept.status)}
                </p>
                
                <Progress 
                  value={concept.score} 
                  className={`h-2 mb-4 ${getProgressBarClass(concept.status)}`}
                />
                
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{concept.score}%</span>
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
