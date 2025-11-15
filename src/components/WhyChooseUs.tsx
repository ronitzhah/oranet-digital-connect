import { Check, Users, HeadphonesIcon, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: HeadphonesIcon,
      title: "Lightning-Fast Support",
      description: "Unlike large corporations with slow response times, we resolve issues within hours, not days. Our local support team knows the area and cares about your connectivity."
    },
    {
      icon: Users,
      title: "Local Team, Local Care",
      description: "We're not a faceless corporation. Our team lives and works in your community, providing personalized service and understanding your specific needs."
    },
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "As a fully licensed Internet Service Provider, we meet all regulatory standards and operate with complete transparency and professionalism."
    }
  ];

  const benefits = [
    "Same-day issue resolution",
    "No hidden fees or charges",
    "Flexible plans for every budget",
    "24/7 customer support",
    "Easy installation process",
    "No long-term contracts required"
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Oranet Infratel?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another ISP. We're your neighbors, committed to keeping you connected.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-card p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
