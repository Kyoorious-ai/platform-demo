import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
];

export function SubjectDropdown() {
  return (
    <Select defaultValue="Mathematics">
      <SelectTrigger className="w-[280px] h-14 bg-card border-border text-primary text-2xl font-semibold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {subjects.map((subject) => (
          <SelectItem
            key={subject}
            value={subject}
            className="text-foreground text-lg hover:bg-secondary cursor-pointer"
          >
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
