import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Futuristic_3D_hero_background_ed5699a6.png";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "auto" });
  };

  const downloadCV = () => {
    console.log("Download CV triggered");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 animate-pulse"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent">
          Pranav Pandey
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-red-400 mb-6 font-medium" data-testid="text-tagline">
          AI/ML Engineer • Healthcare Innovator • Full Stack Developer
        </p>
        
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12" data-testid="text-bio">
          M.Sc. Chemistry & B.E. Chemical Engineering @ BITS Pilani Goa. 
          Building AI-powered healthcare solutions, IoT systems, and intelligent robotics. 
          Founder of MedRide - revolutionizing emergency medical transport.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground border border-primary-border"
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={downloadCV}
            className="bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
            data-testid="button-download-cv"
          >
            Download CV
          </Button>
        </div>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
