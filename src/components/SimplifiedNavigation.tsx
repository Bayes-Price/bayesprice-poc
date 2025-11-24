import { Button } from "@/components/ui/button";
import bayesPriceLogo from "@/assets/bayes-price-logo.svg";

interface SimplifiedNavigationProps {
    onCtaClick?: () => void;
}

const SimplifiedNavigation = ({ onCtaClick }: SimplifiedNavigationProps) => {
    return (
        <nav className="fixed top-0 w-full bg-bayes-blue border-b border-white/10 z-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="https://www.bayesprice.com" className="flex items-center">
                        <img src={bayesPriceLogo} alt="Bayes Price" className="h-8 w-auto brightness-0 invert" />
                    </a>

                    <Button
                        onClick={onCtaClick}
                        className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-none px-6 py-2 text-sm font-medium border-none"
                    >
                        Book Discovery Session
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default SimplifiedNavigation;
