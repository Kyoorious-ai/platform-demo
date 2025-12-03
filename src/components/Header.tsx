import { Sun, User, Zap, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
    <header className="h-16 border-b border-border flex items-center justify-end px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full hover:bg-secondary"
          onClick={() => {
            // Toggle theme logic here
            console.log("Theme toggle clicked");
          }}
        >
          <Sun className="h-5 w-5 text-primary" />
        </Button>
        
        {isDashboard && (
          <>
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
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </header>
  );
}
