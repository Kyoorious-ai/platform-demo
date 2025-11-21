import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExplorerButton() {
  return (
    <Button
      variant="ghost"
      className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-secondary/50"
    >
      <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
        <Lightbulb className="h-6 w-6 text-foreground" />
      </div>
      <span className="text-sm text-foreground">Explorer</span>
    </Button>
  );
}
