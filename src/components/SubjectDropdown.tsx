import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMode } from "@/contexts/ModeContext";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
];

const chapters = [
  "Surface Area and Volumes",
  "Algebra",
  "Polynomials",
];

export function SubjectDropdown() {
  const { mode } = useMode();
  const isExamMode = mode === "exam";
  const options = isExamMode ? subjects : chapters;
  const defaultValue = isExamMode ? "Mathematics" : "Surface Area and Volumes";

  return (
    <Select defaultValue={defaultValue} key={mode}>
      <SelectTrigger className="w-[280px] h-14 bg-card border-border text-primary text-2xl font-semibold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-card border-border z-50">
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="text-foreground text-lg hover:bg-secondary cursor-pointer"
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
