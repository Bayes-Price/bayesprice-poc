import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import bayesPriceLogo from "@/assets/bayes-price-logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-bayes-blue border-b border-white/10 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={bayesPriceLogo} alt="Bayes Price" className="h-8 w-auto brightness-0 invert" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link to="/" className="text-white hover:text-bayes-yellow transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-bayes-yellow transition-colors text-sm font-medium">
              About
            </Link>

            <div className="relative group">
              <span className="text-white hover:text-bayes-yellow transition-colors cursor-pointer text-sm font-medium">
                Solutions
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-bayes-blue border border-white/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/solutions/platinum"
                  className="block px-4 py-3 hover:bg-white/5 text-sm text-white hover:text-bayes-yellow transition-colors"
                >
                  Platinum
                </Link>
                <Link
                  to="/solutions/ruby"
                  className="block px-4 py-3 hover:bg-white/5 text-sm text-white hover:text-bayes-yellow transition-colors"
                >
                  Ruby
                </Link>
                <Link
                  to="/solutions/services"
                  className="block px-4 py-3 hover:bg-white/5 text-sm text-white hover:text-bayes-yellow transition-colors"
                >
                  Professional Services
                </Link>
              </div>
            </div>
            <Link to="/news" className="text-white hover:text-bayes-yellow transition-colors text-sm font-medium">
              News
            </Link>
            <Link to="/contact" className="text-white hover:text-bayes-yellow transition-colors text-sm font-medium">
              Contact
            </Link>
            <Button className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-none px-6 py-2 text-sm font-medium border-none">
              Book Discovery Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/10 bg-bayes-blue">
            <Link
              to="/"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/solutions/platinum"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Platinum
            </Link>
            <Link
              to="/solutions/ruby"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ruby
            </Link>
            <Link
              to="/solutions/services"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Professional Services
            </Link>
            <Link
              to="/news"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-bayes-yellow transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-none border-none">
              Book Discovery Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
