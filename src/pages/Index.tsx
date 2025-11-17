import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Zap, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database,
  Building2,
  Heart,
  Pill,
  Smartphone,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";
import dataFlow from "@/assets/data-flow.jpg";
import platinumDashboard from "@/assets/platinum-dashboard.jpg";
import rubyDesktop from "@/assets/ruby-desktop.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
                Transform Data into Action at{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Speed
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Bayes Price combines AI-powered software with human expertise to deliver 
                business intelligence that drives decisions in minutes, not weeks
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Book Your Discovery Session
                </Button>
                <Link to="/solutions/platinum">
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    See Platinum in Action
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src={heroImage} 
                alt="Business professional" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <Zap className="text-electric" size={24} />
                  <div>
                    <p className="font-semibold text-charcoal">90% Faster</p>
                    <p className="text-sm text-muted-foreground">Analysis Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">
              Traditional BI is Too Slow for Modern Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Platinum processes months of data in minutes using AI, then adds human insight for context
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-muted border-0">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl">⏱️</div>
                <h3 className="text-2xl font-semibold text-charcoal">The Old Way</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weeks of manual data processing</li>
                  <li>• Disconnected tools and workflows</li>
                  <li>• Delayed insights and missed opportunities</li>
                  <li>• High costs and resource intensive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-glow">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-2xl font-semibold text-charcoal">The Bayes Price Way</h3>
                <ul className="space-y-2 text-charcoal-light">
                  <li>• Minutes from data to insight</li>
                  <li>• Automated AI-driven analysis</li>
                  <li>• Real-time actionable intelligence</li>
                  <li>• Scalable and budget-friendly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Award-winning technology that transforms how you work with data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Platinum Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={platinumDashboard} 
                  alt="Platinum Dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  AI-Powered
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2">Platinum</h3>
                <p className="text-muted-foreground mb-4">
                  Ground-breaking speed to insight
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Zap className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>AI-driven automated analysis & visualizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Ingests multiple data sources seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Real-time dashboards & interactive portals</span>
                  </li>
                </ul>
                <Link to="/solutions/platinum">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Learn More About Platinum
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ruby Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={rubyDesktop} 
                  alt="Ruby Desktop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Award Winner
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2">Ruby</h3>
                <p className="text-muted-foreground mb-4">
                  Award-winning survey data processing
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>GUI + open-source batch scripting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Supports all survey data formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Export to Excel, PowerPoint, Tableau</span>
                  </li>
                </ul>
                <Link to="/solutions/ruby">
                  <Button className="w-full" variant="outline">
                    Learn More About Ruby
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading organizations across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer">
              <Building2 className="mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-semibold text-charcoal">Financial Services</h4>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer">
              <TrendingUp className="mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-semibold text-charcoal">Brands</h4>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer">
              <Smartphone className="mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-semibold text-charcoal">Technology</h4>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer">
              <Pill className="mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-semibold text-charcoal">Pharmaceutical</h4>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer">
              <Heart className="mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" size={40} />
              <h4 className="font-semibold text-charcoal">Charities</h4>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              The Bayes Price Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <Zap className="mx-auto mb-4 text-electric" size={48} />
              <h3 className="text-xl font-bold text-charcoal mb-2">Speed to Insight</h3>
              <p className="text-muted-foreground">From data collection to action in minutes, not weeks</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="mx-auto mb-4 text-electric" size={48} />
              <h3 className="text-xl font-bold text-charcoal mb-2">Hybrid AI + Human</h3>
              <p className="text-muted-foreground">Algorithmic power meets expert interpretation</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="mx-auto mb-4 text-electric" size={48} />
              <h3 className="text-xl font-bold text-charcoal mb-2">End-to-End Platform</h3>
              <p className="text-muted-foreground">From ingestion to visualization in one place</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="mx-auto mb-4 text-electric" size={48} />
              <h3 className="text-xl font-bold text-charcoal mb-2">Scalable</h3>
              <p className="text-muted-foreground">Enterprise power, accessible pricing</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Award className="mx-auto text-accent" size={64} />
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">
              Award-Winning Technology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  MRS Technology & Innovation Award
                </h3>
                <p className="text-muted-foreground">
                  Recognized for integration, automation, and error reduction excellence
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Insight250 Winner 2024
                </h3>
                <p className="text-muted-foreground">
                  Matt Gibbs honored for innovation in insight generation
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Insights?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Discover how Bayes Price can transform your business intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Book a Demo
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
