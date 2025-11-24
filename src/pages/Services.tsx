import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart, Bot, Cog, FileText, ShieldCheck, Briefcase } from "lucide-react";
import heroProfessional from "@/assets/hero-professional.jpg";

const Services = () => {
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
              Professional Services
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
              Expert <br />
              <span className="text-bayes-yellow">Support.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mb-10">
              Expert support from data connection to final delivery. Our team combines technical
              expertise with deep market research knowledge to ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-16 animate-fade-in-up">
              Our Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Integration</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Data Connection</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  Seamlessly connect your data sources to our platforms with expert guidance.
                </p>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Multi-source integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> API setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Data validation</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bot className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Analysis</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI-Enhanced Analysis</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  Leverage AI and human expertise for deeper insights and visualizations.
                </p>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Advanced statistics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Custom visualization</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Insight interpretation</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cog className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Automation Services</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  Streamline workflows with automated tabulations and reporting.
                </p>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Automated tables</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Recurring reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Custom workflows</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Reporting</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Custom Reporting</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  Professional PowerPoint decks and standard tables tailored to your needs.
                </p>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Branded design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Table templates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Executive summaries</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Quality</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Data Quality</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  Ensure accuracy and reliability with comprehensive quality checks.
                </p>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Integrity validation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Anomaly detection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Quality audits</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart className="text-white/20 group-hover:text-bayes-yellow transition-colors" size={64} />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Management</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Project Execution</h3>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  Complete project management from design to delivery.
                </p>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Design consultation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Project coordination</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-bayes-yellow" /> Stakeholder support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-muted/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-lg text-white/60">
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
                <div key={index} className="bg-white/5 p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-bayes-yellow text-bayes-blue rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">
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
      <section className="py-24 md:py-32 bg-background border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Whether you need help with a single project or ongoing support,
              our team is ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
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