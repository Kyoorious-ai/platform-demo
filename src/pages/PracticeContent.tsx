import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Mic, Send, PenTool, Sun } from "lucide-react";
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
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full hover:bg-secondary"
          >
            <Sun className="h-5 w-5 text-primary" />
          </Button>
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

      {/* Bottom prompt box */}
      <div className="fixed bottom-0 left-64 right-0 p-6">
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

export default PracticeContent;
