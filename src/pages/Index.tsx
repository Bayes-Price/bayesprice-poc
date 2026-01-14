import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InsightsAnimation from "@/components/InsightsAnimation";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowRight } from "lucide-react";
import platinumLogo from "@/assets/Platinum/platinumblue3.png";
import rubyLogo from "@/assets/Ruby/rubyred3.png";
import skyLogo from "/images/Sky.png";
import okoLogo from "@/assets/logos/oko.png";
import beatgridLogo from "@/assets/logos/beatgrid.svg";
import mrsLogo from "@/assets/logos/mrs.svg";
import channel4Logo from "@/assets/logos/channel4.png";
import globalDataLogo from "@/assets/logos/globaldata.png";
import intentBasedLeadershipLogo from "@/assets/logos/intent-based-leadership.webp";
import fansTrackLogo from "@/assets/logos/fanstrack.png";
import ascLogo from "@/assets/logos/ASClogo.png";
import gdqLogo from "@/assets/logos/GDQ_LOGO_3.jpg";
import icgLogo from "@/assets/logos/icg_logo.png";
import trsLogo from "@/assets/logos/TRS.png";
import tsapiMainLogo from "@/assets/logos/tsapi main logo black.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-8 relative z-0">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-charcoal leading-[1.1] mb-6">
              Transform complex data into{" "}
              <span className="text-yellow">clarity and action</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/60 mb-8 max-w-2xl mx-auto">
              Advanced solutions for decision-makers who need to navigate
              data effectively. From raw data to actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/discovery"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-3 rounded-full font-medium hover:bg-charcoal/90 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 text-charcoal px-6 py-3 rounded-full font-medium border border-charcoal/20 hover:border-charcoal/40 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Dashboard Video */}
          <div className="mt-16 mb-[-60px] max-w-5xl mx-auto">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              >
                <source src="/videos/platinum-intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="pt-12 pb-12 border-y border-gray-100 relative z-10 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-sm text-charcoal/40 text-center mb-8">Trusted by leading teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Client Logos */}
            <img
              src={skyLogo}
              alt="Sky"
              className="h-10 w-auto"
            />
            <img
              src={okoLogo}
              alt="OKO"
              style={{ width: 90, height: 'auto' }}
            />
            {/* Logo with dark background for white logo */}
            <div className="bg-charcoal rounded-md px-3 py-2">
              <img src={beatgridLogo} alt="Beat Grid" className="h-6 w-auto" />
            </div>
            <img src={globalDataLogo} alt="Global Data" className="h-8 w-auto object-contain" />
            <img src={channel4Logo} alt="Channel 4" className="h-10 w-auto max-w-[140px]" />
            <img src={intentBasedLeadershipLogo} alt="Intent Based Leadership" className="h-10 w-auto max-w-[140px]" />
            <img src={fansTrackLogo} alt="Fans Track" className="h-10 w-auto max-w-[140px]" />
          </div>
          {/* Industry Bodies */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-charcoal/40 text-center mb-8">Industry associations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img src={mrsLogo} alt="Market Research Society" className="h-12 w-auto" />
              <img src={tsapiMainLogo} alt="TSAPI" className="h-12 w-auto" />
              <img src={ascLogo} alt="ASC" className="h-12 w-auto" />
              <img src={gdqLogo} alt="GDQ" className="h-12 w-auto" />
              <img src={icgLogo} alt="ICG" className="h-12 w-auto" />
              <img src={trsLogo} alt="TRS" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Data to Insights Animation - hidden until story is refined */}
      <div className="hidden">
        <InsightsAnimation />
      </div>

      {/* What We Do */}
      <section className="py-24 md:py-32 relative z-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Two powerful solutions
            </h2>
            <p className="text-charcoal/60">
              Whether you need a cloud platform or desktop software, we have you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Platinum Card */}
            <Link
              to="/solutions/platinum"
              className="group p-8 bg-blue/5 border border-blue/20 rounded-2xl hover:border-blue/40 transition-colors"
            >
              <img src={platinumLogo} alt="Platinum" className="w-full mb-6" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Platinum Platform</h3>
              <p className="text-charcoal/60 mb-4">
                AI-powered cloud analytics. Interactive dashboards, automated processing,
                team collaboration.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-charcoal group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Ruby Card */}
            <Link
              to="/solutions/ruby"
              className="group p-8 bg-red/5 border border-red/20 rounded-2xl hover:border-red/40 transition-colors"
            >
              <img src={rubyLogo} alt="Ruby" className="w-full mb-6" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Ruby Desktop</h3>
              <p className="text-charcoal/60 mb-4">
                Professional survey data processing. SPSS integration, powerful scripting,
                local control.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-charcoal group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Client - Sky */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal text-center mb-12">
              What our clients say
            </h2>
            {/* Sky Logo */}
            <div className="flex justify-center mb-12">
              <img
                src={skyLogo}
                alt="Sky"
                className="h-24 md:h-32 w-auto"
              />
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Director Quote */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-yellow/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  We've worked closely with Bayes Price for several years. We are now excited to be working in close collaboration on developing the Platinum software which we believe addresses key challenges around speed to insight, maximising value of our data sources and improving accessibility of insight.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-charcoal font-medium">Director of Research</p>
                  <p className="text-charcoal/60 text-sm">Sky</p>
                </div>
              </div>

              {/* Head of Brand Quote */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-yellow/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  The team at Bayes Price have been instrumental at getting to the insight in our data. Beyond data processing, the team are very skilled at visualisations, automations and integration of complex algorithms and segmentations into our data.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-charcoal font-medium">Head of Brand & Campaign Insights</p>
                  <p className="text-charcoal/60 text-sm">Sky</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-yellow">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Ready to get started?
          </h2>
          <p className="text-charcoal/70 mb-8 max-w-lg mx-auto">
            Book a discovery call and see how Bayes Price can transform your data workflow.
          </p>
          <Link
            to="/discovery"
            className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full font-medium hover:bg-charcoal/90 transition-colors"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
