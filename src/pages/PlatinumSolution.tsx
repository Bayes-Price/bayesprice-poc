import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Workflow, BarChart3, FileText, Monitor, Clock } from "lucide-react";
import platinumDashboard from "@/assets/platinum-dashboard.jpg";
import heroProfessional from "@/assets/hero-professional.jpg";

const PlatinumSolution = () => {
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
              AI-Powered Platform
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
              Platinum <br />
              <span className="text-bayes-yellow">Insight Engine.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mb-10">
              Ground-breaking speed to insight. Transform weeks of analysis into minutes
              with our award-winning AI-driven business intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Grid (Works Style) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-16 animate-fade-in-up">
              Powerful Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Workflow className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Ingestion</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Multi-Source Integration</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Seamlessly integrate surveys, CRM feedback, social media, and internal data
                  from multiple sources in one unified platform.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI-Driven Insights</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Advanced machine learning algorithms automatically analyze patterns,
                  trends, and anomalies with unprecedented accuracy.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Visualization</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Automated Charts</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Generate stunning, interactive charts and graphs automatically.
                  Customize and export with a single click.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Reporting</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">PowerPoint Generation</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Automatically create professional presentation decks with insights,
                  visualizations, and recommendations ready to share.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Sharing</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Interactive Portal</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Share insights with stakeholders through a secure, branded web portal
                  with real-time updates and interactive exploration.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Monitoring</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Real-Time Dashboards</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Monitor key metrics with live dashboards that update automatically
                  as new data arrives. Never miss a critical insight.
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
              Industry Applications
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Financial Services",
                  challenge: "Rapidly analyze market sentiment and risk indicators across multiple data sources.",
                  solution: "Platinum ingests trading data, news feeds, and social sentiment to provide real-time risk assessments."
                },
                {
                  title: "Brands & Marketing",
                  challenge: "Measure brand equity and campaign effectiveness across multiple channels quickly.",
                  solution: "Automated analysis of survey data, social media metrics, and sales figures with instant PowerPoint reports."
                },
                {
                  title: "Technology Companies",
                  challenge: "Enable product teams to access customer insights without waiting for analyst reports.",
                  solution: "Self-service insight portals with AI-powered analytics that non-technical teams can explore independently."
                },
                {
                  title: "Pharmaceutical",
                  challenge: "Maintain rigorous data quality while processing pharmacovigilance reports at scale.",
                  solution: "Automated quality checks with AI-driven anomaly detection and audit-ready reporting for regulatory compliance."
                }
              ].map((item, index) => (
                <div key={index} className="group border-b border-white/10 pb-8 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="grid md:grid-cols-3 gap-8">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <span className="text-sm text-bayes-yellow uppercase tracking-wider block mb-1">Challenge</span>
                        <p className="text-white/80 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm text-bayes-yellow uppercase tracking-wider block mb-1">Solution</span>
                        <p className="text-white/80 leading-relaxed">{item.solution}</p>
                      </div>
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Ready to Experience Platinum?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Book a personalized demo and discover how Platinum can transform your
              business intelligence workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Book Your Discovery Session
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
                Download Product Sheet
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlatinumSolution;