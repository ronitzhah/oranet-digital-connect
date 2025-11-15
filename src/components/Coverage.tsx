import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CoverageMap from "./CoverageMap";

const Coverage = () => {
  const coverageAreas = [
    "Indore", "Palda", "Jetpura", "Pansamal", "Panchemal", "Khetiya", "Amarkantak",
    "Binagunj", "Depalpur", "Deroi", "Sendwa", "Jhabua", "Kakanwani", "Rajgarh"
  ];

  return (
    <section id="coverage" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coverage Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We proudly serve 14 locations across Madhya Pradesh with high-speed internet connectivity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Interactive Map */}
          <div className="mb-12">
            <CoverageMap />
          </div>

          {/* Coverage Area List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {coverageAreas.map((area, index) => (
              <Badge
                key={index}
                variant="outline"
                className="justify-center py-3 px-4 text-sm font-medium border-primary/20 hover:bg-primary/10 hover:border-primary transition-smooth"
              >
                <MapPin className="w-3 h-3 mr-2" />
                {area}
              </Badge>
            ))}
          </div>

          {/* Coverage Info */}
          <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
            <p className="text-lg font-medium mb-2">
              Don't see your area listed?
            </p>
            <p className="text-muted-foreground">
              Contact us to check if we can bring high-speed internet to your location soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
