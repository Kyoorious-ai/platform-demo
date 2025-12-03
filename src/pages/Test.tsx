import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshCw, Sun } from "lucide-react";
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
import { useMode } from "@/contexts/ModeContext";

const Test = () => {
  const navigate = useNavigate();
  const { mode } = useMode();
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("1-hour");
  
  const isLearnMode = mode === "learn";
  const testDuration = isLearnMode ? "30 Minutes" : selectedDuration;

  const isFormValid = isLearnMode 
    ? selectedChapter 
    : selectedChapter && selectedDuration;

  const handleStartTest = () => {
    if (isFormValid) {
      const durationLabel = isLearnMode 
        ? "30 Minutes" 
        : selectedDuration === "1-hour" ? "1 Hour" : "3 Hours";
      toast.success(`Starting test for ${selectedChapter} - ${durationLabel}`);
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
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full hover:bg-secondary"
          >
            <Sun className="h-5 w-5 text-primary" />
          </Button>
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
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="surface-area-volumes">Surface Area and Volumes</SelectItem>
                    <SelectItem value="algebra">Algebra</SelectItem>
                    <SelectItem value="polynomials">Polynomials</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-8">
                <label className="text-foreground text-lg font-medium w-48">
                  Test Duration:
                </label>
                {isLearnMode ? (
                  <div className="flex-1 h-14 bg-secondary/30 border border-border text-muted-foreground rounded-lg flex items-center px-4 cursor-not-allowed opacity-75">
                    {testDuration}
                  </div>
                ) : (
                  <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                    <SelectTrigger className="flex-1 h-14 bg-secondary/50 border-border text-muted-foreground rounded-lg">
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      <SelectItem value="1-hour">1 Hour</SelectItem>
                      <SelectItem value="3-hours">3 Hours</SelectItem>
                    </SelectContent>
                  </Select>
                )}
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

        {/* Previous Tests Button - Only in Learn Mode */}
        {isLearnMode && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/test-attempts")}
              className="px-12 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
            >
              Previous Tests
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
