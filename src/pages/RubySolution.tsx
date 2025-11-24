import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Download, Layers, FileCode, Globe, Database, Server, Settings } from "lucide-react";
import rubyDesktop from "@/assets/ruby-desktop.jpg";
import heroProfessional from "@/assets/hero-professional.jpg";

const RubySolution = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroProfessional}
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-white/80">
              Award-Winning Desktop Application
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
              Ruby <br />
              <span className="text-bayes-yellow">Survey Processing.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mb-10">
              Professional-grade desktop application combining intuitive GUI with powerful
              open-source batch scripting for comprehensive survey data management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Download Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-bayes-yellow flex items-center justify-center flex-shrink-0">
              <Award className="text-bayes-blue" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">MRS Technology & Innovation Award Winner</h3>
              <p className="text-white/60">Recognized for excellence in integration and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Grid (Works Style) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-16 animate-fade-in-up">
              Core Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Interface</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Dual Interface</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Intuitive GUI for quick tasks combined with powerful batch scripting
                  for complex automation workflows.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileCode className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Compatibility</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Universal Support</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Works with all major survey data formats including SPSS, Dimensions,
                  Qualtrics, SurveyMonkey, and more.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Settings className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Wave Management</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Sophisticated wave-on-wave analysis tools for tracking changes
                  and trends across multiple data collection periods.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Output</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Flexible Export</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Export to Excel, PowerPoint, Tableau, TSAPI, and custom formats
                  with full control over layout and styling.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Server className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Infrastructure</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Deployment Flexibility</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Deploy on cloud infrastructure, local servers, or individual
                  workstations based on your security requirements.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Open-Source Scripting</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Build custom automation workflows with our powerful, documented
                  scripting language for repeatable processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section (List Style) */}
      <section className="py-24 md:py-32 bg-muted/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 animate-fade-in-up">
              Who Uses Ruby?
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Market Research Agencies",
                  desc: "Process hundreds of surveys monthly with consistent quality and formatting. Automate standard table production and wave-on-wave reporting for ongoing trackers."
                },
                {
                  title: "Corporate Insight Teams",
                  desc: "Maintain control of sensitive data with on-premises deployment while automating regular reporting for stakeholders across the organization."
                },
                {
                  title: "Data Processing Specialists",
                  desc: "Handle complex data transformations with batch scripting while maintaining quality through automated checks and validation routines."
                },
                {
                  title: "Academic Researchers",
                  desc: "Analyze survey data from multiple sources with professional-grade tools at an accessible price point for research budgets."
                }
              ].map((item, index) => (
                <div key={index} className="group border-b border-white/10 pb-8 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="grid md:grid-cols-3 gap-8">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <div className="md:col-span-2">
                      <p className="text-white/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Download className="mx-auto text-bayes-yellow mb-6" size={48} />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Try Ruby Today
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Download a free 30-day trial and experience award-winning survey data processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Download Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
                View Documentation
              </Button>
            </div>
            <p className="text-sm text-white/40 pt-6">
              No credit card required • Full functionality • 30-day trial period
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RubySolution;