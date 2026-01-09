import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const News = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              We share ideas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Latest updates, insights, and thoughts from the team at Bayes Price.
            </p>
          </div>
        </div>
      </section>

      {/* LinkedIn Feed Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* LinkedIn Embed Container */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-gray-200 p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mx-auto mb-6">
                <Linkedin className="text-[#0A66C2]" size={32} />
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Follow us on LinkedIn
              </h2>

              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Stay up to date with the latest news, insights, and updates from Bayes Price.
                Follow our company page for industry trends, product updates, and more.
              </p>

              {/* LinkedIn Page Plugin - Uncomment when ready to embed */}
              {/*
              <div className="mb-8">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:company:bayesprice"
                  height="600"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Embedded LinkedIn post"
                  className="rounded-lg"
                />
              </div>
              */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="coral" className="rounded-lg px-8 py-6 text-base font-medium" asChild>
                  <a
                    href="https://www.linkedin.com/company/bayes-price/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Follow Bayes Price
                  </a>
                </Button>
                <Button size="lg" variant="coral-outline" className="rounded-lg px-8 py-6 text-base font-medium" asChild>
                  <a
                    href="https://www.linkedin.com/company/bayes-price/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View All Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Recent Highlights - Optional static section */}
            <div className="mt-16">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-8 text-center">
                Recent Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-coral transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Company News</div>
                  <p className="text-foreground font-medium">
                    MRS Technology & Innovation Award Winner
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-coral transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Recognition</div>
                  <p className="text-foreground font-medium">
                    Insight250 Winner 2024
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-coral transition-colors">
                  <div className="text-sm text-muted-foreground mb-2">Product Update</div>
                  <p className="text-foreground font-medium">
                    Platinum AI Platform Launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default News
