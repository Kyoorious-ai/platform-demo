import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Test = () => {
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const testDuration = "30 Minutes"; // Fixed duration

  const isFormValid = selectedChapter;

  const handleStartTest = () => {
    if (isFormValid) {
      toast.success(`Starting test for ${selectedChapter} - ${testDuration}`);
      navigate("/test-instructions");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-16">
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

        <div className="flex items-center justify-center">
          <Card className="w-full max-w-4xl p-12 bg-background border-2 border-primary/30 rounded-2xl">
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <label className="text-foreground text-lg font-medium w-48">
                  Chapter:
                </label>
                <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                  <SelectTrigger className="flex-1 h-14 bg-secondary/50 border-border text-muted-foreground rounded-lg">
                    <SelectValue placeholder="Select Chapter" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="chapter1">Chapter 1</SelectItem>
                    <SelectItem value="chapter2">Chapter 2</SelectItem>
                    <SelectItem value="chapter3">Chapter 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-8">
                <label className="text-foreground text-lg font-medium w-48">
                  Test Duration:
                </label>
                <div className="flex-1 h-14 bg-secondary/30 border border-border text-muted-foreground rounded-lg flex items-center px-4 cursor-not-allowed opacity-75">
                  {testDuration}
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button
                  onClick={handleStartTest}
                  disabled={!isFormValid}
                  className="px-12 py-6 text-lg font-semibold"
                >
                  Start Test
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Previous Tests Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/test-attempts")}
            className="px-12 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
          >
            Previous Tests
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Test;
