import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TestInstructions2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/test-taking");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-5xl mx-auto bg-card border-primary border-2 p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-4">
            Instructions
          </h2>
          
          <div className="space-y-6 text-foreground">
            <h3 className="text-xl font-semibold">Board Objective Test I</h3>
            
            <div className="space-y-5 text-sm leading-relaxed">
              <div>
                <p className="font-semibold mb-2">1. Reading Time (15 Minutes)</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>You will be given 5 minutes to read and understand the entire question paper</li>
                  <li>Use this time to review all sections, plan your approach, and decide the order in which you will attempt the sections.</li>
                  <li>Do not start writing your answers during these 5 minutes.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">2. Writing Time (1 Hour)</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>You will be given 1 hour to write answers to all questions.</li>
                  <li>Manage your time carefully so that you can complete all sections within the given duration.</li>
                  <li>Once the 1 hour is over, the writing window will close automatically.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">3. Submission Time (10 Minutes)</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>After completing your answers, you will get 10 minutes to take clear photographs of your entire answer sheet and upload them on the platform.</li>
                  <li>Make sure all pages are clearly visible, in proper order, and correctly uploaded before submission.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">4. Neatness and Organisation</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Write all your answers neatly and legibly.</li>
                  <li>Mention the section name and question number for every answer.</li>
                  <li>All solutions belonging to a particular section should be written together one place.</li>
                  <li>Avoid scattering answers from the same section across different pages.</li>
                  <li>Present your answers in clean and structured manner so the AI can evaluate them accurately.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">5. AI Evaluation and Report Generation</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>The AI will take approximately 30 minutes to evaluate your uploaded answers.</li>
                  <li>You will receive a personalised report showing your marks obtained and detailed chapter-wise action report for improvement.</li>
                </ul>
              </div>
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

export default TestInstructions2;
