import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import bayesPriceLogo from "@/assets/bayes-price-logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primary border-b border-primary z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={bayesPriceLogo} alt="Bayes Price" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-primary-foreground hover:text-charcoal transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-primary-foreground hover:text-charcoal transition-colors font-medium">
              About
            </Link>
            <div className="relative group">
              <span className="text-primary-foreground hover:text-charcoal transition-colors cursor-pointer font-medium">
                Solutions
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/solutions/platinum"
                  className="block px-4 py-2 hover:bg-muted rounded-t-lg transition-colors"
                >
                  Platinum
                </Link>
                <Link
                  to="/solutions/ruby"
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                >
                  Ruby
                </Link>
                <Link
                  to="/solutions/services"
                  className="block px-4 py-2 hover:bg-muted rounded-b-lg transition-colors"
                >
                  Professional Services
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-primary-foreground hover:text-charcoal transition-colors font-medium">
              Contact
            </Link>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-coral">
              Book Discovery Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-primary-foreground hover:text-charcoal transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-primary-foreground hover:text-charcoal transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/solutions/platinum"
              className="block text-primary-foreground hover:text-charcoal transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Platinum
            </Link>
            <Link
              to="/solutions/ruby"
              className="block text-primary-foreground hover:text-charcoal transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ruby
            </Link>
            <Link
              to="/solutions/services"
              className="block text-primary-foreground hover:text-charcoal transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Professional Services
            </Link>
            <Link
              to="/contact"
              className="block text-primary-foreground hover:text-charcoal transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-secondary text-secondary-foreground shadow-coral">
              Book Discovery Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
