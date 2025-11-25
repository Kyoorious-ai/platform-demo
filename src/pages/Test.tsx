import { useState } from "react";
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
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");

  const isFormValid = selectedChapter && selectedDuration;

  const handleStartTest = () => {
    if (isFormValid) {
      toast.success(`Starting test for ${selectedChapter} - ${selectedDuration}`);
      // Navigate to test questions or start test logic here
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
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger className="flex-1 h-14 bg-secondary/50 border-border text-muted-foreground rounded-lg">
                    <SelectValue placeholder="Select Test Duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="15min">15 Minutes</SelectItem>
                    <SelectItem value="30min">30 Minutes</SelectItem>
                    <SelectItem value="45min">45 Minutes</SelectItem>
                    <SelectItem value="60min">60 Minutes</SelectItem>
                  </SelectContent>
                </Select>
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
      </div>
    </div>
  );
};

export default Test;
