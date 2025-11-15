import { Wifi } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Oranet Infratel</span>
                <span className="text-xs text-background/70">Private Limited</span>
              </div>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Licensed Internet Service Provider delivering high-speed connectivity across Madhya Pradesh.
            </p>
            <p className="text-xs text-background/60">
              © {currentYear} Oranet Infratel Private Limited. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#home" className="hover:text-background transition-smooth">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-smooth">Services</a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-background transition-smooth">Coverage</a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-smooth">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-smooth">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <span className="font-medium text-background">Phone:</span>
                <a href="tel:+919893300200" className="hover:text-background transition-smooth ml-2">
                  +91 9893300200
                </a>
              </li>
              <li>
                <span className="font-medium text-background">Email:</span>
                <a href="mailto:info@oranetinfratel.com" className="hover:text-background transition-smooth ml-2">
                  info@oranetinfratel.com
                </a>
              </li>
              <li className="pt-2">
                <span className="font-medium text-background block mb-1">Address:</span>
                <span className="text-background/80">
                  403, 4th Floor, Arcade Silver<br />
                  56 Shop, New Palasia<br />
                  Indore, MP 452001, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>Licensed Internet Service Provider | Serving Madhya Pradesh with Pride</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
