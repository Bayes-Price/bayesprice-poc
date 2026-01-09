import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Finta Style with Gradient Background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Centered Content */}
          <div className="max-w-3xl mx-auto text-center">
            {/* Large 404 Number */}
            <div className="mb-8">
              <h1 className="text-[clamp(6rem,15vw,12rem)] font-heading font-semibold text-coral/20 leading-none tracking-tight">
                404
              </h1>
            </div>

            {/* Main Heading */}
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-coral hover:bg-coral/90 text-white rounded-lg px-8 py-6 text-base font-medium transition-all inline-flex items-center gap-2"
                >
                  <Home className="h-5 w-5" />
                  Return Home
                </Button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-coral transition-colors px-4 py-3"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-4">
                Popular pages you might be looking for:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/discovery" className="text-coral hover:underline text-sm font-medium">
                  Discovery Process
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/solutions" className="text-coral hover:underline text-sm font-medium">
                  Solutions
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/about" className="text-coral hover:underline text-sm font-medium">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
