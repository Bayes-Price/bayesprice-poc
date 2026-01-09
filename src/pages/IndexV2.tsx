import { Link } from "react-router-dom"
import { ArrowRight, Zap, BarChart3, Shield, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import bayesPriceLogo from "@/assets/bayes-price-logo.svg"
import dashboardImage from "@/assets/image.png"
import platinumLogo from "@/assets/Platinum/platinumwhite3.png"
import rubyLogo from "@/assets/Ruby/rubywhite3.png"
import okoLogo from "@/assets/logos/oko.png"
import kantarLogo from "@/assets/logos/kantar.svg"
import ipsosLogo from "@/assets/logos/ipsos.svg"
import yougovLogo from "@/assets/logos/yougov.svg"

// Animated background particles
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = []
    const colors = ["#FFC000", "#00B2FF", "#FF544F", "#00B190", "#FCA6DE"]

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animationId: number
    const animate = () => {
      ctx.fillStyle = "rgba(51, 46, 51, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + "60"
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 192, 0, ${0.15 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

// Navigation for dark theme
const DarkNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-charcoal/95 backdrop-blur-md" : ""}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/v2" className="flex items-center gap-3">
          <img src={bayesPriceLogo} alt="Bayes Price" className="h-7 w-auto invert" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/solutions/platinum" className="text-white/70 hover:text-yellow transition-colors font-medium">
            Platinum
          </Link>
          <Link to="/solutions/ruby" className="text-white/70 hover:text-red transition-colors font-medium">
            Ruby
          </Link>
          <Link to="/about" className="text-white/70 hover:text-white transition-colors font-medium">
            About
          </Link>
          <Link
            to="/discovery"
            className="group relative px-6 py-3 font-semibold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow to-yellow/80 rounded-full transition-transform group-hover:scale-105" />
            <span className="relative text-charcoal flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

const IndexV2 = () => {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setHeroVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-charcoal text-white overflow-x-hidden">
      <DarkNavigation />

      {/* Hero Section - Asymmetric Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField />

        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-transparent" />

        {/* Geometric accent shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-32">
            {/* Left content - oversized typography */}
            <div className={`lg:col-span-6 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow/10 border border-yellow/30 rounded-full mb-8">
                <Zap className="h-4 w-4 text-yellow" />
                <span className="text-sm text-yellow font-medium">AI-Powered Data Intelligence</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
                <span className="block text-white">Data</span>
                <span className="block text-yellow">Clarity.</span>
                <span className="block text-white/60">Action.</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/60 max-w-lg mb-10 leading-relaxed">
                Transform mountains of survey data into actionable insights.
                <span className="text-yellow"> In minutes, not weeks.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/discovery"
                  className="group inline-flex items-center justify-center gap-3 bg-yellow text-charcoal px-8 py-4 font-bold text-lg transition-all hover:bg-yellow/90 hover:gap-4"
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-bold text-lg transition-all hover:border-white hover:bg-white/5"
                  style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)" }}
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Right content - overlapping dashboard preview */}
            <div className={`lg:col-span-6 relative transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
              <div className="relative">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow/20 via-blue/20 to-pink/20 rounded-2xl blur-2xl" />

                {/* Main dashboard image */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img src={dashboardImage} alt="Platform Dashboard" className="w-full" />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -left-8 top-1/4 bg-charcoal/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float">
                  <div className="text-3xl font-black text-yellow">98%</div>
                  <div className="text-xs text-white/60">Accuracy Rate</div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-charcoal/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float-delayed">
                  <div className="text-3xl font-black text-blue">10x</div>
                  <div className="text-xs text-white/60">Faster Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1718] to-transparent" />
      </section>

      {/* Trusted By - Horizontal scrolling */}
      <section className="py-16 bg-[#1a1718] border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-10">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { src: okoLogo, alt: "OKO", width: 80 },
              { src: kantarLogo, alt: "Kantar", width: 100 },
              { src: ipsosLogo, alt: "Ipsos", width: 90 },
              { src: yougovLogo, alt: "YouGov", width: 110 },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width, height: "auto" }}
                className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 invert"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Diagonal Split */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Two Products.
              <span className="text-yellow"> Infinite Possibilities.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Choose the solution that fits your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Platinum Card */}
            <Link
              to="/solutions/platinum"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 border border-blue/30 p-8 md:p-12 transition-all hover:border-blue hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl group-hover:bg-blue/20 transition-colors" />

              <img src={platinumLogo} alt="Platinum" className="h-12 mb-8 relative z-10" />

              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Cloud Platform</h3>
              <p className="text-white/60 mb-8 text-lg relative z-10">
                AI-powered analytics with interactive dashboards, automated processing, and real-time collaboration.
              </p>

              <ul className="space-y-3 mb-8 relative z-10">
                {["Interactive dashboards", "Team collaboration", "AI-powered insights", "Automated workflows"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="w-2 h-2 bg-blue rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-blue font-bold group-hover:gap-4 transition-all relative z-10">
                Explore Platinum <ArrowRight className="h-5 w-5" />
              </span>
            </Link>

            {/* Ruby Card */}
            <Link
              to="/solutions/ruby"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red/20 to-red/5 border border-red/30 p-8 md:p-12 transition-all hover:border-red hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red/10 rounded-full blur-3xl group-hover:bg-red/20 transition-colors" />

              <img src={rubyLogo} alt="Ruby" className="h-12 mb-8 relative z-10" />

              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Desktop Power</h3>
              <p className="text-white/60 mb-8 text-lg relative z-10">
                Professional-grade survey data processing with SPSS integration and powerful scripting.
              </p>

              <ul className="space-y-3 mb-8 relative z-10">
                {["SPSS integration", "Advanced scripting", "Local data control", "Batch processing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="w-2 h-2 bg-red rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-red font-bold group-hover:gap-4 transition-all relative z-10">
                Explore Ruby <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#1a1718]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Process millions of data points in seconds", color: "yellow" },
              { icon: BarChart3, title: "Deep Analytics", desc: "AI-powered pattern recognition and insights", color: "blue" },
              { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and compliance", color: "green" },
              { icon: Users, title: "Team Collaboration", desc: "Real-time sharing and version control", color: "pink" },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <feature.icon className={`h-10 w-10 mb-6 text-${feature.color}`} />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Full width dramatic */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow/5 via-transparent to-blue/5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-10">
              "The team at Bayes Price have been{" "}
              <span className="text-yellow">instrumental</span> at getting to the insight in our data."
            </blockquote>
            <div>
              <p className="text-xl font-semibold text-white">John-William Awbrey</p>
              <p className="text-white/50">Head of Brand Insights, Sky</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow via-yellow/90 to-yellow/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzMzMkUzMyIgZmlsbC1vcGFjaXR5PSIwLjA1IiBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-50" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-6">
            Ready to transform your data?
          </h2>
          <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of research teams already using Bayes Price to unlock insights faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/discovery"
              className="inline-flex items-center justify-center gap-3 bg-charcoal text-white px-10 py-5 font-bold text-lg rounded-full hover:bg-charcoal/90 transition-all hover:gap-4"
            >
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={bayesPriceLogo} alt="Bayes Price" className="h-6 w-auto invert opacity-60" />
            <div className="flex gap-8 text-white/40 text-sm">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/news" className="hover:text-white transition-colors">News</Link>
            </div>
            <p className="text-white/30 text-sm">© 2024 Bayes Price. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  )
}

export default IndexV2
