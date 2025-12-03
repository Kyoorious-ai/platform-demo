import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Mic, Send, BookOpen } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const StudyContent = () => {
  const navigate = useNavigate();
  const { conceptId } = useParams();

  // Mock data - replace with actual data from your backend
  const conceptData: Record<string, { title: string; content: string }> = {
    "1": {
      title: "Principle of Volume Conservation",
      content: `The Pythagorean Theorem is a fundamental principle in geometry that applies to right-angled triangles. It states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.
The formula is:`,
    },
    "2": {
      title: "Curved Surface Area of a Cylinder Formula",
      content: `The curved surface area of a cylinder is the area of the curved surface excluding the top and bottom circular faces. It represents the lateral surface that wraps around the cylinder.
The formula is:`,
    },
  };

  const concept = conceptData[conceptId || "1"] || conceptData["1"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-6 py-8 flex-1">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-foreground" />
            <h1 className="text-xl font-semibold text-foreground">Study</h1>
          </div>
          <Avatar className="h-12 w-12 bg-primary">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              A
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/study")}
            className="text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold text-foreground">{concept.title}</h2>
        </div>

        <Card className="p-8 bg-card/80 border border-border/50 rounded-lg mb-8">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {concept.content}
            </p>

            <div className="border-t border-border/50 pt-6">
              <p className="font-bold text-foreground mb-2">Where:</p>
              <ul className="text-foreground space-y-1">
                <li>• c is the length of the hypotenuse,</li>
                <li>• a and b the lengths of the other two sides.</li>
              </ul>
            </div>

            <div>
              <p className="text-primary mb-4">Simple Example:</p>
              <p className="font-bold text-foreground italic mb-2">
                Consider a right triangle where:
              </p>
              <ul className="text-foreground space-y-1">
                <li>• Side a = 3 units,</li>
                <li>• Side b = 4 units.</li>
              </ul>
              <p className="text-foreground mt-4">
                To find the length of the hypotenuse (c), we can use the theorem:
              </p>
              <p className="text-foreground mt-4 font-bold">I. Apply the theorem:</p>
            </div>
          </div>
        </Card>

        <div className="flex justify-end mb-24">
          <Button className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            Because I think it is Rhombus
          </Button>
        </div>
      </div>

      {/* Bottom prompt box */}
      <div className="fixed bottom-0 left-0 right-0 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-3">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Plus className="h-5 w-5" />
            </button>
            <input
              type="text"
              placeholder="Ask your doubt"
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Mic className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyContent;
