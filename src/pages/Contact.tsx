import { useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const API_BASE_URL = import.meta.env.VITE_API_URL || ''

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit form')
      }

      toast({
        title: "Message sent!",
        description: "Thank you for getting in touch. We'll respond within 24 hours.",
      })

      setFormData({ name: "", email: "", service: "", message: "" })
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Contact Content Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column: Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-normal text-foreground mb-8">
                    Get in touch
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're a research agency, in-house team, or growing business, we're here to help you unlock the power of your data.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-yellow" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Email</h3>
                      <a
                        href="mailto:info@bayesprice.com"
                        className="text-xl font-normal text-foreground hover:text-yellow transition-colors"
                      >
                        info@bayesprice.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Phone</h3>
                      <a
                        href="tel:01172510523"
                        className="text-xl font-normal text-foreground hover:text-blue transition-colors"
                      >
                        0117 251 0523
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-red" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Office</h3>
                      <p className="text-xl font-normal text-foreground leading-relaxed">
                        127-131 Raleigh Road,<br />
                        Southville, Bristol, BS3 1QU
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-green" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Socials</h3>
                      <div className="flex gap-4">
                        <a
                          href="https://www.linkedin.com/company/bayesprice"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-foreground hover:text-green transition-colors flex items-center gap-2"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="bg-secondary/30 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-heading font-normal text-foreground mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-charcoal">
                      What's your name? *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-charcoal">
                      What's your email? *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-charcoal">
                      What service are you interested in?
                    </label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="e.g. Platinum Platform, Consultancy..."
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-charcoal">
                      Tell us about your project *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello, I'm looking for..."
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral min-h-[150px] text-base resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-coral hover:bg-coral/90 text-white rounded-lg px-8 py-6 text-base font-medium transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
