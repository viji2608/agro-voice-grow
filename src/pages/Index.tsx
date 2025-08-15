import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import VoiceInterface from "@/components/VoiceInterface";
import ProgressDashboard from "@/components/ProgressDashboard";
import QuizSection from "@/components/QuizSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LearningModules />
      <VoiceInterface />
      <ProgressDashboard />
      <QuizSection />
    </div>
  );
};

export default Index;
