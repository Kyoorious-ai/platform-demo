import { Home, FlaskConical, BookOpen, PenTool, CreditCard } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Test", url: "/test", icon: FlaskConical },
  { title: "Study", url: "/study", icon: BookOpen },
  { title: "Practice", url: "/practice", icon: PenTool },
  { title: "Report Card", url: "/report-card", icon: CreditCard },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-6">
        <div className="px-6 mb-8">
          <h1 className="text-xl font-bold text-foreground">
            ky<span className="inline-flex items-center"><span className="w-2 h-2 bg-primary rounded-full mx-0.5"></span><span className="w-2 h-2 bg-primary rounded-full mr-0.5"></span></span>rious.ai
          </h1>
        </div>

        <SidebarGroup>
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
      </SidebarContent>
    </Sidebar>
  );
}
