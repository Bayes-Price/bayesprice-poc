import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Layers, FileCode, Globe, Database, Server, Settings } from "lucide-react";
import rubyDesktop from "@/assets/ruby-desktop.jpg";
import rubyLogo from "@/assets/Ruby/rubyred3.png";

const RubySolution = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Finta Style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block border border-red/20 bg-red/5 px-4 py-2 rounded-full text-sm font-medium mb-6 text-red">
              Award-Winning Desktop Application
            </div>
            <img src={rubyLogo} alt="Ruby" className="w-full max-w-md mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Survey Processing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Professional-grade desktop application combining intuitive GUI with powerful
              open-source batch scripting for comprehensive survey data management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="red" className="rounded-full px-8 py-6 text-base font-medium" asChild>
                <a href="/discovery">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product Screenshot */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
              <img
                src={rubyDesktop}
                alt="Ruby Desktop Application"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="py-12 bg-secondary/30 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center flex-shrink-0">
              <Award className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">MRS Technology & Innovation Award Winner</h3>
              <p className="text-muted-foreground">Recognized for excellence in integration and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight">
                Core Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-red transition-colors flex items-center justify-center">
                  <Layers className="text-red/40 group-hover:text-red transition-colors" size={64} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-red uppercase tracking-wider font-medium">Interface</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Dual Interface</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Intuitive GUI for quick tasks combined with powerful batch scripting
                  for complex automation workflows.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-red transition-colors flex items-center justify-center">
                  <FileCode className="text-red/40 group-hover:text-red transition-colors" size={64} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-red uppercase tracking-wider font-medium">Compatibility</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Universal Support</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Works with all major survey data formats including SPSS, Dimensions,
                  Qualtrics, SurveyMonkey, and more.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-red transition-colors flex items-center justify-center">
                  <Settings className="text-red/40 group-hover:text-red transition-colors" size={64} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-red uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Wave Management</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Sophisticated wave-on-wave analysis tools for tracking changes
                  and trends across multiple data collection periods.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-red transition-colors flex items-center justify-center">
                  <Globe className="text-red/40 group-hover:text-red transition-colors" size={64} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-red uppercase tracking-wider font-medium">Output</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Flexible Export</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Export to Excel, PowerPoint, Tableau, TSAPI, and custom formats
                  with full control over layout and styling.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-red transition-colors flex items-center justify-center">
                  <Server className="text-red/40 group-hover:text-red transition-colors" size={64} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-red uppercase tracking-wider font-medium">Infrastructure</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Deployment Flexibility</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Deploy on cloud infrastructure, local servers, or individual
                  workstations based on your security requirements.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-red transition-colors flex items-center justify-center">
                  <Database className="text-red/40 group-hover:text-red transition-colors" size={64} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-red uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Open-Source Scripting</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Build custom automation workflows with our powerful, documented
                  scripting language for repeatable processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-red">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Discuss Your Requirements
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Speak with our team to learn how Ruby can transform your survey data processing workflow.
          </p>
          <a
            href="/discovery"
            className="inline-flex items-center justify-center gap-2 bg-white text-red px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RubySolution;
