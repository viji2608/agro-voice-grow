import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Bookmark,
  MessageSquare,
  CheckCircle,
  Clock,
  RotateCcw
} from "lucide-react";

interface LessonPlayerProps {
  lesson: {
    id: number;
    title: string;
    duration: string;
    type: string;
  };
  onBack: () => void;
  onComplete: () => void;
}

const LessonPlayer = ({ lesson, onBack, onComplete }: LessonPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(2.5); // minutes
  const [totalTime] = useState(8); // minutes
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const progressPercentage = (currentTime / totalTime) * 100;

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const formatTime = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack} className="hover-scale">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground">{lesson.title}</h2>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">
              {lesson.type}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {lesson.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Main Player */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader className="text-center space-y-4">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-strong">
            <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
              {isPlaying ? (
                <Pause className="h-8 w-8 text-primary" />
              ) : (
                <Play className="h-8 w-8 text-primary ml-1" />
              )}
            </div>
          </div>
          
          <CardTitle className="text-xl">Understanding Seasonal Cycles</CardTitle>
          <CardDescription>
            Learn how different seasons affect crop planning and farming decisions
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalTime)}</span>
            </div>
          </div>
          
          {/* Main Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon">
              <RotateCcw className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            
            <Button 
              size="icon" 
              className="h-16 w-16 rounded-full hover-scale"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8" />
              ) : (
                <Play className="h-8 w-8 ml-1" />
              )}
            </Button>
            
            <Button variant="outline" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="icon" onClick={toggleMute}>
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          {/* Secondary Controls */}
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmark
            </Button>
            
            <Button 
              variant={isListening ? "default" : "outline"} 
              size="sm"
              onClick={toggleListening}
              className={isListening ? "animate-pulse" : ""}
            >
              {isListening ? (
                <Mic className="mr-2 h-4 w-4" />
              ) : (
                <MicOff className="mr-2 h-4 w-4" />
              )}
              {isListening ? "Listening..." : "Ask Question"}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowTranscript(!showTranscript)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Transcript
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transcript */}
      {showTranscript && (
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Lesson Transcript
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">[0:00]</strong> नमस्कार किसान भाइयों और बहनों! आज हम सीखेंगे कि मौसमी चक्र कैसे हमारी फसल की योजना को प्रभावित करते हैं।
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">[0:30]</strong> Welcome farmers! Today we will learn how seasonal cycles affect our crop planning and farming decisions.
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-primary">[2:30] Current</strong> भारत में मुख्यतः तीन मौसम होते हैं - खरीफ, रबी और जायद। Each season has specific crops that grow best during that time.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Voice Interaction */}
      {isListening && (
        <Card className="animate-scale-in bg-accent/10 border border-accent/20">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-4 animate-pulse">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-accent mb-2">सुन रहा हूँ... (Listening...)</h3>
            <p className="text-sm text-muted-foreground">
              Ask your question about seasonal cycles or crop planning
            </p>
          </CardContent>
        </Card>
      )}

      {/* Lesson Complete */}
      {progressPercentage >= 100 && (
        <Card className="animate-scale-in bg-success/10 border border-success/20">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
            <h3 className="text-xl font-bold text-success mb-2">Lesson Complete!</h3>
            <p className="text-muted-foreground mb-4">
              Great job! You've completed this lesson on seasonal cycles.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={onBack}>
                Back to Module
              </Button>
              <Button onClick={onComplete} className="hover-scale">
                Next Lesson
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LessonPlayer;