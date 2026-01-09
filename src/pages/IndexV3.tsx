import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight, Circle } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import bayesPriceLogo from "@/assets/bayes-price-logo.svg"
import dashboardImage from "@/assets/image.png"
import platinumLogo from "@/assets/Platinum/platinumcharcoal3.png"
import rubyLogo from "@/assets/Ruby/rubyCharcoal3.png"

// Minimal navigation
const EditorialNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-charcoal/5" : ""}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-24">
          <Link to="/v3">
            <img src={bayesPriceLogo} alt="Bayes Price" className="h-6 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link to="/solutions/platinum" className="text-charcoal/50 hover:text-charcoal transition-colors text-sm tracking-wide">
              Platinum
            </Link>
            <Link to="/solutions/ruby" className="text-charcoal/50 hover:text-charcoal transition-colors text-sm tracking-wide">
              Ruby
            </Link>
            <Link to="/about" className="text-charcoal/50 hover:text-charcoal transition-colors text-sm tracking-wide">
              About
            </Link>
            <Link
              to="/discovery"
              className="text-sm tracking-wide border-b-2 border-charcoal pb-1 hover:pb-2 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Animated line component
const AnimatedLine = ({ delay = 0 }: { delay?: number }) => {
  const [width, setWidth] = useState(0)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(100), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (lineRef.current) observer.observe(lineRef.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={lineRef} className="h-px bg-charcoal/10 overflow-hidden">
      <div
        className="h-full bg-charcoal/40 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

const IndexV3 = () => {
  const [heroRevealed, setHeroRevealed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroRevealed(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-charcoal selection:bg-yellow selection:text-charcoal">
      <EditorialNav />

      {/* Hero Section - Editorial Typography */}
      <section className="min-h-screen flex flex-col justify-center pt-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left - Typography */}
            <div className="lg:col-span-7">
              <div className={`transition-all duration-1000 ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <p className="text-sm tracking-[0.3em] text-charcoal/40 uppercase mb-8">
                  Data Intelligence Platform
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
                  Transform <br />
                  <span className="italic text-charcoal/30">complexity</span> <br />
                  into clarity
                </h1>

                <div className="max-w-md">
                  <p className="text-lg text-charcoal/60 leading-relaxed mb-12">
                    We help research teams turn vast datasets into actionable insights through elegant,
                    AI-powered analytics solutions.
                  </p>

                  <div className="flex items-center gap-8">
                    <Link
                      to="/discovery"
                      className="group inline-flex items-center gap-4 text-lg"
                    >
                      <span className="border-b border-charcoal pb-1 group-hover:pb-2 transition-all">
                        Book a consultation
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Minimal visual */}
            <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="relative">
                {/* Subtle frame */}
                <div className="absolute -inset-4 border border-charcoal/5 rounded-sm" />
                <div className="absolute -inset-8 border border-charcoal/5 rounded-sm" />

                <div className="relative bg-white p-2 shadow-sm">
                  <img
                    src={dashboardImage}
                    alt="Platform"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Floating caption */}
                <div className="absolute -bottom-12 -right-4 md:right-0">
                  <p className="text-xs text-charcoal/30 tracking-widest uppercase">
                    Platinum Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-auto pb-12 flex justify-center">
          <div className="flex flex-col items-center gap-3 text-charcoal/30">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-charcoal/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Clients - Minimal */}
      <section className="py-24 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="text-xs tracking-[0.3em] text-charcoal/30 uppercase">
              Trusted by
            </p>
            <div className="flex flex-wrap items-center gap-12 md:gap-16 text-charcoal/20">
              <span className="text-lg font-serif italic">Sky</span>
              <span className="text-lg font-serif italic">Kantar</span>
              <span className="text-lg font-serif italic">Ipsos</span>
              <span className="text-lg font-serif italic">YouGov</span>
              <span className="text-lg font-serif italic">OKO</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] text-charcoal/30 uppercase mb-4">
                About
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Built for research professionals
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-8">
                <p className="text-xl text-charcoal/70 leading-relaxed">
                  For over two decades, we've partnered with the world's leading research
                  organizations to solve their most complex data challenges.
                </p>
                <p className="text-lg text-charcoal/50 leading-relaxed">
                  Our tools are designed by researchers, for researchers—combining deep
                  industry expertise with cutting-edge AI technology to deliver insights
                  that matter.
                </p>
                <AnimatedLine delay={200} />
                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="font-serif text-4xl text-charcoal mb-1">25+</p>
                    <p className="text-xs text-charcoal/40 tracking-wide uppercase">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl text-charcoal mb-1">500+</p>
                    <p className="text-xs text-charcoal/40 tracking-wide uppercase">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl text-charcoal mb-1">98%</p>
                    <p className="text-xs text-charcoal/40 tracking-wide uppercase">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products - Card Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] text-charcoal/30 uppercase mb-4">
              Solutions
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Two platforms, <br />
              <span className="italic text-charcoal/30">one vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-charcoal/10">
            {/* Platinum */}
            <Link
              to="/solutions/platinum"
              className="group bg-[#FAFAF9] p-12 md:p-16 transition-colors hover:bg-white"
            >
              <div className="flex items-start justify-between mb-16">
                <img src={platinumLogo} alt="Platinum" className="h-8" />
                <ArrowUpRight className="h-5 w-5 text-charcoal/20 group-hover:text-charcoal transition-colors" />
              </div>

              <h3 className="font-serif text-3xl mb-4">Platinum</h3>
              <p className="text-charcoal/50 mb-8 leading-relaxed">
                Cloud-native analytics platform with AI-powered insights,
                interactive dashboards, and seamless team collaboration.
              </p>

              <AnimatedLine delay={100} />

              <ul className="mt-8 space-y-3 text-sm text-charcoal/60">
                <li className="flex items-center gap-3">
                  <Circle className="h-1.5 w-1.5 fill-blue text-blue" />
                  Interactive dashboards
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-1.5 w-1.5 fill-blue text-blue" />
                  AI-powered analysis
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-1.5 w-1.5 fill-blue text-blue" />
                  Real-time collaboration
                </li>
              </ul>
            </Link>

            {/* Ruby */}
            <Link
              to="/solutions/ruby"
              className="group bg-[#FAFAF9] p-12 md:p-16 transition-colors hover:bg-white"
            >
              <div className="flex items-start justify-between mb-16">
                <img src={rubyLogo} alt="Ruby" className="h-8" />
                <ArrowUpRight className="h-5 w-5 text-charcoal/20 group-hover:text-charcoal transition-colors" />
              </div>

              <h3 className="font-serif text-3xl mb-4">Ruby</h3>
              <p className="text-charcoal/50 mb-8 leading-relaxed">
                Professional desktop software for survey data processing
                with SPSS integration and advanced scripting capabilities.
              </p>

              <AnimatedLine delay={300} />

              <ul className="mt-8 space-y-3 text-sm text-charcoal/60">
                <li className="flex items-center gap-3">
                  <Circle className="h-1.5 w-1.5 fill-red text-red" />
                  SPSS integration
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-1.5 w-1.5 fill-red text-red" />
                  Powerful scripting
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-1.5 w-1.5 fill-red text-red" />
                  Local data control
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial - Large Quote */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="font-serif text-8xl text-charcoal/10 leading-none">"</span>
            </div>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-charcoal/80 mb-12 -mt-16">
              The team at Bayes Price have been instrumental at getting to the
              insight in our data. Beyond processing, they're skilled at visualisations.
            </blockquote>
            <AnimatedLine delay={200} />
            <div className="flex items-center gap-6 mt-8">
              <div>
                <p className="font-medium">John-William Awbrey</p>
                <p className="text-sm text-charcoal/40">Head of Brand Insights, Sky</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] text-charcoal/30 uppercase mb-4">
                Process
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                From data to decision
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-12">
                {[
                  { num: "01", title: "Ingest", desc: "Connect your data sources—surveys, databases, spreadsheets—into a unified pipeline." },
                  { num: "02", title: "Process", desc: "Automated cleaning, weighting, and validation with human-in-the-loop oversight." },
                  { num: "03", title: "Analyze", desc: "AI-powered pattern recognition surfaces insights you might have missed." },
                  { num: "04", title: "Deliver", desc: "Beautiful, interactive reports that tell your data's story clearly." },
                ].map((step, i) => (
                  <div key={step.num} className="group">
                    <AnimatedLine delay={i * 100} />
                    <div className="grid grid-cols-12 gap-8 pt-8">
                      <div className="col-span-2">
                        <span className="text-xs text-charcoal/20 tracking-widest">{step.num}</span>
                      </div>
                      <div className="col-span-10">
                        <h3 className="font-serif text-2xl mb-2 group-hover:text-charcoal/70 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-charcoal/50">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Ready to begin?
          </h2>
          <p className="text-lg text-charcoal/50 max-w-lg mx-auto mb-12">
            Schedule a consultation and discover how we can help
            transform your data workflow.
          </p>
          <Link
            to="/discovery"
            className="group inline-flex items-center gap-4"
          >
            <span className="relative bg-charcoal text-white px-12 py-5 text-lg transition-all group-hover:bg-charcoal/90">
              Book a discovery call
            </span>
            <span className="w-14 h-14 border border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-16 border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <img src={bayesPriceLogo} alt="Bayes Price" className="h-5 w-auto opacity-40 mb-6" />
              <p className="text-sm text-charcoal/30">
                Transforming complex data into clarity since 1999.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <p className="text-xs tracking-widest text-charcoal/30 uppercase mb-4">Products</p>
              <ul className="space-y-3 text-sm text-charcoal/50">
                <li><Link to="/solutions/platinum" className="hover:text-charcoal transition-colors">Platinum</Link></li>
                <li><Link to="/solutions/ruby" className="hover:text-charcoal transition-colors">Ruby</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-xs tracking-widest text-charcoal/30 uppercase mb-4">Company</p>
              <ul className="space-y-3 text-sm text-charcoal/50">
                <li><Link to="/about" className="hover:text-charcoal transition-colors">About</Link></li>
                <li><Link to="/news" className="hover:text-charcoal transition-colors">News</Link></li>
                <li><Link to="/contact" className="hover:text-charcoal transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-xs tracking-widest text-charcoal/30 uppercase mb-4">Connect</p>
              <ul className="space-y-3 text-sm text-charcoal/50">
                <li><a href="#" className="hover:text-charcoal transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-charcoal transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <AnimatedLine delay={500} />

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal/30">
            <p>© 2024 Bayes Price. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-charcoal transition-colors">Privacy</a>
              <a href="#" className="hover:text-charcoal transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
      `}</style>
    </div>
  )
}

export default IndexV3
