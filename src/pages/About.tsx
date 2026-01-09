import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, MapPin, Target, ArrowRight, Zap, Gauge, CheckCircle, Handshake, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              We build <span className="text-coral">intelligence.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Born from a desire to do things differently, we're transforming business intelligence
              through the power of AI and human expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center">
                <Target className="text-coral" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-foreground">
                Our Story
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Founded by industry veterans with decades of experience in market research and data analytics,
                Bayes Price was born from a simple observation: organizations were drowning in data but
                starving for insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We set out to bridge that gap by combining cutting-edge AI technology with deep domain
                expertise, creating tools that transform complex data into clear, actionable intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-foreground mb-8">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We envision a world where insights are instantaneous and actionable, empowering every
              organization to achieve unprecedented clarity and strategic agility.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
              Our Values
            </h2>
            <div className="h-1 w-20 bg-coral mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Innovation", desc: "Pushing boundaries with cutting-edge AI technology" },
              { icon: Gauge, title: "Speed", desc: "Delivering insights when you need them most" },
              { icon: CheckCircle, title: "Accuracy", desc: "Combining AI precision with human validation" },
              { icon: Handshake, title: "Partnership", desc: "Building lasting relationships with our clients" }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-lg border border-border hover:border-coral transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-coral" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
              Founders
            </h2>
            <div className="h-1 w-20 bg-coral mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Matt Gibbs */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-coral/10 flex items-center justify-center text-coral text-2xl font-bold">
                  MG
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Matt Gibbs</h3>
                  <p className="text-coral font-medium text-sm mb-2">Co-Founder & CEO</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 20 years in market research, Matt leads the strategic vision at Bayes Price.
                    His expertise in data analytics and business intelligence has driven the development
                    of innovative solutions that transform how organisations extract value from their data.
                    Winner of the Insight250 award in 2024.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mattgibbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-coral hover:text-coral/80 transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Nikki Leftly */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-coral/10 flex items-center justify-center text-coral text-2xl font-bold">
                  NL
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Nikki Leftly</h3>
                  <p className="text-coral font-medium text-sm mb-2">Co-Founder & COO</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nikki brings extensive experience in research operations and data processing.
                    She oversees the day-to-day operations at Bayes Price, ensuring delivery excellence
                    and client satisfaction. Her hands-on approach and attention to detail have been
                    instrumental in building lasting client relationships.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/nikkileftly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-coral hover:text-coral/80 transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
              Our Team
            </h2>
            <div className="h-1 w-20 bg-coral mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Roland Seidel */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center text-coral text-lg font-bold">
                    RS
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rolandseidel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral transition-colors"
                    aria-label="Roland's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Roland Seidel</h3>
                  <p className="text-coral font-medium text-xs mb-3">Software Lead</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leads research data processing software
                  </p>
                </div>
              </div>
            </div>

            {/* Dale Chant */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center text-coral text-lg font-bold">
                    DC
                  </div>
                  <a
                    href="https://www.linkedin.com/in/dalechant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral transition-colors"
                    aria-label="Dale's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Dale Chant</h3>
                  <p className="text-coral font-medium text-xs mb-3">Operations Specialist</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialising in continuous tracking operations
                  </p>
                </div>
              </div>
            </div>

            {/* Kai Davenport */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center text-coral text-lg font-bold">
                    KD
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kaidavenport/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral transition-colors"
                    aria-label="Kai's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Kai Davenport</h3>
                  <p className="text-coral font-medium text-xs mb-3">Software Architect</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Software architect & GenAI
                  </p>
                </div>
              </div>
            </div>

            {/* Adam Knight */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center text-coral text-lg font-bold">
                    AK
                  </div>
                  <a
                    href="https://www.linkedin.com/in/adamknight/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral transition-colors"
                    aria-label="Adam's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Adam Knight</h3>
                  <p className="text-coral font-medium text-xs mb-3">UI & GenAI Lead</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implementation of UI & GenAI
                  </p>
                </div>
              </div>
            </div>

            {/* Amy Graveson */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-coral transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center text-coral text-lg font-bold">
                    AG
                  </div>
                  <a
                    href="https://www.linkedin.com/in/amygraveson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral transition-colors"
                    aria-label="Amy's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Amy Graveson</h3>
                  <p className="text-coral font-medium text-xs mb-3">General Manager</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Legal, Administration, & General Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-foreground">
                Our Locations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Serving clients across the UK and beyond from our strategic hubs.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-coral" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">London</h3>
                    <p className="text-muted-foreground">Financial services & enterprise hub</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-coral" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Bristol</h3>
                    <p className="text-muted-foreground">Innovation & technology development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-border">
              <div className="absolute inset-0 flex items-center justify-center text-blue-100 font-bold text-9xl select-none">
                UK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-6">
              <Award className="text-coral" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-lg border border-border hover:border-coral transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                MRS Technology & Innovation Award
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized by the Market Research Society for exceptional integration,
                automation, and error reduction in our business intelligence solutions.
              </p>
            </div>

            <div className="bg-white p-10 rounded-lg border border-border hover:border-coral transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Insight250 Winner 2024
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Matt Gibbs honored for groundbreaking innovation in insight generation,
                recognizing leadership in transforming how businesses extract value from data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
