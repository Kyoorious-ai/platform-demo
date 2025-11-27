import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Keyboard, Mic, Paperclip, PenTool } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PracticeContent = () => {
  const navigate = useNavigate();
  const { conceptId } = useParams();

  // Mock data - replace with actual data from your backend
  const conceptData: Record<string, { title: string; question: string }> = {
    "1": {
      title: "Principle of Volume Conservation",
      question: "Q. Determine whether the sequence 1, -1, -3, -5 forms an arithmetic regression. If it does, write the two terms.",
    },
    "2": {
      title: "Curved Surface Area of a Cylinder Formula",
      question: "Q. Find the curved surface area of a cylinder with radius 7 cm and height 10 cm.",
    },
    "3": {
      title: "Calculation and arithmetic errors",
      question: "Q. Identify and correct the arithmetic error in the following calculation: 25 × 4 + 10 ÷ 2 = 110",
    },
  };

  const concept = conceptData[conceptId || "1"] || conceptData["1"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-6 py-8 flex-1">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <PenTool className="h-5 w-5 text-foreground" />
            <h1 className="text-xl font-semibold text-foreground">Practice</h1>
          </div>
          <Avatar className="h-12 w-12 bg-primary">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              A
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/practice")}
              className="text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-foreground">{concept.title}</h2>
          </div>
          <button className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
            Next Question
          </button>
        </div>

        {/* Question Card */}
        <Card className="p-6 bg-primary text-primary-foreground rounded-lg mb-6">
          <p className="text-lg font-medium">{concept.question}</p>
        </Card>

        {/* Response Card */}
        <Card className="p-6 bg-card/80 border border-border/50 rounded-lg mb-6">
          <p className="text-foreground">
            Sure. Please upload whatever solution you feel is correct for the question or ask any doubt related to this question
          </p>
        </Card>

        {/* Uploaded Image Card */}
        <div className="flex justify-end mb-4">
          <Card className="p-4 bg-background border border-border/50 rounded-lg max-w-lg">
            <p className="text-foreground text-sm">
              <span className="font-bold">24.</span> A piece of wire 22 cm long is bent into the form of an arc of a circle subtending an angle of 60° at its centre. Find the radius of the circle. [Use π = 22/7]
            </p>
          </Card>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mb-6">
          <Button className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            Because I think it is Rhombus
          </Button>
        </div>

        {/* Feedback Card */}
        <Card className="p-6 bg-card/80 border border-border/50 rounded-lg mb-24">
          <p className="text-foreground">
            I think you have solved correcty, it is just ABCD is not forming correct answer.
          </p>
        </Card>
      </div>

      {/* Bottom toolbar */}
      <div className="fixed bottom-0 left-0 right-0 p-6">
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center hover:bg-primary transition-colors">
            <Keyboard className="h-5 w-5 text-primary-foreground" />
          </button>
          <button className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center hover:bg-primary transition-colors">
            <Mic className="h-5 w-5 text-primary-foreground" />
          </button>
          <button className="w-12 h-12 rounded-full bg-transparent border-2 border-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Paperclip className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeContent;
