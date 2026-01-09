import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Finta Style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our projects show how <span className="text-coral font-medium">intelligence systems</span> make a difference: sharper insights, cleaner dashboards, better decision-making. Explore the work that's helped our clients grow, scale, and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight text-center mb-16">
              Evidence Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial Card 1 */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                  "The team at Bayes Price have been instrumental at getting to the insight in our data. Beyond data processing, the team are very skilled at visualisations, automations and integration of more complex algorithms and segmentations into our data."
                </p>
                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <div className="font-semibold text-foreground">John-William Awbrey</div>
                  <div className="text-muted-foreground text-sm">Head of Brand & Campaign Insights</div>
                  <div className="text-muted-foreground/70 text-sm">Sky Central</div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                  "Bayes Price are a regular partner in providing quantitative research. It's important for us that they have similar ethics and dedication to quality, and work in similar ways. They're quick, efficient, great at problem-solving, and reliably get things done."
                </p>
                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <div className="font-semibold text-foreground">Jeremy Rix</div>
                  <div className="text-muted-foreground text-sm">Managing Director</div>
                  <div className="text-muted-foreground/70 text-sm">OKO</div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="font-semibold mb-4 text-coral flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-coral"></span>
                  MRS Award Winner
                </div>
                <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                  "An excellent solution. The integrated approach to merging data, simplifying communication, delivering interactive results, and automating all these through a single scripting language should significantly reduce errors, turnaround time, and cost."
                </p>
                <div className="space-y-1 border-t border-gray-100 pt-4">
                  <div className="font-semibold text-foreground">Judges - MRS/ASC Award</div>
                  <div className="text-muted-foreground text-sm">for Technology & Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight mb-4 text-center">
              Featured work
            </h2>
            <p className="text-coral text-center text-lg mb-16">2024-25</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Placeholder 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 mb-4 overflow-hidden rounded-2xl border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground/40 text-sm group-hover:text-coral transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Data Processing</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">Project Title</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 mb-4 overflow-hidden rounded-2xl border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground/40 text-sm group-hover:text-coral transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Analytics</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">Project Title</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 mb-4 overflow-hidden rounded-2xl border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground/40 text-sm group-hover:text-coral transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Dashboard Design</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">Project Title</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 4 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 mb-4 overflow-hidden rounded-2xl border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground/40 text-sm group-hover:text-coral transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Integration</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">Project Title</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 5 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 mb-4 overflow-hidden rounded-2xl border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground/40 text-sm group-hover:text-coral transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Automation</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">Project Title</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>

              {/* Project Placeholder 6 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 mb-4 overflow-hidden rounded-2xl border border-gray-200 group-hover:border-coral transition-colors">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground/40 text-sm group-hover:text-coral transition-colors">Project Image</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-coral uppercase tracking-wider font-medium">Visualization</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">Project Title</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brief description of the project and its impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-foreground leading-tight mb-6">
              Ready to start your project?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to transform your data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white rounded-lg px-8 py-6 text-base font-medium transition-all">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-gray-300 bg-transparent text-foreground hover:bg-gray-50 rounded-lg px-8 py-6 text-base font-medium transition-all">
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
