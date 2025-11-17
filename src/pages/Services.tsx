import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
const Services = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert support from data connection to final delivery. Our team combines technical 
              expertise with deep market research knowledge to ensure your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for all your business intelligence needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                
                <h3 className="text-2xl font-bold text-charcoal">Data Connection & Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Seamlessly connect your data sources to our platforms with expert guidance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-source data integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>API setup and configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Data validation and quality checks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                
                <h3 className="text-2xl font-bold text-charcoal">AI-Enhanced Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Leverage AI and human expertise for deeper insights and visualizations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Advanced statistical analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom visualization design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Insight interpretation and recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                
                <h3 className="text-2xl font-bold text-charcoal">Automation Services</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline workflows with automated tabulations and reporting.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Automated table generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Recurring report scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom workflow development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                
                <h3 className="text-2xl font-bold text-charcoal">Custom Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Professional PowerPoint decks and standard tables tailored to your needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Branded presentation design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Standard table templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Executive summary creation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                
                <h3 className="text-2xl font-bold text-charcoal">Data Quality Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Ensure accuracy and reliability with comprehensive quality checks.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Data integrity validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Anomaly detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Quality audit reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                
                <h3 className="text-2xl font-bold text-charcoal">End-to-End Project Execution</h3>
                <p className="text-muted-foreground mb-4">
                  Complete project management from design to delivery.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Research design consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Full project coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric flex-shrink-0 mt-0.5" size={16} />
                    <span>Stakeholder presentation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to delivering exceptional results
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Discovery & Planning</h3>
                      <p className="text-muted-foreground">
                        We start by understanding your business objectives, data sources, and 
                        reporting requirements to create a tailored approach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Implementation</h3>
                      <p className="text-muted-foreground">
                        Our team connects data sources, configures automation, and sets up 
                        quality controls to ensure reliable insights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Analysis & Reporting</h3>
                      <p className="text-muted-foreground">
                        We analyze your data using AI and human expertise, creating clear 
                        visualizations and actionable recommendations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Ongoing Support</h3>
                      <p className="text-muted-foreground">
                        We provide continuous support, optimization, and training to ensure 
                        your team gets maximum value from our solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Whether you need help with a single project or ongoing support, 
              our team is ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;