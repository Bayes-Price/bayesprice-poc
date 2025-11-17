import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Workflow } from "lucide-react";
import platinumDashboard from "@/assets/platinum-dashboard.jpg";
const PlatinumSolution = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                AI-Powered Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
                Meet Platinum: Your AI-Powered{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Insight Engine
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Ground-breaking speed to insight. Transform weeks of analysis into minutes 
                with our award-winning AI-driven business intelligence platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Request Pricing
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img src={platinumDashboard} alt="Platinum Dashboard Interface" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to turn data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">Multi-Source Data Ingestion</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate surveys, CRM feedback, social media, and internal data 
                  from multiple sources in one unified platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">AI-Driven Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms automatically analyze patterns, 
                  trends, and anomalies in your data with unprecedented accuracy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">Automated Visualizations</h3>
                <p className="text-muted-foreground">
                  Generate stunning, interactive charts and graphs automatically. 
                  Customize and export with a single click.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">PowerPoint Generation</h3>
                <p className="text-muted-foreground">
                  Automatically create professional presentation decks with insights, 
                  visualizations, and recommendations ready to share.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">Interactive Portal</h3>
                <p className="text-muted-foreground">
                  Share insights with stakeholders through a secure, branded web portal 
                  with real-time updates and interactive exploration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">Real-Time Dashboards</h3>
                <p className="text-muted-foreground">
                  Monitor key metrics with live dashboards that update automatically 
                  as new data arrives. Never miss a critical insight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored solutions for every sector
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Financial Services</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Rapidly analyze market sentiment and risk indicators 
                  across multiple data sources.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Platinum ingests trading data, news feeds, and social sentiment 
                  to provide real-time risk assessments and automated compliance reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Brands & Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Measure brand equity and campaign effectiveness 
                  across multiple channels quickly.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Automated analysis of survey data, social media metrics, 
                  and sales figures with instant PowerPoint reports for stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Technology Companies</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Enable product teams to access customer insights 
                  without waiting for analyst reports.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Self-service insight portals with AI-powered analytics 
                  that non-technical teams can explore independently.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Pharmaceutical</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Maintain rigorous data quality while processing 
                  pharmacovigilance reports at scale.
                </p>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Automated quality checks with AI-driven anomaly detection 
                  and audit-ready reporting for regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Workflow className="mx-auto text-secondary mb-4" size={64} />
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                Seamless Integration
              </h2>
              <p className="text-lg text-muted-foreground">
                Works with your existing tools and workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3">Data Sources</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Survey platforms (all major formats)</li>
                    <li>• CRM systems (Salesforce, HubSpot, etc.)</li>
                    <li>• Social media APIs</li>
                    <li>• Excel, CSV, and database connections</li>
                    <li>• Custom API integrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3">Export Options</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• PowerPoint presentations</li>
                    <li>• Excel workbooks</li>
                    <li>• Tableau dashboards</li>
                    <li>• PDF reports</li>
                    <li>• Interactive web portals</li>
                  </ul>
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
              Ready to Experience Platinum?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Book a personalized demo and discover how Platinum can transform your 
              business intelligence workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Book Your Discovery Session
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Product Sheet
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default PlatinumSolution;