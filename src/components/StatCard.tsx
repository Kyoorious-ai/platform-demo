import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  subtitle: string;
}

export function StatCard({ icon: Icon, label, value, subtitle }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-5 w-5" />
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-4xl font-bold text-primary">{value}</div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}