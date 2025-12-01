import { useState, useEffect, useRef } from "react";
import { Camera, FileText, Info, Clock, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const TestTaking = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const totalQuestions = 3;
  const totalMarks = 19;

  useEffect(() => {
    if (isSubmitted) return; // Stop timer after submission
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          toast.error("Time's up! Test auto-submitted.");
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast.success("Test submitted! Please upload your solution sheet.");
  };

  const handleMarkForReview = () => {
    toast.info(`Question ${selectedQuestion} marked for review`);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast.success("Solution sheet uploaded successfully!");
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleEvaluate = () => {
    if (!uploadedFile) {
      toast.error("Please upload your solution sheet first!");
      return;
    }
    toast.success("Evaluating your solution...");
    // Navigate to results or show evaluation
    setTimeout(() => {
      navigate("/test-attempts");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Question Numbers */}
      <div className="w-24 bg-muted flex flex-col items-center py-8 space-y-4">
        <div className="bg-primary text-primary-foreground font-bold px-4 py-3 rounded-lg text-lg mb-4">
          {formatTime(timeLeft)}
        </div>
        {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setSelectedQuestion(num)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg transition-colors ${
              selectedQuestion === num
                ? "bg-destructive text-destructive-foreground"
                : "bg-muted-foreground/20 text-foreground hover:bg-muted-foreground/30"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-20 bg-card border-b border-border flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">Test</h1>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className="px-12 py-3 text-lg font-bold bg-primary hover:bg-primary/90 rounded-full"
          >
            Submit
          </Button>
        </div>

        {/* Question Content Area */}
        <div className="flex-1 flex">
          <div className="flex-1 p-12 overflow-y-auto">
            <div className="max-w-3xl">
              <div className="text-foreground space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  1. A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.
                </p>
                
                {/* Sample question image placeholder */}
                <div className="bg-white p-8 rounded-lg inline-block">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="black" strokeWidth="2"/>
                    <polygon points="40,140 80,40 160,60 140,160" fill="none" stroke="black" strokeWidth="2"/>
                    <text x="30" y="150" fontSize="20" fill="black">A</text>
                    <text x="75" y="30" fontSize="20" fill="black">B</text>
                    <text x="165" y="60" fontSize="20" fill="black">C</text>
                    <text x="135" y="175" fontSize="20" fill="black">D</text>
                  </svg>
                </div>

                {/* Upload Area - Only visible after submission */}
                {isSubmitted && (
                  <div className="mt-8">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                    
                    {/* Dashed Upload Area */}
                    <div 
                      className="border-2 border-dashed border-primary rounded-lg p-12 flex flex-col items-center justify-center min-h-[300px] cursor-pointer hover:bg-primary/5 transition-colors"
                      onClick={handleUploadClick}
                    >
                      {previewUrl ? (
                        <div className="text-center">
                          <img 
                            src={previewUrl} 
                            alt="Uploaded solution" 
                            className="max-h-48 rounded-lg mb-4 mx-auto"
                          />
                          <p className="text-sm text-muted-foreground">{uploadedFile?.name}</p>
                          <p className="text-xs text-primary mt-2">Click to change file</p>
                        </div>
                      ) : (
                        <Button 
                          variant="secondary" 
                          size="lg"
                          className="text-lg px-8 py-6 bg-muted-foreground/30 hover:bg-muted-foreground/40 text-foreground"
                        >
                          <Upload className="mr-2 h-5 w-5" />
                          Upload Solution Sheet
                        </Button>
                      )}
                    </div>

                    {/* Evaluate Button */}
                    <div className="flex justify-center mt-8">
                      <Button 
                        onClick={handleEvaluate}
                        variant="secondary"
                        size="lg"
                        className="px-16 py-6 text-lg font-semibold bg-muted-foreground/30 hover:bg-muted-foreground/40 text-foreground rounded-lg"
                      >
                        Evaluate
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-card border-l border-border p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center">
                  <Camera className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Test Duration</span>
                  <span className="text-foreground font-semibold">30 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Questions</span>
                  <span className="text-foreground font-semibold">{totalQuestions} Questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Marks</span>
                  <span className="text-foreground font-semibold">{totalMarks} Marks</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleMarkForReview}
              variant="destructive"
              className="w-full py-6 text-lg font-semibold rounded-full"
            >
              Mark for review
            </Button>
          </div>
        </div>

        {/* Bottom Left Info Icon */}
        <div className="absolute bottom-8 left-32">
          <button className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-muted transition-colors">
            <Info className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestTaking;
