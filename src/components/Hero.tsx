import { Button } from "@/components/ui/button";
import { Zap, Shield, Clock } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            High-Speed Internet
            <span className="block text-primary bg-clip-text">Built for India</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience lightning-fast, reliable internet connectivity with Oranet Infratel. 
            Licensed ISP delivering fiber optic, DSL, and cable services across Madhya Pradesh.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 transform hover:scale-105 transition-all duration-300 hover:shadow-hover group"
            >
              Get Connection Now
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-fade-in cursor-pointer group" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:animate-pulse-glow">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                Ultra-high-speed fiber optic connections up to 1 Gbps
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-fade-in cursor-pointer group" style={{ animationDelay: "0.8s" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:animate-pulse-glow">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">99.9% Uptime</h3>
              <p className="text-sm text-muted-foreground text-center">
                Reliable connectivity backed by licensed infrastructure
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-fade-in cursor-pointer group" style={{ animationDelay: "1s" }}>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all group-hover:animate-pulse-glow">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Fast Support</h3>
              <p className="text-sm text-muted-foreground text-center">
                Issues resolved within hours, not days. Local team, local care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
