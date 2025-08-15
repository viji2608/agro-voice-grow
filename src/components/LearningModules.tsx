import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ModuleDetails from "./ModuleDetails";
import LessonPlayer from "./LessonPlayer";
import { 
  Sprout, 
  Droplets, 
  DollarSign, 
  Smartphone, 
  Sun, 
  Truck,
  Mic,
  Clock,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Crop Planning & Seasons",
    description: "Learn optimal planting times, crop rotation, and seasonal planning strategies",
    icon: Sprout,
    duration: "15 min",
    lessons: 8,
    status: "available",
    color: "bg-success",
    progress: 75
  },
  {
    id: 2,
    title: "Soil Health Management",
    description: "Understand soil testing, nutrients, and organic farming practices",
    icon: Droplets,
    duration: "20 min",
    lessons: 12,
    status: "available",
    color: "bg-accent",
    progress: 45
  },
  {
    id: 3,
    title: "Financial Literacy",
    description: "Budget planning, loans, insurance, and farm income management",
    icon: DollarSign,
    duration: "25 min",
    lessons: 10,
    status: "available",
    color: "bg-secondary",
    progress: 20
  },
  {
    id: 4,
    title: "Digital Banking & Payments",
    description: "Mobile banking, UPI, government schemes, and digital transactions",
    icon: Smartphone,
    duration: "18 min",
    lessons: 6,
    status: "available",
    color: "bg-primary",
    progress: 0
  },
  {
    id: 5,
    title: "Weather & Climate",
    description: "Understanding weather patterns and climate-smart agriculture",
    icon: Sun,
    duration: "12 min",
    lessons: 5,
    status: "coming-soon",
    color: "bg-warning",
    progress: 0
  },
  {
    id: 6,
    title: "Market & Sales",
    description: "Pricing strategies, market access, and direct selling techniques",
    icon: Truck,
    duration: "22 min",
    lessons: 9,
    status: "coming-soon",
    color: "bg-earth",
    progress: 0
  }
];

type ViewState = 'modules' | 'module-details' | 'lesson-player';

const LearningModules = () => {
  const [currentView, setCurrentView] = useState<ViewState>('modules');
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const handleModuleClick = (module: typeof modules[0]) => {
    if (module.status === "available") {
      setSelectedModule(module);
      setCurrentView('module-details');
    }
  };

  const handleLessonStart = (lesson: any) => {
    setSelectedLesson(lesson);
    setCurrentView('lesson-player');
  };

  const handleBackToModules = () => {
    setCurrentView('modules');
    setSelectedModule(null);
  };

  const handleBackToModuleDetails = () => {
    setCurrentView('module-details');
    setSelectedLesson(null);
  };

  const handleLessonComplete = () => {
    // Handle lesson completion logic
    setCurrentView('module-details');
  };

  if (currentView === 'lesson-player' && selectedLesson) {
    return (
      <section className="py-20 bg-earth-light">
        <div className="container mx-auto px-6">
          <LessonPlayer
            lesson={selectedLesson}
            onBack={handleBackToModuleDetails}
            onComplete={handleLessonComplete}
          />
        </div>
      </section>
    );
  }

  if (currentView === 'module-details' && selectedModule) {
    return (
      <section className="py-20 bg-earth-light">
        <div className="container mx-auto px-6">
          <ModuleDetails
            module={selectedModule}
            onBack={handleBackToModules}
          />
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 bg-earth-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Learning Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive agricultural education designed for practical farming success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            const isAvailable = module.status === "available";
            
            return (
              <Card 
                key={module.id} 
                className={`group hover:shadow-medium transition-all duration-300 hover-scale ${
                  isAvailable ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={() => handleModuleClick(module)}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${module.color} text-white shadow-soft`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={isAvailable ? "default" : "secondary"}>
                        {isAvailable ? "Available" : "Coming Soon"}
                      </Badge>
                      {isAvailable && module.progress > 0 && (
                        <Badge variant="outline" className="text-xs">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {module.progress}%
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Progress Bar for Started Modules */}
                  {isAvailable && module.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-primary">{module.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant={isAvailable ? (module.progress > 0 ? "default" : "default") : "secondary"} 
                    className="w-full group" 
                    disabled={!isAvailable}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleModuleClick(module);
                    }}
                  >
                    <Mic className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    {isAvailable ? (module.progress > 0 ? "Continue Learning" : "Start Learning") : "Notify Me"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningModules;