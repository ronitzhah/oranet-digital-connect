import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Cable, Tv, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Fiber Optic Internet",
      description: "Ultra-fast fiber optic connections delivering speeds up to 1 Gbps for seamless streaming, gaming, and work.",
      features: ["Up to 1 Gbps speed", "Unlimited data", "Low latency", "Future-proof technology"]
    },
    {
      icon: Cable,
      title: "DSL & Cable Internet",
      description: "Reliable DSL and cable broadband services with consistent speeds for everyday browsing and entertainment.",
      features: ["Multiple speed tiers", "Stable connections", "Wide coverage", "Affordable plans"]
    },
    {
      icon: Tv,
      title: "TV Bundle Options",
      description: "Combine your internet with premium TV packages for the complete home entertainment experience.",
      features: ["HD channels", "Sports & movies", "Bundle savings", "Easy setup"]
    },
    {
      icon: Building2,
      title: "Business Solutions",
      description: "Dedicated enterprise-grade internet solutions with guaranteed uptime and priority support for businesses.",
      features: ["Dedicated bandwidth", "Static IP", "24/7 support", "SLA guarantee"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of high-quality internet and entertainment solutions designed for homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-hover transition-all duration-500 border-border transform hover:-translate-y-2 hover:border-primary/50 group cursor-pointer"
              style={{ 
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
