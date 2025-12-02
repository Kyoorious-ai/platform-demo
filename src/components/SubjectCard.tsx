import { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  name: string;
  icon: LucideIcon;
  activeChapter: string;
  isActive?: boolean;
}

export function SubjectCard({ name, icon: Icon, activeChapter, isActive = false }: SubjectCardProps) {
  return (
    <div 
      className={`rounded-2xl border-2 p-6 flex flex-col items-center gap-3 transition-all hover:border-primary cursor-pointer ${
        isActive ? 'border-primary bg-primary/5' : 'border-border'
      }`}
    >
      <Icon className="h-12 w-12 text-foreground" />
      <div className="text-center">
        <h3 className={`text-lg font-semibold mb-1 ${isActive ? 'text-primary' : 'text-foreground'}`}>
          {name}
        </h3>
        <p className="text-xs text-muted-foreground">Active: {activeChapter}</p>
      </div>
    </div>
  );
}