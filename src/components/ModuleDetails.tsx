import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Play,
  CheckCircle,
  Lock,
  Clock,
  BookOpen,
  Mic,
  Volume2,
  FileText,
  Award
} from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  type: 'video' | 'audio' | 'text' | 'quiz';
}

interface ModuleDetailsProps {
  module: {
    id: number;
    title: string;
    description: string;
    duration: string;
    lessons: number;
    progress: number;
  };
  onBack: () => void;
}

const ModuleDetails = ({ module, onBack }: ModuleDetailsProps) => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const lessons: Lesson[] = [
    { id: 1, title: "Introduction to Crop Planning", duration: "5 min", completed: true, locked: false, type: 'audio' },
    { id: 2, title: "Understanding Seasonal Cycles", duration: "8 min", completed: true, locked: false, type: 'audio' },
    { id: 3, title: "Crop Rotation Basics", duration: "6 min", completed: false, locked: false, type: 'audio' },
    { id: 4, title: "Planning Your Farm Layout", duration: "10 min", completed: false, locked: false, type: 'video' },
    { id: 5, title: "Water Requirements Planning", duration: "7 min", completed: false, locked: true, type: 'audio' },
    { id: 6, title: "Pest Management Strategy", duration: "9 min", completed: false, locked: true, type: 'text' },
    { id: 7, title: "Harvest Timing", duration: "6 min", completed: false, locked: true, type: 'audio' },
    { id: 8, title: "Module Assessment Quiz", duration: "15 min", completed: false, locked: true, type: 'quiz' },
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedLessons / lessons.length) * 100;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'audio': return <Mic className="h-4 w-4" />;
      case 'video': return <Play className="h-4 w-4" />;
      case 'text': return <FileText className="h-4 w-4" />;
      case 'quiz': return <Award className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'audio': return 'bg-accent';
      case 'video': return 'bg-secondary';
      case 'text': return 'bg-primary';
      case 'quiz': return 'bg-warning';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack} className="hover-scale">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-foreground">{module.title}</h2>
          <p className="text-muted-foreground mt-1">{module.description}</p>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{completedLessons}/{lessons.length}</div>
              <div className="text-sm text-muted-foreground">Lessons Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">{module.duration}</div>
              <div className="text-sm text-muted-foreground">Total Duration</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-muted-foreground">Progress</div>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                <Clock className="mr-1 h-3 w-3" />
                In Progress
              </Badge>
              <div className="text-sm text-muted-foreground">Status</div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Lessons List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {lessons.map((lesson, index) => (
          <Card 
            key={lesson.id} 
            className={`group transition-all duration-300 hover-scale cursor-pointer ${
              lesson.locked ? 'opacity-60' : 'hover:shadow-medium'
            } ${selectedLesson === lesson.id ? 'ring-2 ring-primary' : ''}`}
            onClick={() => !lesson.locked && setSelectedLesson(lesson.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                {/* Lesson Number */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                  lesson.completed ? 'bg-success' : lesson.locked ? 'bg-muted' : 'bg-primary'
                }`}>
                  {lesson.completed ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : lesson.locked ? (
                    <Lock className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Lesson Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-semibold ${lesson.locked ? 'text-muted-foreground' : 'text-foreground group-hover:text-primary'} transition-colors`}>
                      {lesson.title}
                    </h3>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getTypeIcon(lesson.type)}
                      <span className="text-xs">{lesson.type}</span>
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{lesson.duration}</span>
                    </div>
                    
                    {lesson.completed && (
                      <Badge variant="default" className="text-xs">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Completed
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    {lesson.locked ? (
                      <Button variant="outline" size="sm" disabled className="w-full">
                        <Lock className="mr-2 h-3 w-3" />
                        Locked
                      </Button>
                    ) : lesson.completed ? (
                      <Button variant="outline" size="sm" className="w-full">
                        <Volume2 className="mr-2 h-3 w-3" />
                        Review
                      </Button>
                    ) : (
                      <Button size="sm" className="w-full group-hover:scale-105 transition-transform">
                        <Play className="mr-2 h-3 w-3" />
                        Start Lesson
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Learning Button */}
      {completedLessons < lessons.length && (
        <div className="text-center pt-6">
          <Button size="lg" className="px-8 hover-scale">
            <Play className="mr-2 h-5 w-5" />
            Continue Learning
          </Button>
        </div>
      )}
    </div>
  );
};

export default ModuleDetails;