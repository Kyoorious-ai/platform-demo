import { Header } from "@/components/Header";
import { BotAssistant } from "@/components/BotAssistant";
import { SubjectCard } from "@/components/SubjectCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Microscope, Users, BookOpen, GraduationCap, TrendingDown, Flame, FileCheck } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";

const Index = () => {
  const { mode } = useMode();

  const subjects = [
    { name: "Mathematics", icon: Calculator, activeChapter: "Surface Area and Volumes", isActive: true },
    { name: "Science", icon: Microscope, activeChapter: "Electricity" },
    { name: "Social Science", icon: Users, activeChapter: "-" },
    { name: "Hindi", icon: BookOpen, activeChapter: "Electricity" },
    { name: "English", icon: GraduationCap, activeChapter: "Electricity" },
  ];

  return (
    <div className="min-h-screen bg-background font-regular">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Greeting Section */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground">Hi, Ayush Sharma</h1>
          <Badge variant="outline" className="border-primary text-primary px-4 py-2 text-sm">
            <GraduationCap className="mr-2 h-4 w-4" />
            Level 1 Explorer
          </Badge>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {subjects.map((subject) => (
            <SubjectCard 
              key={subject.name} 
              {...subject} 
            />
          ))}
        </div>

        {/* Performance Section - Different for Learn vs Exam Mode */}
        {mode === "learn" ? (
          <div className="rounded-3xl border-l-8 border-primary bg-gradient-to-br from-primary/10 via-background to-background p-8 mb-8">
            <p className="text-sm text-muted-foreground mb-2 tracking-wider">ANALYZING PERFORMANCE</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Mastery In Mathematics</h2>
            
            <div className="flex items-center justify-between">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl">
                View Report card
              </Button>
              
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 80}`}
                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.25)}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">25%</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border-l-8 border-primary bg-gradient-to-br from-primary/10 via-secondary/30 to-background p-8 mb-8">
            <p className="text-sm text-muted-foreground mb-2 tracking-wider">ANALYZING PERFORMANCE</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Expected Board Score in <span className="text-primary">Mathematics</span>
            </h2>
            
            <div className="flex items-center justify-between">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl">
                View Report card
              </Button>
              
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 80}`}
                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - 25/80)}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-primary">25</span>
                  <span className="text-2xl text-muted-foreground">/80</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={TrendingDown}
            label="Active Weakness"
            value={3}
            subtitle="Study and practice"
          />
          <StatCard 
            icon={Flame}
            label="Current Streak"
            value={5}
            subtitle="Keep it Up"
          />
          <StatCard 
            icon={FileCheck}
            label="Tests Taken"
            value={14}
            subtitle="Total this month"
          />
        </div>
      </main>

      <BotAssistant />
    </div>
  );
};

export default Index;
