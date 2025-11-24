import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Target, ArrowRight } from "lucide-react";
import heroProfessional from "@/assets/hero-professional.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroProfessional}
            alt="About Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
              We build <br />
              <span className="text-bayes-yellow">intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light">
              Born from a desire to do things differently, we're transforming business intelligence
              through the power of AI and human expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Target className="text-bayes-yellow" size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Our Mission</h2>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
                To improve business intelligence through innovative AI solutions combined with
                human insight, making powerful analytics accessible, fast, and actionable for
                organizations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-muted/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Values</h2>
            <div className="h-1 w-20 bg-bayes-yellow"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Innovation", desc: "Pushing boundaries with cutting-edge AI technology" },
              { icon: "🎯", title: "Speed", desc: "Delivering insights when you need them most" },
              { icon: "✓", title: "Accuracy", desc: "Combining AI precision with human validation" },
              { icon: "🤝", title: "Partnership", desc: "Building lasting relationships with our clients" }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 border-l border-white/10 hover:border-bayes-yellow transition-colors animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 text-bayes-yellow">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Founders</h2>
            <div className="h-1 w-20 bg-bayes-yellow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            {/* Matt Gibbs */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="p-12 space-y-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-6 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Matt Gibbs</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-sm mb-3">Co-Founder & CEO</p>
                  <p className="text-white/60">Leads on Strategy</p>
                </div>
              </div>
            </div>

            {/* Nikki Leftly */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-12 space-y-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-6 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Nikki Leftly</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-sm mb-3">Co-Founder & COO</p>
                  <p className="text-white/60">Leads on Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Team</h2>
            <div className="h-1 w-20 bg-bayes-yellow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {/* Roland Seidel */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-4 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Roland Seidel</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-xs mb-3">Software Lead</p>
                  <p className="text-white/60 text-sm">Leads research data processing software</p>
                </div>
              </div>
            </div>

            {/* Dale Chant */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-4 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Dale Chant</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-xs mb-3">Operations Specialist</p>
                  <p className="text-white/60 text-sm">Specialising in continuous tracking operations</p>
                </div>
              </div>
            </div>

            {/* Kai Davenport */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-4 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Kai Davenport</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-xs mb-3">Software Architect</p>
                  <p className="text-white/60 text-sm">Software architect & GenAI</p>
                </div>
              </div>
            </div>

            {/* Adam Knight */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-4 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Adam Knight</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-xs mb-3">UI & GenAI Lead</p>
                  <p className="text-white/60 text-sm">Implementation of UI & GenAI</p>
                </div>
              </div>
            </div>

            {/* Amy Graveson */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bayes-blue to-bayes-blue-light mb-4 border-2 border-white/10"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Amy Graveson</h3>
                  <p className="text-bayes-yellow uppercase tracking-wider text-xs mb-3">General Manager</p>
                  <p className="text-white/60 text-sm">Legal, Administration, & General Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 md:py-32 bg-muted/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Our Locations</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12">
                Serving clients across the UK and beyond from our strategic hubs.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin className="text-bayes-yellow mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">London</h3>
                    <p className="text-white/60">Financial services & enterprise hub</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <MapPin className="text-bayes-yellow mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Bristol</h3>
                    <p className="text-white/60">Innovation & technology development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-white/5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Abstract map or image placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bayes-blue-light/20 to-background"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-9xl select-none">
                UK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 md:py-32 bg-background border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <Award className="mx-auto text-bayes-yellow mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-10 rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-4 text-white">
                MRS Technology & Innovation Award
              </h3>
              <p className="text-white/60 leading-relaxed">
                Recognized by the Market Research Society for exceptional integration,
                automation, and error reduction in our business intelligence solutions.
              </p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Insight250 Winner 2024
              </h3>
              <p className="text-white/60 leading-relaxed">
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
