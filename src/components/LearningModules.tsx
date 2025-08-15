import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  Droplets, 
  DollarSign, 
  Smartphone, 
  Sun, 
  Truck,
  Mic,
  Clock,
  CheckCircle
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
    color: "bg-success"
  },
  {
    id: 2,
    title: "Soil Health Management",
    description: "Understand soil testing, nutrients, and organic farming practices",
    icon: Droplets,
    duration: "20 min",
    lessons: 12,
    status: "available",
    color: "bg-accent"
  },
  {
    id: 3,
    title: "Financial Literacy",
    description: "Budget planning, loans, insurance, and farm income management",
    icon: DollarSign,
    duration: "25 min",
    lessons: 10,
    status: "available",
    color: "bg-secondary"
  },
  {
    id: 4,
    title: "Digital Banking & Payments",
    description: "Mobile banking, UPI, government schemes, and digital transactions",
    icon: Smartphone,
    duration: "18 min",
    lessons: 6,
    status: "available",
    color: "bg-primary"
  },
  {
    id: 5,
    title: "Weather & Climate",
    description: "Understanding weather patterns and climate-smart agriculture",
    icon: Sun,
    duration: "12 min",
    lessons: 5,
    status: "coming-soon",
    color: "bg-warning"
  },
  {
    id: 6,
    title: "Market & Sales",
    description: "Pricing strategies, market access, and direct selling techniques",
    icon: Truck,
    duration: "22 min",
    lessons: 9,
    status: "coming-soon",
    color: "bg-earth"
  }
];

const LearningModules = () => {
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
              <Card key={module.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${module.color} text-white shadow-soft`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge variant={isAvailable ? "default" : "secondary"}>
                      {isAvailable ? "Available" : "Coming Soon"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
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
                    variant={isAvailable ? "default" : "secondary"} 
                    className="w-full group" 
                    disabled={!isAvailable}
                  >
                    <Mic className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    {isAvailable ? "Start Learning" : "Notify Me"}
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