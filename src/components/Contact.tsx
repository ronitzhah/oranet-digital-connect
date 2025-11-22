import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for contacting us!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience lightning-fast internet? Contact us today for a free consultation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card 
              className="p-6 shadow-card border-border hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 group cursor-pointer"
              style={{ animation: "slide-in-left 0.5s ease-out forwards", opacity: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Phone className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Phone</h3>
                  <a href="tel:+919893300200" className="text-muted-foreground hover:text-primary transition-smooth">
                    +91 9893300200
                  </a>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 shadow-card border-border hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 group cursor-pointer"
              style={{ animation: "slide-in-left 0.5s ease-out forwards", animationDelay: "0.1s", opacity: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <a href="mailto:info@oranetinfratel.com" className="text-muted-foreground hover:text-primary transition-smooth">
                    info@oranetinfratel.com
                  </a>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 shadow-card border-border hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/50 group cursor-pointer"
              style={{ animation: "slide-in-left 0.5s ease-out forwards", animationDelay: "0.2s", opacity: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <MapPin className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Address</h3>
                  <p className="text-muted-foreground">
                    403, 4th Floor, Arcade Silver<br />
                    56 Shop, New Palasia<br />
                    Indore, Madhya Pradesh<br />
                    452001, India
                  </p>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 shadow-card border-border hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 hover:border-accent/50 group cursor-pointer"
              style={{ animation: "slide-in-left 0.5s ease-out forwards", animationDelay: "0.3s", opacity: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <Clock className="w-6 h-6 text-accent group-hover:animate-bounce-subtle" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM<br />
                    <span className="text-accent font-medium">24/7 Support Available</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card 
            className="p-8 shadow-card border-border hover:shadow-hover transition-all duration-500"
            style={{ animation: "slide-in-right 0.5s ease-out forwards", opacity: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-input focus:border-primary transition-colors"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-input focus:border-primary transition-colors"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-input focus:border-primary transition-colors"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-input resize-none focus:border-primary transition-colors"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300 hover:shadow-hover group"
              >
                Send Message
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
