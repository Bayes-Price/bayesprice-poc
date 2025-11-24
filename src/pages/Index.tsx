import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Zap,
  Brain,
  BarChart3,
  TrendingUp,
  Database,
  ArrowRight,
  DollarSign,
  Headphones,
  Clock,
  Bell
} from "lucide-react";
import heroProfessional from "@/assets/hero-market-research.png";
import platinumDashboard from "@/assets/platinum-dashboard.jpg";
import rubyDesktop from "@/assets/ruby-desktop.jpg";
// Note: In a real scenario, I would move the generated image to assets. 
// For now, I will use the absolute path or a placeholder if I can't move it easily.
// Since I can't move files to src/assets easily without a command, I'll assume I need to use the artifact path or copy it.
// Actually, I should copy the file to the project assets first.

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-bayes-yellow/20">
      <Navigation />

      {/* Hero Section - Noora Style */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroProfessional}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-bayes-blue/40 to-background/60 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 h-full flex flex-col pt-32 pb-12 min-h-screen justify-between">
          {/* Top Area */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter">
              Bayes Price
            </h1>

            <div className="mt-12 md:mt-32 max-w-2xl text-right">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Transform Data into Action.
              </h2>
            </div>
          </div>

          {/* Bottom Area */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl space-y-8">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Not just another agency.<br />
                <span className="font-medium text-bayes-yellow">Bayes Price</span> combines AI-powered software with human expertise to deliver business intelligence that drives decisions.
              </p>
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-full px-8 py-6 text-lg font-medium border-none">
                Book a meeting
              </Button>
            </div>

            {/* Card */}
            <div className="relative w-full md:w-[400px] group cursor-pointer">
              <Link to="/solutions/platinum">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img src={platinumDashboard} alt="Platinum" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-1">Platinum Solution</h3>
                    <p className="text-white/80 text-sm">AI-driven automated analysis</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Noora Style */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-12">
              We help ambitious teams build <span className="text-bayes-yellow">intelligence systems</span> that earn attention. From data ingestion to insight, every detail is crafted to make your business look <span className="text-bayes-yellow">confident</span> and perform better.
            </h2>
            <div className="pt-8">
              <Link to="/about">
                <Button variant="outline" className="bg-transparent border-gray-300 text-gray-900 hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-none px-6 py-3 text-sm font-medium transition-colors">
                  More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-16">
              We focus on making your business stand out with work that's <span className="text-bayes-yellow">useful</span>, <span className="text-bayes-yellow">flexible</span>, and built for the <span className="text-bayes-yellow">long term</span>.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl">
              Our clients come to us because they want more than good-looking dashboards. They want <span className="text-bayes-yellow">intelligence</span> that solves problems, systems that resonate, and insights that actually <span className="text-bayes-yellow">perform</span>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {/* Flexible Pricing Card */}
              <div className="bg-white p-8 border border-gray-200 hover:border-bayes-yellow transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="text-bayes-yellow" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Flexible pricing</h3>
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-8 leading-tight">
                  Clear packages for different stages of growth.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-gray-900">$2,500</div>
                  <div className="pt-4">
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-2/3 bg-bayes-coral rounded-full"></div>
                      <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-bayes-coral rounded-full -translate-x-1/2"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Start simple</span>
                      <span>Expand as you go</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Priority Support Card */}
              <div className="bg-white p-8 border border-gray-200 hover:border-bayes-yellow transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Headphones className="text-bayes-yellow" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Priority support</h3>
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-8 leading-tight">
                  Fast communication and quick turnaround on feedback.
                </p>
                <div className="relative mt-8 flex justify-center">
                  <div className="relative w-28 h-56 bg-gray-100 rounded-[2rem] border-2 border-gray-200 p-3 flex flex-col">
                    <div className="text-[10px] text-gray-500 mb-2 text-center">27/7 Support</div>
                    <div className="flex-1"></div>
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[calc(100%-8px)] bg-bayes-coral rounded-lg p-2.5 text-white text-[10px] shadow-lg">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-semibold text-[11px]">TRELLO</span>
                        <span className="text-white/80 text-[9px]">1m ago</span>
                      </div>
                      <div className="text-white/90 leading-tight">[...] Requested design change</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Turnarounds Card */}
              <div className="bg-white p-8 border border-gray-200 hover:border-bayes-yellow transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-bayes-yellow" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Fast turnarounds</h3>
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-8 leading-tight">
                  Days, not weeks. We keep projects moving.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                    <div className="absolute inset-2 rounded-full border border-gray-100"></div>
                    {/* Clock hands pointing to ~10:10 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center">
                      {/* Hour hand */}
                      <div className="absolute w-0.5 h-4 bg-bayes-coral origin-bottom rotate-[135deg] -translate-x-1/2"></div>
                      {/* Minute hand */}
                      <div className="absolute w-0.5 h-6 bg-bayes-coral origin-bottom rotate-[135deg] -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">Time to complete</div>
                  <div className="text-3xl font-bold text-gray-900 text-center">24-36h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Our <span className="text-bayes-yellow">Solutions</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                Award-winning technology that transforms how you work with data. Featured work between ©2024-25
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Platinum Card */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={platinumDashboard}
                    alt="Platinum Dashboard"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-semibold">AI-Powered</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Platinum</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ground-breaking speed to insight. AI-driven automated analysis & visualizations that transform months of data into minutes of understanding.
                </p>
                <Link to="/solutions/platinum">
                  <Button variant="outline" className="bg-transparent border-gray-300 text-gray-900 hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-none px-6 py-3 text-sm font-medium transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Ruby Card */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={rubyDesktop}
                    alt="Ruby Desktop"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-bayes-yellow uppercase tracking-wider font-semibold">Award Winner</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ruby</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Award-winning survey data processing. GUI + open-source batch scripting that supports all survey data formats.
                </p>
                <Link to="/solutions/ruby">
                  <Button variant="outline" className="bg-transparent border-gray-300 text-gray-900 hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-none px-6 py-3 text-sm font-medium transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-12">
              The best results don't come from <span className="text-bayes-yellow">guesswork</span>. They come from a <span className="text-bayes-yellow">proven process</span>.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
              We start with research and strategy, shape it into a strong creative direction, and deliver intelligence systems that align with your goals. Simple, effective, and always tailored to your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solutions/services">
                <Button variant="outline" className="bg-transparent border-gray-300 text-gray-900 hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-none px-6 py-3 text-sm font-medium transition-colors">
                  Discover Our Methodology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-12">
              We are a <span className="text-bayes-yellow">full-service intelligence agency</span> specializing in AI-powered analytics, data processing, and business intelligence for ambitious businesses.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
              Our services are built to give your business everything it needs to stand out, connect with data, and grow. From complete data transformations to digital products, we combine creativity and strategy to deliver systems that perform in the real world.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-6">Expertise:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>AI-Powered Analytics</li>
                  <li>Data Strategy</li>
                  <li>Business Intelligence</li>
                  <li>Dashboard Design</li>
                  <li>Data Processing</li>
                  <li>Survey Analysis</li>
                  <li>Development</li>
                  <li>System Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-bayes-yellow uppercase tracking-wider mb-6">Fields:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Financial Services</li>
                  <li>Brands</li>
                  <li>Technology</li>
                  <li>Pharmaceutical</li>
                  <li>Charities</li>
                  <li>Startups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-background text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-16">
              Evidence Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Testimonial Card 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-lg text-white/80 leading-relaxed mb-6 font-light">
                  "The team at Bayes Price have been instrumental at getting to the insight in our data. Beyond data processing, the team are very skilled at visualisations, automations and integration of more complex algorithms and segmentations into our data."
                </p>
                <div className="space-y-1">
                  <div className="font-semibold text-bayes-yellow">John-William Awbrey</div>
                  <div className="text-white/60 text-sm">Head of Brand & Campaign Insights</div>
                  <div className="text-white/60 text-sm">Sky Central</div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-lg text-white/80 leading-relaxed mb-6 font-light">
                  "Bayes Price are a regular partner in providing quantitative research. It's important for us that they have similar ethics and dedication to quality, and work in similar ways. They're quick, efficient, great at problem-solving, and reliably get things done."
                </p>
                <div className="space-y-1">
                  <div className="font-semibold text-bayes-yellow">Jeremy Rix</div>
                  <div className="text-white/60 text-sm">Managing Director</div>
                  <div className="text-white/60 text-sm">OKO</div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="font-semibold mb-4 text-bayes-yellow">MRS Award Winner:</div>
                <p className="text-lg text-white/80 leading-relaxed mb-6 font-light">
                  "An excellent solution. The integrated approach to merging data, simplifying communication, delivering interactive results, and automating all these through a single scripting language should significantly reduce errors, turnaround time, and cost."
                </p>
                <div className="space-y-1">
                  <div className="font-semibold text-white">Judges - MRS/ASC Award</div>
                  <div className="text-white/60 text-sm">for Technology & Innovation</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/works">
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-full px-8 py-6 text-base font-medium transition-all">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 md:py-32 bg-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-16">
              Award-Winning Technology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  MRS Technology & Innovation Award
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Recognized for integration, automation, and error reduction excellence. Judges praised our innovative approach to combining AI with traditional research methods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Insight250 Winner 2024
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Matt Gibbs honored for innovation in insight generation, recognizing leadership in transforming how businesses extract value from data.
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
              If your data feels <span className="text-bayes-yellow">disconnected</span>, your insights aren't pulling their weight, or you're simply ready to look more <span className="text-bayes-yellow">professional</span>, Bayes Price is here to help.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              Reach out today and you'll get a clear plan, honest advice, and a team that cares about the outcome as much as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-none px-8 py-6 text-base font-medium border-none">
                Book a Demo
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-gray-300 text-gray-900 hover:bg-bayes-yellow hover:text-bayes-blue hover:border-bayes-yellow rounded-none px-8 py-6 text-base font-medium">
                  Contact Us
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

export default Index;
