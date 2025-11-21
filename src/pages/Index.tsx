import { Header } from "@/components/Header";
import { SubjectDropdown } from "@/components/SubjectDropdown";
import { MasteryCircle } from "@/components/MasteryCircle";
import { ExplorerButton } from "@/components/ExplorerButton";
import { BotAssistant } from "@/components/BotAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-16">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <div className="flex-1" />
            <SubjectDropdown />
            <div className="flex-1 flex justify-end">
              <ExplorerButton />
            </div>
          </div>

          <MasteryCircle percentage={25} />
        </div>
      </main>

      <BotAssistant />
    </div>
  );
};

export default Index;
