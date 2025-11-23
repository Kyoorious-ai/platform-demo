import { Sun, Moon, User, Zap, GraduationCap, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10 bg-primary cursor-pointer">
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                A
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-card border-border">
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Zap className="mr-2 h-4 w-4" />
              Pro Mode
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <GraduationCap className="mr-2 h-4 w-4" />
              Learn Mode
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
