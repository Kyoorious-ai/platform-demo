import { useState } from "react";
import { Flag, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TestTaking = () => {
  const [timeLeft, setTimeLeft] = useState("60m left");
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const totalQuestions = 15;

  const handleSubmit = () => {
    toast.success("Test submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Question Numbers */}
      <div className="w-24 bg-primary/20 flex flex-col items-center py-8 space-y-6">
        <div className="text-foreground font-semibold mb-4">{timeLeft}</div>
        {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setSelectedQuestion(num)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center font-semibold transition-colors ${
              selectedQuestion === num
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-20 bg-card border-b border-border flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-foreground" />
            <h1 className="text-xl font-semibold text-foreground">Test</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Flag className="h-5 w-5 text-destructive" />
            </Button>
            <Button
              onClick={handleSubmit}
              className="px-12 py-3 text-lg font-semibold bg-primary hover:bg-primary/90"
            >
              Submit
            </Button>
          </div>
        </div>

        {/* Question Content Area */}
        <div className="flex-1 p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-foreground">
              {/* Question content would go here */}
              <p className="text-lg">Question {selectedQuestion} content will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTaking;
