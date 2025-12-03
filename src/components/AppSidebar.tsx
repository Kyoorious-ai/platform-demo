import { FlaskConical, BookOpen, PenTool, CreditCard, LayoutDashboard } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useMode } from "@/contexts/ModeContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Test", url: "/test", icon: FlaskConical },
  { title: "Study", url: "/study", icon: BookOpen },
  { title: "Practice", url: "/practice", icon: PenTool },
  { title: "Report Card", url: "/report-card", icon: CreditCard },
];

export function AppSidebar() {
  const { mode, setMode } = useMode();

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-6 flex flex-col h-full">
        <div className="px-6 mb-8">
          <h1 className="text-xl font-bold text-foreground">
            ky<span className="inline-flex items-center"><span className="w-2 h-2 bg-primary rounded-full mx-0.5"></span><span className="w-2 h-2 bg-primary rounded-full mr-0.5"></span></span>rious.ai
          </h1>
        </div>

        {/* Mode Toggle */}
        <div className="px-4 mb-6">
          <div className="flex rounded-full border-2 border-border bg-background overflow-hidden">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium transition-all rounded-full ${
                mode === "learn" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMode("learn")}
            >
              Learn Mode
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium transition-all rounded-full ${
                mode === "exam" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMode("exam")}
            >
              Exam Mode
            </button>
          </div>
        </div>

        {/* Dashboard Button */}
        <div className="px-6 mb-6">
          <NavLink
            to="/"
            end
            className="flex items-center gap-3 w-full px-4 py-3 rounded-md border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
            activeClassName="bg-primary text-white border-primary"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </NavLink>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-muted-foreground text-sm mb-2">
            {mode === "exam" ? "Subject Focus" : "Chapter Focus"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      activeClassName="text-foreground bg-secondary"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile at bottom - only in Exam Mode */}
        {mode === "exam" && (
          <div className="mt-auto px-6 pb-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 bg-primary">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-foreground font-medium">Aayush Sharma</p>
                <p className="text-muted-foreground text-sm">Class 10</p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
