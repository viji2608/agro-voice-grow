import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy,
  Target,
  Clock,
  Star,
  TrendingUp,
  Award
} from "lucide-react";

const achievements = [
  { id: 1, title: "First Lesson Complete", icon: Star, earned: true },
  { id: 2, title: "Soil Expert", icon: Trophy, earned: true },
  { id: 3, title: "Quiz Master", icon: Target, earned: false },
  { id: 4, title: "Voice Champion", icon: Award, earned: false },
];

const ProgressDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your progress and celebrate your achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Overall Progress
                </CardTitle>
                <CardDescription>
                  Your learning journey across all modules
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Crop Planning & Seasons</span>
                      <span className="text-success font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Soil Health Management</span>
                      <span className="text-accent font-medium">50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Financial Literacy</span>
                      <span className="text-secondary font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Digital Banking & Payments</span>
                      <span className="text-muted-foreground">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">18</div>
                    <div className="text-sm text-muted-foreground">Lessons Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">45</div>
                    <div className="text-sm text-muted-foreground">Hours Learned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">12</div>
                    <div className="text-sm text-muted-foreground">Quizzes Passed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Weekly Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-secondary" />
                  Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Complete 3 new lessons</span>
                    <Badge variant="outline">2/3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Practice voice commands daily</span>
                    <Badge variant="default">5/7</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Take 2 module quizzes</span>
                    <Badge variant="secondary">1/2</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Badges you've earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={achievement.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          achievement.earned 
                            ? 'bg-success/10 border border-success/20' 
                            : 'bg-muted/30 opacity-50'
                        }`}
                      >
                        <div className={`p-2 rounded-full ${
                          achievement.earned ? 'bg-success text-white' : 'bg-muted'
                        }`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">
                          {achievement.title}
                        </span>
                        {achievement.earned && (
                          <Badge variant="outline" className="ml-auto text-xs">
                            Earned
                          </Badge>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Daily Reminder */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Today's Reminder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Continue your soil health lesson to maintain your learning streak!
                </p>
                <Badge variant="outline" className="w-full justify-center py-2">
                  15 minutes remaining
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;