import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-charcoal">
            Bayes Price
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-secondary transition-colors">
              About
            </Link>
            <div className="relative group">
              <span className="text-foreground hover:text-secondary transition-colors cursor-pointer">
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
            <Link to="/contact" className="text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              Book Discovery Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
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
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/solutions/platinum"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Platinum
            </Link>
            <Link
              to="/solutions/ruby"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ruby
            </Link>
            <Link
              to="/solutions/services"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Professional Services
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gradient-primary text-primary-foreground">
              Book Discovery Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
