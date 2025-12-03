import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChatDialog } from "@/components/ChatDialog";
import chatbotLogo from "@/assets/chatbot-logo.png";

export function BotAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-muted hover:bg-muted/80 shadow-lg p-0 overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <img src={chatbotLogo} alt="Chat assistant" className="w-full h-full object-cover" />
      </Button>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
