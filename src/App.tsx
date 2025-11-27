import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Test from "./pages/Test";
import Study from "./pages/Study";
import StudyContent from "./pages/StudyContent";
import Practice from "./pages/Practice";
import PracticeContent from "./pages/PracticeContent";
import TestAttempts from "./pages/TestAttempts";
import TestInstructions from "./pages/TestInstructions";
import TestInstructions2 from "./pages/TestInstructions2";
import TestTaking from "./pages/TestTaking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/test" element={<Test />} />
                <Route path="/study" element={<Study />} />
                <Route path="/study/:conceptId" element={<StudyContent />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/practice/:conceptId" element={<PracticeContent />} />
                <Route path="/test-attempts" element={<TestAttempts />} />
                <Route path="/test-instructions" element={<TestInstructions />} />
                <Route path="/test-instructions-2" element={<TestInstructions2 />} />
                <Route path="/test-taking" element={<TestTaking />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
