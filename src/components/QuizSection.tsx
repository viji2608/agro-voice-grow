import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle,
  XCircle,
  Lightbulb,
  Trophy,
  Mic,
  Volume2
} from "lucide-react";

const sampleQuiz = {
  id: 1,
  title: "Soil pH Testing",
  question: "मिट्टी का सही pH स्तर क्या है? (What is the correct pH level for soil?)",
  options: [
    { id: 'a', text: "4.5 - 5.5 (अम्लीय)", correct: false },
    { id: 'b', text: "6.0 - 7.5 (तटस्थ)", correct: true },
    { id: 'c', text: "8.0 - 9.0 (क्षारीय)", correct: false },
    { id: 'd', text: "कोई फर्क नहीं", correct: false }
  ],
  explanation: "Most crops grow best in neutral to slightly acidic soil with pH 6.0-7.5. This range allows optimal nutrient uptake."
};

const QuizSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 5;
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswer(optionId);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setShowResult(true);
    
    const isCorrect = sampleQuiz.options.find(opt => opt.id === selectedAnswer)?.correct;
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Interactive Quiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test your knowledge with gamified learning experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="px-4 py-2">
                  Question {currentQuestion} of {totalQuestions}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Trophy className="mr-2 h-4 w-4" />
                  Score: {score}/{currentQuestion - 1}
                </Badge>
              </div>
              
              <Progress value={progressPercentage} className="h-2" />
              
              <CardTitle className="text-2xl text-center">
                {sampleQuiz.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Voice Controls */}
              <div className="flex justify-center gap-4 p-4 bg-muted/30 rounded-xl">
                <Button variant="outline" size="sm">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Listen to Question
                </Button>
                <Button variant="outline" size="sm">
                  <Mic className="mr-2 h-4 w-4" />
                  Voice Answer
                </Button>
              </div>
              
              {/* Question */}
              <div className="text-center p-6 bg-earth-light rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {sampleQuiz.question}
                </h3>
              </div>
              
              {/* Options */}
              <div className="space-y-3">
                {sampleQuiz.options.map((option) => {
                  const isSelected = selectedAnswer === option.id;
                  const isCorrect = option.correct && showResult;
                  const isWrong = isSelected && !option.correct && showResult;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(option.id)}
                      disabled={showResult}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                        isCorrect 
                          ? 'border-success bg-success/10 text-success' 
                          : isWrong 
                          ? 'border-destructive bg-destructive/10 text-destructive'
                          : isSelected 
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-muted hover:border-primary/50 hover:bg-primary/5'
                      } ${showResult ? 'cursor-default' : 'cursor-pointer hover:scale-[1.02]'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                            isCorrect 
                              ? 'border-success bg-success text-white' 
                              : isWrong 
                              ? 'border-destructive bg-destructive text-white'
                              : isSelected 
                              ? 'border-primary bg-primary text-white'
                              : 'border-muted-foreground'
                          }`}>
                            {option.id.toUpperCase()}
                          </div>
                          <span className="font-medium">{option.text}</span>
                        </div>
                        
                        {showResult && isCorrect && (
                          <CheckCircle className="h-6 w-6 text-success" />
                        )}
                        {showResult && isWrong && (
                          <XCircle className="h-6 w-6 text-destructive" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Explanation */}
              {showResult && (
                <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-accent mb-2">Explanation</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {sampleQuiz.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Action Button */}
              <div className="text-center pt-4">
                {!showResult ? (
                  <Button 
                    onClick={handleSubmit}
                    disabled={!selectedAnswer}
                    size="lg"
                    className="px-8"
                  >
                    Submit Answer
                  </Button>
                ) : currentQuestion < totalQuestions ? (
                  <Button 
                    onClick={handleNext}
                    size="lg"
                    className="px-8"
                  >
                    Next Question
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-success">
                      Quiz Complete! Final Score: {score}/{totalQuestions}
                    </div>
                    <Button size="lg" className="px-8">
                      Continue Learning
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;