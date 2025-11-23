import { Bot, X, MoreVertical, Mic, Send, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[90vh] bg-background border-primary/20">
        <DrawerHeader className="flex flex-row items-center justify-between border-b border-border/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 bg-muted">
              <AvatarFallback className="bg-muted">
                <Bot className="h-6 w-6 text-primary" />
              </AvatarFallback>
            </Avatar>
            <DrawerTitle className="text-foreground">Kyoori</DrawerTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-3xl max-w-[80%]">
              Explain Pythagoras theorem with a simple example
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex justify-start">
            <div className="bg-card border border-border/50 px-6 py-4 rounded-2xl max-w-[85%] space-y-4">
              <p className="text-foreground text-sm leading-relaxed">
                The Pythagorean Theorem is a fundamental principle in geometry that applies to right-angled
                triangles. It states that in a right triangle, the square of the length of the
                hypotenuse (the side
                opposite the right angle) is equal to the sum of the squares of the lengths of the
                other two sides.
                <br />
                The formula is:
              </p>
              
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded">
                <p className="text-center text-foreground font-mono">
                  c²2 = a²2 + b²2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border/50 px-6 py-4">
          <div className="flex items-center gap-3 bg-muted/30 rounded-full px-4 py-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <Plus className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Input
              placeholder="Ask your doubt"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <Mic className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <Send className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
