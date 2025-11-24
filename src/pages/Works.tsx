import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bayes-blue/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
              Our projects show how <span className="text-bayes-yellow">intelligence systems</span> make a difference: sharper insights, cleaner dashboards, better decision-making. Explore the work that's helped our clients grow, scale, and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-bayes-yellow">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bayes-blue leading-[1.1] tracking-tight mb-16">
              Evidence Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial Card 1 */}
              <div className="bg-bayes-blue p-8 text-white rounded-tl-3xl rounded-br-3xl shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <p className="text-lg leading-relaxed mb-6 font-light">
                  "The team at Bayes Price have been instrumental at getting to the insight in our data. Beyond data processing, the team are very skilled at visualisations, automations and integration of more complex algorithms and segmentations into our data."
                </p>
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <div className="font-semibold text-bayes-yellow">John-William Awbrey</div>
                  <div className="text-white/80 text-sm">Head of Brand & Campaign Insights</div>
                  <div className="text-white/60 text-sm">Sky Central</div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-bayes-blue p-8 text-white rounded-tl-3xl rounded-br-3xl shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <p className="text-lg leading-relaxed mb-6 font-light">
                  "Bayes Price are a regular partner in providing quantitative research. It's important for us that they have similar ethics and dedication to quality, and work in similar ways. They're quick, efficient, great at problem-solving, and reliably get things done."
                </p>
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <div className="font-semibold text-bayes-yellow">Jeremy Rix</div>
                  <div className="text-white/80 text-sm">Managing Director</div>
                  <div className="text-white/60 text-sm">OKO</div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-bayes-blue p-8 text-white rounded-tl-3xl rounded-br-3xl shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="font-semibold mb-4 text-bayes-yellow flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-bayes-yellow"></span>
                  MRS Award Winner
                </div>
                <p className="text-lg leading-relaxed mb-6 font-light">
                  "An excellent solution. The integrated approach to merging data, simplifying communication, delivering interactive results, and automating all these through a single scripting language should significantly reduce errors, turnaround time, and cost."
                </p>
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <div className="font-semibold text-bayes-yellow">Judges - MRS/ASC Award</div>
                  <div className="text-white/80 text-sm">for Technology & Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-16">
              Featured work <span className="text-bayes-yellow">©2024-25</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Placeholder 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/40 text-sm group-hover:text-bayes-yellow transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Data Processing</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bayes-yellow transition-colors">Project Title</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/40 text-sm group-hover:text-bayes-yellow transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Analytics</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bayes-yellow transition-colors">Project Title</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/40 text-sm group-hover:text-bayes-yellow transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Dashboard Design</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bayes-yellow transition-colors">Project Title</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/40 text-sm group-hover:text-bayes-yellow transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Integration</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bayes-yellow transition-colors">Project Title</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 5 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/40 text-sm group-hover:text-bayes-yellow transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bayes-yellow transition-colors">Project Title</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 6 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-bayes-yellow transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/40 text-sm group-hover:text-bayes-yellow transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-medium">Visualization</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bayes-yellow transition-colors">Project Title</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Ready to start your project?
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Let's work together to transform your data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-lg font-medium transition-all">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Works;

