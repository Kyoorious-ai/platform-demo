import { RefreshCw } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TestAttempt {
  id: string;
  title: string;
  duration: string;
  totalMarks: number;
  attemptedDate: string;
  status: "completed" | "in-progress";
}

const TestAttempts = () => {
  // Mock data - replace with actual data from your backend
  const testAttempts: TestAttempt[] = [
    {
      id: "1",
      title: "Mathematics- Surface Area and Volume",
      duration: "30 minutes",
      totalMarks: 19,
      attemptedDate: "14/09/2025",
      status: "completed",
    },
    {
      id: "2",
      title: "Mathematics- Surface Area and Volume",
      duration: "30 minutes",
      totalMarks: 18,
      attemptedDate: "14/09/2025",
      status: "completed",
    },
    {
      id: "3",
      title: "Mathematics- Surface Area and Volume",
      duration: "30 minutes",
      totalMarks: 19,
      attemptedDate: "14/09/2025",
      status: "in-progress",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <RefreshCw className="h-5 w-5 text-foreground" />
            <h1 className="text-xl font-semibold text-foreground">Test</h1>
          </div>
          <Avatar className="h-12 w-12 bg-primary">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              A
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-6">
          {testAttempts.map((attempt) => (
            <Card
              key={attempt.id}
              className="p-8 bg-card/50 border border-border/50 rounded-lg"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-primary">
                    {attempt.title}
                  </h2>
                  <div className="space-y-1 text-foreground">
                    <p>Duration: {attempt.duration}</p>
                    <p>Total marks: {attempt.totalMarks}</p>
                  </div>
                </div>
                <div className="text-right space-y-4">
                  {attempt.status === "completed" ? (
                    <button className="text-gold text-lg font-medium underline underline-offset-4 hover:text-gold/80 transition-colors">
                      Check Performance
                    </button>
                  ) : (
                    <Button className="px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                      Resume
                    </Button>
                  )}
                </div>
              </div>
              <div className="mt-4 text-right text-muted-foreground">
                Test attempted on: {attempt.attemptedDate}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestAttempts;
