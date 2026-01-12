import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Award, Linkedin } from "lucide-react";
import mattGibbsPhoto from "@/assets/team/matt-gibbs.jpg";
import nikkiLeftlyPhoto from "@/assets/team/nikki-leftly.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section - Our Story */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Our <span className="text-green">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our company was formed out of a desire to do things as they should be. We fuse traditional
              service, with established methods, and contemporary techniques. Offering the very best
              solutions to the market research and business intelligence communities.
            </p>
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We envision a world where insights are instantaneous and actionable, empowering every
              organization to achieve unprecedented clarity and strategic agility.
            </p>
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
            <div className="h-1 w-20 bg-green mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Matt Gibbs */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-10 space-y-6">
                <img
                  src={mattGibbsPhoto}
                  alt="Matt Gibbs"
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Matt Gibbs</h3>
                  <p className="text-green font-medium text-sm mb-2">Co-Founder & CEO</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Matt, recognised as one of the Insight250 winners in 2024, is a leader in merging
                    established theory with modern techniques, championing innovation and collaboration.
                    He is a Certified member of the Market Research Society (CMRS), a member of Australia's
                    Research Society, and chairs the TSAPI steering group. Passionate about bridging survey
                    data with broader applications, Matt is committed to facilitating connections that drive
                    impactful insights across the industry.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mattgibbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green hover:text-green/80 transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Nikki Leftly */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-10 space-y-6">
                <img
                  src={nikkiLeftlyPhoto}
                  alt="Nikki Leftly"
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Nikki Leftly</h3>
                  <p className="text-green font-medium text-sm mb-2">Co-Founder & COO</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nikki has over 25 years' experience in both the Market and Social Research industries,
                    completing 10,000+ projects over the course of her career. She has built-up and led a
                    number of internal DP departments, and specialises in training and mentoring individuals
                    and teams working on highly complex projects. Nikki sits on the committee for the
                    Association of Survey Computing (ASC).
                  </p>
                  <a
                    href="https://www.linkedin.com/in/nikkileftly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green hover:text-green/80 transition-colors text-sm font-medium"
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
            <div className="h-1 w-20 bg-green mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Roland Seidel */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green text-lg font-bold">
                    RS
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rolandseidel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green transition-colors"
                    aria-label="Roland's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Roland Seidel</h3>
                  <p className="text-green font-medium text-xs mb-3">Software Lead</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leads research data processing software
                  </p>
                </div>
              </div>
            </div>

            {/* Dale Chant */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green text-lg font-bold">
                    DC
                  </div>
                  <a
                    href="https://www.linkedin.com/in/dalechant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green transition-colors"
                    aria-label="Dale's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Dale Chant</h3>
                  <p className="text-green font-medium text-xs mb-3">Operations Specialist</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialising in continuous tracking operations
                  </p>
                </div>
              </div>
            </div>

            {/* Kai Davenport */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green text-lg font-bold">
                    KD
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kaidavenport/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green transition-colors"
                    aria-label="Kai's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Kai Davenport</h3>
                  <p className="text-green font-medium text-xs mb-3">Software Architect</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Software architect & GenAI
                  </p>
                </div>
              </div>
            </div>

            {/* Adam Knight */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green text-lg font-bold">
                    AK
                  </div>
                  <a
                    href="https://www.linkedin.com/in/adamknight/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green transition-colors"
                    aria-label="Adam's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Adam Knight</h3>
                  <p className="text-green font-medium text-xs mb-3">UI & GenAI Lead</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implementation of UI & GenAI
                  </p>
                </div>
              </div>
            </div>

            {/* Amy Graveson */}
            <div className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-green transition-all hover:shadow-lg">
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green text-lg font-bold">
                    AG
                  </div>
                  <a
                    href="https://www.linkedin.com/in/amygraveson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green transition-colors"
                    aria-label="Amy's LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Amy Graveson</h3>
                  <p className="text-green font-medium text-xs mb-3">General Manager</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Legal, Administration, & General Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
              <Award className="text-green" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-lg border border-border hover:border-green transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                MRS Technology & Innovation Award
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized by the Market Research Society for exceptional integration,
                automation, and error reduction in our business intelligence solutions.
              </p>
            </div>

            <div className="bg-white p-10 rounded-lg border border-border hover:border-green transition-all hover:shadow-lg">
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

      {/* Testimonials */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default About;
