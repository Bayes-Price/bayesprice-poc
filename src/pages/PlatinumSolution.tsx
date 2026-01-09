import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Workflow, BarChart3, FileText, Monitor, Clock, Play } from "lucide-react";
import platinumDashboard from "@/assets/platinum-dashboard.jpg";
import VideoModal from "@/components/VideoModal";

const helpVideos = [
  { id: "dQw4w9WgXcQ", title: "Platform Overview", description: "5 minute introduction to Platinum" },
  { id: "dQw4w9WgXcQ", title: "Creating Tables", description: "How to build and customize data tables" },
  { id: "dQw4w9WgXcQ", title: "AI Insights", description: "Using AI to analyze your data" },
];

const PlatinumSolution = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Finta Style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block border border-coral/20 bg-coral/5 px-4 py-2 rounded-full text-sm font-medium mb-6 text-coral">
              AI-Powered Platform
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Platinum Insight Engine.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Ground-breaking speed to insight. Transform weeks of analysis into minutes
              with our award-winning AI-driven business intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="coral" className="rounded-lg px-8 py-6 text-base font-medium" asChild>
                <a href="/discovery">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Dashboard Screenshot */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
              <img
                src={platinumDashboard}
                alt="Platinum Dashboard"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8 text-center">
              See Platinum in Action
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {helpVideos.map((video) => (
                <button
                  key={video.title}
                  onClick={() => setActiveVideo(video.id)}
                  className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-200 hover:border-coral transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                    <Play className="text-coral ml-0.5" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        videoId={activeVideo || ""}
        title="Platinum Demo"
      />

      {/* Powerful Features Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-16 text-center">
              Powerful Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Workflow className="text-coral/20 group-hover:text-coral/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Ingestion</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Multi-Source Integration</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Seamlessly integrate surveys, CRM feedback, social media, and internal data
                  from multiple sources in one unified platform.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="text-coral/20 group-hover:text-coral/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">AI-Driven Insights</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Advanced machine learning algorithms automatically analyze patterns,
                  trends, and anomalies with unprecedented accuracy.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="text-coral/20 group-hover:text-coral/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Visualization</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Automated Charts</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Generate stunning, interactive charts and graphs automatically.
                  Customize and export with a single click.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-coral/20 group-hover:text-coral/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Reporting</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">PowerPoint Generation</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Automatically create professional presentation decks with insights,
                  visualizations, and recommendations ready to share.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="text-coral/20 group-hover:text-coral/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Sharing</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Interactive Portal</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Share insights with stakeholders through a secure, branded web portal
                  with real-time updates and interactive exploration.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="text-coral/20 group-hover:text-coral/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Monitoring</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Real-Time Dashboards</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Monitor key metrics with live dashboards that update automatically
                  as new data arrives. Never miss a critical insight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-16 text-center">
              Industry Applications
            </h2>

            <div className="space-y-12">
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
                <div key={index} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
                  <div className="grid md:grid-cols-3 gap-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{item.title}</h3>
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <span className="text-sm text-coral uppercase tracking-wider font-medium block mb-2">Challenge</span>
                        <p className="text-muted-foreground text-base leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm text-coral uppercase tracking-wider font-medium block mb-2">Solution</span>
                        <p className="text-muted-foreground text-base leading-relaxed">{item.solution}</p>
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
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-6">
              Ready to Experience Platinum?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a personalized demo and discover how Platinum can transform your
              business intelligence workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="coral" className="rounded-lg px-8 py-6 text-base font-medium" asChild>
                <a href="/discovery">
                  Book Your Discovery Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
