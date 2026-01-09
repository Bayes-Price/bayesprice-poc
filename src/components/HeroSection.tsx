import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dashboardImage from "@/assets/image.png";
import { NodeOversizeLong, NodeStandardConnect } from "./BrandNodes";

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            {/* Background Blurs - Lowest Layer */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-bayes-blue/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-coral/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px]" />
            </div>

            {/* Brand Nodes - Explicitly Visible Layer */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <NodeOversizeLong className="absolute top-[5%] left-0 w-[50%] h-auto text-bayes-blue/60 animate-float" />
                <NodeStandardConnect className="absolute bottom-[20%] right-0 w-[60%] h-auto text-coral/60 animate-float-delayed" />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-sm font-medium text-charcoal shadow-sm hover:shadow-md transition-all cursor-default">
                            <span className="flex h-2 w-2 rounded-full bg-coral animate-pulse" />
                            Bayes Price 2.0 is here
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight"
                    >
                        The best intelligence platform, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-600">
                            alone or with your team
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Unlock a complete solution to manage your research insights.
                        From automated processing to powerful visualization, we provide the infrastructure you need.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Link to="/discovery">
                            <Button size="xl" variant="glow" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/demo">
                            <Button size="xl" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full bg-white/50 border-gray-200 hover:bg-white text-charcoal">
                                <Play className="mr-2 h-4 w-4 fill-current" />
                                Watch Demo
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Dashboard Image - Finta Style */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Glow Effect behind image */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-coral/20 to-bayes-blue/20 rounded-[2.5rem] blur-2xl opacity-50 -z-10" />

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
                        <div className="absolute top-0 w-full h-8 bg-[#f8f9fa] border-b border-gray-100 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                        </div>
                        <img
                            src={dashboardImage}
                            alt="Bayes Price Dashboard Interface"
                            className="w-full h-auto pt-8" // pt-8 to clear the fake browser dots
                        />

                        {/* Floating Badge on Image */}
                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-semibold text-gray-800">System Operational</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
