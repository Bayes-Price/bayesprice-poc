import { Link } from "react-router-dom";
import bayesPriceLogo from "@/assets/bayes-price-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Copyright */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={bayesPriceLogo} alt="Bayes Price" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-charcoal/50">
              &copy; {new Date().getFullYear()} Bayes Price. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/solutions/platinum" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Platinum
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ruby" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Ruby
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-charcoal/60 hover:text-charcoal">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Get Started</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/discovery" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Book a Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/modern-slavery-policy" className="text-sm text-charcoal/60 hover:text-charcoal">
                    Modern Slavery Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
