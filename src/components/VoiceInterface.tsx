import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Languages, 
  Play,
  Pause,
  SkipForward,
  RotateCcw
} from "lucide-react";

const VoiceInterface = () => {
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

  const languages = ["Hindi", "English", "Bengali", "Telugu", "Marathi", "Tamil", "Gujarati"];

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Voice-First Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interact naturally with our AI assistant in your preferred language
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-medium border-0">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline" className="px-4 py-2">
                  <Languages className="mr-2 h-4 w-4" />
                  {selectedLanguage}
                </Badge>
              </div>
              <CardTitle className="text-2xl">Currently Learning: Soil pH Testing</CardTitle>
              <CardDescription>
                Listen to the lesson and ask questions using voice commands
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Voice Controls */}
              <div className="flex justify-center">
                <div className={`relative p-8 rounded-full transition-all duration-300 ${
                  isListening ? 'bg-gradient-to-r from-secondary to-accent animate-pulse' : 'bg-muted'
                }`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-16 w-16 rounded-full ${
                      isListening ? 'text-white' : 'text-muted-foreground'
                    } hover:scale-110 transition-transform`}
                    onClick={toggleListening}
                  >
                    {isListening ? (
                      <Mic className="h-8 w-8" />
                    ) : (
                      <MicOff className="h-8 w-8" />
                    )}
                  </Button>
                  {isListening && (
                    <div className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-ping"></div>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-medium text-foreground mb-2">
                  {isListening ? "सुन रहा हूँ... (Listening...)" : "बोलने के लिए माइक दबाएं (Press mic to speak)"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Ask: "मिट्टी की जांच कैसे करें?" (How to test soil?)
                </p>
              </div>
              
              {/* Audio Controls */}
              <div className="flex items-center justify-center gap-4 p-6 bg-muted/30 rounded-xl">
                <Button variant="outline" size="icon">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlayback}
                  className="h-12 w-12"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </Button>
                
                <Button variant="outline" size="icon">
                  <SkipForward className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              {/* Language Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center">Select Your Language</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang}
                      variant={selectedLanguage === lang ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLanguage(lang)}
                      className="transition-all hover:scale-105"
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Status Messages */}
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center gap-2 text-success">
                  <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Connected and ready to help</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceInterface;