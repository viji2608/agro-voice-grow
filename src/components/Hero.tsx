import { Button } from "@/components/ui/button";
import { Mic, Play, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            AgriShiksha
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            आवाज़ से सीखें, खेती में आगे बढ़ें
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Voice-powered agricultural education designed for farmers. Learn crop planning, 
            soil health, financial literacy, and digital skills in your own language.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              शुरू करें (Start Learning)
            </Button>
            <Button variant="outline-hero" size="lg" className="group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              डेमो देखें (Watch Demo)
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-primary-foreground/90">
            <div className="space-y-2">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm opacity-80">Active Farmers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm opacity-80">Languages</div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Users className="h-16 w-16 text-secondary animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <BookOpen className="h-16 w-16 text-secondary animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;