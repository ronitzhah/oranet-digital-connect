import { Shield, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Oranet Infratel
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for high-speed internet connectivity
            </p>
          </div>

          {/* Company Story */}
          <div className="mb-12 bg-gradient-hero rounded-xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-semibold text-primary">Oranet Infratel Private Limited</span> is a fully licensed Internet Service Provider delivering cutting-edge connectivity solutions across Madhya Pradesh. We specialize in providing high-speed, reliable internet services through advanced technologies including fiber optics, DSL, and cable infrastructure.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is simple: to keep homes and businesses seamlessly connected with fast, dependable internet, backed by responsive local support that truly cares about your experience. Unlike large corporations with impersonal service, we pride ourselves on resolving connectivity issues within hours, ensuring minimal disruption to your digital life.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Licensed</div>
              <div className="text-sm text-muted-foreground">ISP Provider</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">14+</div>
              <div className="text-sm text-muted-foreground">Service Areas</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Local</div>
              <div className="text-sm text-muted-foreground">Support Team</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Fast</div>
              <div className="text-sm text-muted-foreground">Resolution</div>
            </div>
          </div>

          {/* Company Details */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Company Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-medium text-foreground min-w-[140px]">Legal Name:</span>
                <span>Oranet Infratel Private Limited</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-medium text-foreground min-w-[140px]">Industry:</span>
                <span>Internet Service Provider (ISP)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-medium text-foreground min-w-[140px]">Headquarters:</span>
                <span>403, 4th Floor, Arcade Silver, 56 Shop, New Palasia, Indore, Madhya Pradesh, 452001, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-medium text-foreground min-w-[140px]">Services:</span>
                <span>Fiber Optic, DSL, Cable Internet, TV Bundles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
