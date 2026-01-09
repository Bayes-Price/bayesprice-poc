import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart, Bot, Cog, FileText, ShieldCheck, Briefcase } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Finta Style with Gradient Background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block border border-coral/20 bg-coral/5 px-4 py-2 rounded-full text-sm font-medium mb-6 text-coral">
              Professional Services
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Expert Support.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Expert support from data connection to final delivery. Our team combines technical
              expertise with deep market research knowledge to ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white rounded-lg px-8 py-6 text-base font-medium">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-coral text-coral hover:bg-coral hover:text-white rounded-lg px-8 py-6 text-base font-medium transition-all">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight mb-4 text-center">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Comprehensive solutions to support your data and insights journey
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-coral hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <Briefcase className="text-coral" size={32} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Integration</span>
                </div>
                <h3 className="text-2xl font-heading font-normal text-foreground mb-3">Data Connection</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Seamlessly connect your data sources to our platforms with expert guidance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Multi-source integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> API setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Data validation</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-coral hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <Bot className="text-coral" size={32} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-heading font-normal text-foreground mb-3">AI-Enhanced Analysis</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Leverage AI and human expertise for deeper insights and visualizations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Advanced statistics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Custom visualization</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Insight interpretation</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-coral hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <Cog className="text-coral" size={32} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-2xl font-heading font-normal text-foreground mb-3">Automation Services</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Streamline workflows with automated tabulations and reporting.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Automated tables</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Recurring reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Custom workflows</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-coral hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <FileText className="text-coral" size={32} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Reporting</span>
                </div>
                <h3 className="text-2xl font-heading font-normal text-foreground mb-3">Custom Reporting</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Professional PowerPoint decks and standard tables tailored to your needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Branded design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Table templates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Executive summaries</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-coral hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <ShieldCheck className="text-coral" size={32} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Quality</span>
                </div>
                <h3 className="text-2xl font-heading font-normal text-foreground mb-3">Data Quality</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Ensure accuracy and reliability with comprehensive quality checks.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Integrity validation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Anomaly detection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Quality audits</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-coral hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <BarChart className="text-coral" size={32} />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Management</span>
                </div>
                <h3 className="text-2xl font-heading font-normal text-foreground mb-3">Project Execution</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Complete project management from design to delivery.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Design consultation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Project coordination</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-coral flex-shrink-0" /> Stakeholder support</li>
                </ul>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight mb-4">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-normal text-foreground mb-2">{item.title}</h3>
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you need help with a single project or ongoing support,
              our team is ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white rounded-lg px-8 py-6 text-base font-medium">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-coral text-coral hover:bg-coral hover:text-white rounded-lg px-8 py-6 text-base font-medium transition-all">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
