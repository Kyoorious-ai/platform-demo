interface MasteryCircleProps {
  percentage: number;
}

export function MasteryCircle({ percentage }: MasteryCircleProps) {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-64 h-64">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 220 220">
          {/* Background circle */}
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
          />
          
          {/* Progress circle with gradient */}
          <defs>
            <linearGradient id="masteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(60 100% 70%)" />
            </linearGradient>
          </defs>
          
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="url(#masteryGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg text-muted-foreground mb-2">Mastery</span>
          <span className="text-5xl font-bold text-primary">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
