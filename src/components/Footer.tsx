import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      {/* Yellow dividing line */}
      <div className="h-2 bg-bayes-yellow w-full"></div>
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Bayes Price. Great begins here.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mb-12 leading-relaxed">
              With Bayes Price, every part of your intelligence system works together to build clarity, trust, and momentum — not just visual polish, but real purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-4">Email</h4>
              <a href="mailto:hello@bayesprice.com" className="text-white/60 hover:text-white transition-colors">
                hello@bayesprice.com
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/60 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/platinum" className="text-white/60 hover:text-white transition-colors">
                    Platinum
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ruby" className="text-white/60 hover:text-white transition-colors">
                    Ruby
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/60 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/solutions/platinum" className="text-white/60 hover:text-white transition-colors">
                    Platinum Platform
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ruby" className="text-white/60 hover:text-white transition-colors">
                    Ruby Desktop
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/services" className="text-white/60 hover:text-white transition-colors">
                    Professional Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-4">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-12">
            <h4 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-white/60 mb-6 max-w-md">
              Sign in to newsletter and never miss any update.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-bayes-yellow"
              />
              <Button
                type="submit"
                className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-none px-6 py-2 text-sm font-medium border-none"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/40">
                &copy; {new Date().getFullYear()} Bayes Price. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/40">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

