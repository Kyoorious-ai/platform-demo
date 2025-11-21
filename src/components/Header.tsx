import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6">
      <div className="text-xl font-bold">
        ky<span className="inline-flex items-center"><span className="w-2 h-2 bg-primary rounded-full mx-0.5"></span><span className="w-2 h-2 bg-primary rounded-full mr-0.5"></span></span>rious.ai
      </div>

      <div className="flex items-center gap-4">
        <Sun className="h-5 w-5 text-muted-foreground" />
        <Switch />
        <Moon className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-foreground ml-2">Hi, Avush Sharma</span>
        <Avatar className="h-10 w-10 bg-primary">
          <AvatarFallback className="bg-primary text-primary-foreground font-bold">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
