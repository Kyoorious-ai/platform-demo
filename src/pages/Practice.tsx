import { PenTool, Sun } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface PracticeConcept {
  id: string;
  title: string;
  status: "not-started" | "in-progress";
}

const Practice = () => {
  const navigate = useNavigate();
  const [readyForTest, setReadyForTest] = useState(false);

  // Mock data - replace with actual data from your backend
  const practiceConcepts: PracticeConcept[] = [
    {
      id: "1",
      title: "Principle of Volume Conservation",
      status: "not-started",
    },
    {
      id: "2",
      title: "Curved Surface Area of a Cylinder Formula",
      status: "in-progress",
    },
    {
      id: "3",
      title: "Calculation and arithmetic errors",
      status: "not-started",
    },
  ];

  const testAttemptedDate = "14/09/2025";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <PenTool className="h-5 w-5 text-foreground" />
            <h1 className="text-xl font-semibold text-foreground">Practice</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full hover:bg-secondary"
          >
            <Sun className="h-5 w-5 text-primary" />
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary italic mb-2">
            Weak Concepts and Silly Mistakes Identified
          </h2>
          <p className="text-muted-foreground">
            Test attempted on: {testAttemptedDate}
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {practiceConcepts.map((concept) => (
            <Card
              key={concept.id}
              className="p-6 bg-card/80 border border-border/50 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-foreground">
                  {concept.title}
                </h3>
                <Button
                  onClick={() => navigate(`/practice/${concept.id}`)}
                  className="px-8 py-2 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  {concept.status === "not-started" ? "Start" : "Resume"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Card className="p-4 bg-secondary/50 border border-border/30 rounded-lg">
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  id="ready-for-test"
                  checked={readyForTest}
                  onCheckedChange={(checked) => setReadyForTest(checked as boolean)}
                  className="h-6 w-6 border-2 border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                />
                <label
                  htmlFor="ready-for-test"
                  className="text-foreground cursor-pointer"
                >
                  I've practiced my weak concepts and silly mistakes and would like to take the next test now
                </label>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
