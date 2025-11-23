import { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatDialog } from "@/components/ChatDialog";

export function BotAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-muted hover:bg-muted/80 shadow-lg"
        onClick={() => setOpen(true)}
      >
        <Bot className="h-7 w-7 text-primary" />
      </Button>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
