import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TestInstructions = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/test-instructions-2");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-5xl mx-auto bg-card border-border p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-4">
            Instructions
          </h2>
          
          <div className="space-y-6 text-foreground">
            <h3 className="text-xl font-semibold">Board Objective Test I</h3>
            
            <div className="space-y-4">
              <p>(i) This question paper consists of 15 questions, all of which are compulsory.</p>
              
              <p>(i) The paper is divided into six sections — A, B, C, D, E, and F.</p>
              
              <p>(iii) Section A: Questions 1 Eo 7 are Multiple Choice Questions (MCQs), each carrying 1 mark.</p>
              
              <p>(v) Section B: Questions 8 to 11 are Very Shore Answer type questions, each carrying 2 marks</p>
              
              <p>(v) Section C: Questions 12 and 13 are Shore Answer type questions, each carrying 3 marks.</p>
              
              <p>(vi) Section D: Question 14 is a Long Answer (LA) type question carrying 5 marks.</p>
              
              <p>(vii) Section E: Question 15 is a Case/Source-based question with three sub- questions, carrying total of 4 marks.</p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button
              onClick={handleNext}
              className="px-16 py-6 text-lg font-semibold bg-primary hover:bg-primary/90"
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TestInstructions;
