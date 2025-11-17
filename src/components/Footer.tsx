import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Bayes Price</h3>
            <p className="text-primary-foreground/80 mb-4">
              AI-powered business intelligence that transforms data into action at unprecedented speed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/platinum" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Platinum Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/ruby" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Ruby Desktop
                </Link>
              </li>
              <li>
                <Link to="/solutions/services" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Locations</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <MapPin size={20} className="flex-shrink-0 text-primary" />
                <span className="text-primary-foreground/80">London, UK</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={20} className="flex-shrink-0 text-primary" />
                <span className="text-primary-foreground/80">Bristol, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Bayes Price. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
