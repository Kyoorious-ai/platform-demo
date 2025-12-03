import { LucideIcon } from "lucide-react";

export interface SubjectCardProps {
  name: string;
  icon: LucideIcon;
  activeChapter: string;
  isActive?: boolean;
  showActive?: boolean;
  portrait?: string;
}

export function SubjectCard({ name, icon: Icon, activeChapter, isActive = false, showActive = true, portrait }: SubjectCardProps) {
  return (
    <div 
      className={`rounded-2xl border-2 p-6 flex flex-col items-start gap-3 transition-all hover:border-primary cursor-pointer ${
        isActive ? 'border-primary bg-primary/5' : 'border-border'
      }`}
    >
      {portrait ? (
        <img src={portrait} alt={name} className="h-12 w-12 object-contain" />
      ) : (
        <Icon className="h-12 w-12 text-foreground" />
      )}
      <div>
        <h3 className={`text-lg font-semibold mb-1 ${isActive ? 'text-primary' : 'text-foreground'}`}>
          {name}
        </h3>
        {showActive && (
          <p className="text-xs text-muted-foreground">Active: {activeChapter}</p>
        )}
      </div>
    </div>
  );
}
