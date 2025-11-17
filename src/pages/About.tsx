import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Bayes Price</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Born from a desire to do things differently, we're transforming business intelligence 
              through the power of AI and human expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Target className="mx-auto text-secondary" size={64} />
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To improve business intelligence through innovative AI solutions combined with 
              human insight, making powerful analytics accessible, fast, and actionable for 
              organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-xl font-bold text-charcoal">Innovation</h3>
                <p className="text-muted-foreground">
                  Pushing boundaries with cutting-edge AI technology
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-xl font-bold text-charcoal">Speed</h3>
                <p className="text-muted-foreground">
                  Delivering insights when you need them most
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl">✓</div>
                <h3 className="text-xl font-bold text-charcoal">Accuracy</h3>
                <p className="text-muted-foreground">
                  Combining AI precision with human validation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl">🤝</div>
                <h3 className="text-xl font-bold text-charcoal">Partnership</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships with our clients
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="mx-auto text-secondary mb-4" size={64} />
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Industry experts driving innovation in business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-charcoal text-center">Matt Gibbs</h3>
                <p className="text-center text-secondary font-semibold">Founder</p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Award className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Certified Member of the Market Research Society (CMRS)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Award className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>TSAPI Steering Group Chair</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Award className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Insight250 Winner 2024</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-charcoal text-center">Nikki Leftly</h3>
                <p className="text-center text-secondary font-semibold">Leadership</p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Award className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>25+ years experience in market research</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Award className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>ASC Committee Member</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Award className="text-electric mt-1 flex-shrink-0" size={18} />
                    <span>Industry veteran and thought leader</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="mx-auto text-secondary mb-4" size={64} />
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground">
              Serving clients across the UK and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <MapPin className="mx-auto text-secondary" size={48} />
                <h3 className="text-2xl font-bold text-charcoal">London</h3>
                <p className="text-muted-foreground">
                  Our London office serves as a hub for financial services and enterprise clients
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <MapPin className="mx-auto text-secondary" size={48} />
                <h3 className="text-2xl font-bold text-charcoal">Bristol</h3>
                <p className="text-muted-foreground">
                  Our Bristol location focuses on innovation and technology development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="mx-auto text-accent mb-4" size={64} />
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                Awards & Recognition
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    MRS Technology & Innovation Award
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized by the Market Research Society for exceptional integration, 
                    automation, and error reduction in our business intelligence solutions. 
                    Judges praised our innovative approach to combining AI with traditional research methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    Insight250 Winner 2024
                  </h3>
                  <p className="text-muted-foreground">
                    Matt Gibbs honored for groundbreaking innovation in insight generation, 
                    recognizing leadership in transforming how businesses extract value from data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
