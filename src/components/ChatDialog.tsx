import { Bot, X, MoreVertical, Mic, Send, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  if (!open) return null;

  return (
    <Card className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-background border-primary/20 shadow-2xl flex flex-col">
      <div className="flex flex-row items-center justify-between border-b border-border/50 px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 bg-muted">
            <AvatarFallback className="bg-muted">
              <Bot className="h-5 w-5 text-primary" />
            </AvatarFallback>
          </Avatar>
          <h3 className="text-foreground font-semibold">Kyoori</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreVertical className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl max-w-[85%] text-sm">
            Explain Pythagoras theorem with a simple example
          </div>
        </div>

        {/* Bot Response */}
        <div className="flex justify-start">
          <div className="bg-card border border-border/50 px-4 py-3 rounded-2xl max-w-[90%] space-y-3">
            <p className="text-foreground text-sm leading-relaxed">
              The Pythagorean Theorem is a fundamental principle in geometry that applies to right-angled
              triangles. It states that in a right triangle, the square of the length of the
              hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the
              other two sides.
              <br />
              The formula is:
            </p>
            
            <div className="bg-muted/30 border-l-4 border-primary p-3 rounded">
              <p className="text-center text-foreground font-mono text-sm">
                c²2 = a²2 + b²2
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border/50 px-4 py-3">
        <div className="flex items-center gap-2 bg-muted/30 rounded-full px-3 py-1.5">
          <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
            <Plus className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Input
            placeholder="Ask your doubt"
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-foreground placeholder:text-muted-foreground"
          />
          <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
            <Mic className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
            <Send className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
