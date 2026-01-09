import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import bayesPriceLogo from "@/assets/bayes-price-logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 rounded-full border ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-gray-200/50"
          : "bg-white/60 backdrop-blur-sm border-gray-200/30"
      }`}
    >
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={bayesPriceLogo} alt="Bayes Price" className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/solutions/platinum" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">
            Platinum
          </Link>
          <Link to="/solutions/ruby" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">
            Ruby
          </Link>
          <Link to="/about" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">
            About
          </Link>
          <Link
            to="/discovery"
            className="text-sm font-medium bg-charcoal text-white px-5 py-2 rounded-full hover:bg-charcoal/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-charcoal hover:bg-gray-100/50 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-6 border-t border-gray-200/30">
          <div className="flex flex-col gap-4">
            <Link
              to="/solutions/platinum"
              className="text-charcoal/70 hover:text-charcoal"
              onClick={() => setIsOpen(false)}
            >
              Platinum
            </Link>
            <Link
              to="/solutions/ruby"
              className="text-charcoal/70 hover:text-charcoal"
              onClick={() => setIsOpen(false)}
            >
              Ruby
            </Link>
            <Link
              to="/about"
              className="text-charcoal/70 hover:text-charcoal"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/discovery"
              className="bg-charcoal text-white px-5 py-2 rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
