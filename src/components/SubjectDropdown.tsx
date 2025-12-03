import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chapters = [
  "Surface Area and Volumes",
  "Algebra",
  "Polynomials",
];

export function SubjectDropdown() {
  return (
    <Select defaultValue="Surface Area and Volumes">
      <SelectTrigger className="w-[280px] h-14 bg-card border-border text-primary text-2xl font-semibold">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-card border-border z-50">
        {chapters.map((chapter) => (
          <SelectItem
            key={chapter}
            value={chapter}
            className="text-foreground text-lg hover:bg-secondary cursor-pointer"
          >
            {chapter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
