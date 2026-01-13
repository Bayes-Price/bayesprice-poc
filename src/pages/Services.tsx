import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Bot, Cog, FileText, ShieldCheck, Briefcase } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Matching Platinum/Ruby Style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block border border-green/20 bg-green/5 px-4 py-2 rounded-full text-sm font-medium mb-6 text-green">
              Professional Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Expert Support
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Expert support from data connection to final delivery. Our team combines technical
              expertise with deep knowledge of the insight profession, to ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green hover:bg-green/90 text-white rounded-full px-8 py-6 text-base font-medium" asChild>
                <a href="/discovery">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Matching Platinum Features Style */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-16 text-center">
              Our Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-green transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase className="text-green/20 group-hover:text-green/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green uppercase tracking-wider font-medium">Integration</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Data Connection</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Seamlessly connect your data sources to our platforms with expert guidance.
                  Multi-source integration, API setup, and data validation included.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-green transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bot className="text-green/20 group-hover:text-green/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">AI-Enhanced Analysis</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Leverage AI and human expertise for deeper insights and visualizations.
                  Advanced statistics, custom visualization, and insight interpretation.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-green transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cog className="text-green/20 group-hover:text-green/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Automation Services</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Streamline workflows with automated tabulations and reporting.
                  Automated tables, recurring reports, and custom workflows.
                </p>
              </div>

              {/* Service 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-green transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-green/20 group-hover:text-green/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green uppercase tracking-wider font-medium">Reporting</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Custom Reporting</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Professional PowerPoint decks and standard tables tailored to your needs.
                  Branded design, table templates, and executive summaries.
                </p>
              </div>

              {/* Service 5 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-green transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck className="text-green/20 group-hover:text-green/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green uppercase tracking-wider font-medium">Quality</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Data Quality</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Ensure accuracy and reliability with comprehensive quality checks.
                  Integrity validation, anomaly detection, and quality audits.
                </p>
              </div>

              {/* Service 6 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100/50 mb-6 overflow-hidden rounded-2xl relative border border-gray-200 group-hover:border-green transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart className="text-green/20 group-hover:text-green/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-green uppercase tracking-wider font-medium">Management</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Project Execution</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Complete project management from design to delivery.
                  Design consultation, project coordination, and stakeholder support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to delivering exceptional results
              </p>
            </div>

            <div className="space-y-6">
              {[
                { step: "1", title: "Discovery & Planning", desc: "We start by understanding your business objectives, data sources, and reporting requirements to create a tailored approach." },
                { step: "2", title: "Implementation", desc: "Our team connects data sources, configures automation, and sets up quality controls to ensure reliable insights." },
                { step: "3", title: "Analysis & Reporting", desc: "We analyze your data using AI and human expertise, creating clear visualizations and actionable recommendations." },
                { step: "4", title: "Ongoing Support", desc: "We provide continuous support, optimization, and training to ensure your team gets maximum value from our solutions." }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Platinum Style */}
      <section className="py-24 md:py-32 bg-green">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Whether you need help with a single project or ongoing support,
            our team is ready to deliver exceptional results.
          </p>
          <a
            href="/discovery"
            className="inline-flex items-center justify-center gap-2 bg-white text-green px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
