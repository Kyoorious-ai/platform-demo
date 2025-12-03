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
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
    setIsEvaluating(true);
    // Show loading for 5 seconds then show results
    setTimeout(() => {
      setIsEvaluating(false);
      setShowResults(true);
    }, 5000);
  };

  // Results Screen
  if (showResults) {
    return (
      <div className="min-h-screen bg-background flex">
        {/* Left Sidebar with Robot and Icons */}
        <div className="w-20 bg-background flex flex-col items-center py-6 space-y-6">
          {/* Robot Icon */}
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="12" width="24" height="20" rx="4" fill="#a3e635"/>
              <circle cx="15" cy="20" r="5" fill="white"/>
              <circle cx="25" cy="20" r="5" fill="white"/>
              <circle cx="15" cy="20" r="2" fill="black"/>
              <circle cx="25" cy="20" r="2" fill="black"/>
              <rect x="18" y="4" width="4" height="10" rx="2" fill="#a3e635"/>
              <circle cx="20" cy="4" r="3" fill="#a3e635"/>
            </svg>
          </div>
          
          {/* Navigation Icons */}
          <button className="w-10 h-10 rounded-lg border border-primary flex items-center justify-center text-primary">
            <Clock className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary">
            <FileText className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19l7-7 3 3-7 7-3-3z"/>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
              <path d="M2 2l7.586 7.586"/>
            </svg>
          </button>
          <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-8">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Test</span>
            </div>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </button>
          </div>

          {/* Results Content */}
          <div className="flex-1 px-12 py-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-destructive italic mb-8">
              Surface Area Volume
            </h1>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button 
                variant="outline" 
                className="px-12 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
              >
                Review
              </Button>
              <Button 
                variant="outline" 
                className="px-12 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
              >
                Answer Key
              </Button>
            </div>

            <div className="border-t border-border mb-8" />

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Weak Concepts Card */}
              <div className="border-2 border-primary rounded-xl overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <h3 className="text-lg font-bold text-primary-foreground">Weak Concepts Identified</h3>
                </div>
                <div className="p-6 space-y-6">
                  {/* Concept 1 */}
                  <div className="border-b border-border pb-6">
                    <p className="text-foreground mb-4">Principle of Volume Conservation</p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                        Study Now
                      </Button>
                      <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                        Practice Now
                      </Button>
                    </div>
                  </div>
                  {/* Concept 2 */}
                  <div>
                    <p className="text-foreground mb-4">Curved Surface Area of a Cylinder Formula</p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                        Study Now
                      </Button>
                      <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                        Practice Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Silly Mistakes Card */}
              <div className="border-2 border-primary rounded-xl overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <h3 className="text-lg font-bold text-primary-foreground">Silly Mistakes Identified</h3>
                </div>
                <div className="p-6 space-y-6">
                  {/* Mistake 1 */}
                  <div className="border-b border-border pb-6">
                    <p className="text-foreground mb-4">Calculation and arithmetic errors</p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                        Practice Now
                      </Button>
                    </div>
                  </div>
                  {/* Mistake 2 */}
                  <div>
                    <p className="text-foreground mb-4">Sign mistakes</p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                        Practice Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Test Button */}
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => navigate("/test")}
                variant="secondary"
                className="px-16 py-6 text-lg bg-muted-foreground/30 hover:bg-muted-foreground/40 text-foreground rounded-lg"
              >
                Next Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Evaluating Loading Screen
  if (isEvaluating) {
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
              className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
                selectedQuestion === num
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-muted-foreground/20 text-foreground"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Main Content - Loading Screen */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-20 bg-card border-b border-border flex items-center justify-between px-8">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">Test</h1>
            </div>
            <Button
              disabled
              className="px-12 py-3 text-lg font-bold bg-primary hover:bg-primary/90 rounded-full"
            >
              Submit
            </Button>
          </div>

          {/* Loading Content */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Question Image - Faded in background */}
            <div className="absolute left-12 top-1/3 opacity-30">
              <div className="bg-white p-8 rounded-lg">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="black" strokeWidth="2"/>
                  <polygon points="40,140 80,40 160,60 140,160" fill="none" stroke="black" strokeWidth="2"/>
                  <text x="30" y="150" fontSize="20" fill="black">A</text>
                  <text x="75" y="30" fontSize="20" fill="black">B</text>
                  <text x="165" y="60" fontSize="20" fill="black">C</text>
                  <text x="135" y="175" fontSize="20" fill="black">D</text>
                </svg>
              </div>
            </div>

            {/* Robot and Message */}
            <div className="flex flex-col items-center z-10">
              {/* Robot Icon */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mb-4">
                <rect x="16" y="24" width="48" height="40" rx="8" fill="#a3e635"/>
                <circle cx="30" cy="40" r="10" fill="white"/>
                <circle cx="50" cy="40" r="10" fill="white"/>
                <circle cx="30" cy="40" r="4" fill="black"/>
                <circle cx="50" cy="40" r="4" fill="black"/>
                <rect x="36" y="8" width="8" height="20" rx="4" fill="#a3e635"/>
                <circle cx="40" cy="8" r="6" fill="#a3e635"/>
              </svg>
              
              <h2 className="text-3xl font-bold text-primary mb-8">
                Time for a tiny break
              </h2>
              
              <p className="text-xl text-foreground text-center max-w-2xl font-medium">
                Give Kyoori about 5 minutes to review your solutions and craft your personalized improvement report
              </p>
            </div>

            {/* Camera in top right */}
            <div className="absolute top-8 right-8">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                <Camera className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>

            {/* Right Sidebar Info - Faded */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-30 space-y-4 text-sm text-right">
              <div>
                <span className="text-muted-foreground">Test Duration</span>
                <span className="text-foreground font-semibold ml-4">30 minutes</span>
              </div>
              <div>
                <span className="text-muted-foreground">Total Questions</span>
                <span className="text-foreground font-semibold ml-4">{totalQuestions} Questions</span>
              </div>
              <div>
                <span className="text-muted-foreground">Total Marks</span>
                <span className="text-foreground font-semibold ml-4">{totalMarks} Marks</span>
              </div>
            </div>
          </div>

          {/* Bottom Left Info Icon */}
          <div className="absolute bottom-8 left-32">
            <button className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
              <Info className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Mark for Review Button - Faded */}
          <div className="absolute bottom-8 right-8 opacity-50">
            <Button
              variant="destructive"
              className="px-8 py-4 text-lg font-semibold rounded-full"
              disabled
            >
              Mark for review
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="flex-1 flex relative">
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*,.pdf"
            className="hidden"
          />

          {/* Question Content */}
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
              </div>
            </div>
          </div>

          {/* Full Screen Upload Overlay - Only visible after submission */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center z-10">
              {/* Dashed Upload Area */}
              <div 
                className="border-2 border-dashed border-primary rounded-lg p-16 flex flex-col items-center justify-center min-h-[400px] min-w-[600px] cursor-pointer hover:bg-primary/5 transition-colors"
                onClick={handleUploadClick}
              >
                {previewUrl ? (
                  <div className="text-center">
                    <img 
                      src={previewUrl} 
                      alt="Uploaded solution" 
                      className="max-h-64 rounded-lg mb-4 mx-auto"
                    />
                    <p className="text-sm text-muted-foreground">{uploadedFile?.name}</p>
                    <p className="text-xs text-primary mt-2">Click to change file</p>
                  </div>
                ) : (
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="text-xl px-12 py-8 bg-muted-foreground/30 hover:bg-muted-foreground/40 text-foreground"
                  >
                    <Upload className="mr-3 h-6 w-6" />
                    Upload Solution Sheet
                  </Button>
                )}
              </div>

              {/* Evaluate Button */}
              <div className="mt-12">
                <Button 
                  onClick={handleEvaluate}
                  variant="secondary"
                  size="lg"
                  className="px-20 py-8 text-xl font-semibold bg-muted-foreground/30 hover:bg-muted-foreground/40 text-foreground rounded-lg"
                >
                  Evaluate
                </Button>
              </div>
            </div>
          )}

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
