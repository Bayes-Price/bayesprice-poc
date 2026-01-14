import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Workflow, BarChart3, FileText, Monitor, Clock, Play } from "lucide-react";
import platinumDashboard from "@/assets/platinum-dashboard.jpg";
import platinumLogo from "@/assets/Platinum/platinumblue3.png";
import VideoModal from "@/components/VideoModal";

const helpVideos = [
  { id: "x4BGTv4_Iqs", title: "Personas", description: "How to use personas in Platinum" },
  { id: "_1J8FKGaPJc", title: "Context Engine", description: "Understanding the context engine" },
  { id: "CS_eqHowoHY", title: "Admin", description: "Platform administration overview" },
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
            <div className="inline-block border border-blue/20 bg-blue/5 px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue">
              AI-Powered Platform
            </div>
            <img src={platinumLogo} alt="Platinum" className="w-full max-w-md mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Insight Engine
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Ground-breaking speed to insight. Transform weeks of analysis into minutes
              with our AI-enhanced business intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="blue" className="rounded-full px-8 py-6 text-base font-medium" asChild>
                <a href="/discovery">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Dashboard Screenshot - hidden until real screenshots ready */}
          <div className="hidden max-w-5xl mx-auto mt-16">
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
                  className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-200 hover:border-blue transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors">
                    <Play className="text-blue ml-0.5" size={20} />
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
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-blue transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Workflow className="text-blue/20 group-hover:text-blue/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-blue uppercase tracking-wider font-medium">Ingestion</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Multi-Source Integration</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Seamlessly integrate surveys, CRM feedback, social media, and internal data
                  from multiple sources in one unified platform.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-blue transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="text-blue/20 group-hover:text-blue/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-blue uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">AI-Driven Insights</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Advanced models understand your data, automate manual processes, and provide transparent insights, tracable to source.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-blue transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="text-blue/20 group-hover:text-blue/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-blue uppercase tracking-wider font-medium">Customisable</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Your Culture</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Tailor our sophisticated AI-enhanced insights toolkit, to your corporate culture, to understand your projects, and respect your methodologies.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-blue transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-blue/20 group-hover:text-blue/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-blue uppercase tracking-wider font-medium">Reporting</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Advanced Tabulation</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Generate complex data tables with filters, weighting, side and top nesting.  Significance tests as standard.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-blue transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="text-blue/20 group-hover:text-blue/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-blue uppercase tracking-wider font-medium">Sharing</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Interactive Portal</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Share insights with stakeholders through a secure, branded web portal
                  with real-time updates and interactive exploration.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-blue transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="text-blue/20 group-hover:text-blue/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-blue uppercase tracking-wider font-medium">Monitoring</span>
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-blue">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Experience Platinum?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Book a personalized demo and discover how Platinum can transform your
            business intelligence workflow.
          </p>
          <a
            href="/discovery"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Book Your Discovery Session
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlatinumSolution;
