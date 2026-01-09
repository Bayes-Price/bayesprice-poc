import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Finta Style with Gradient Background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Centered Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Tell us about your brand
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We'd love to hear from you. Let's discuss how we can help transform your data into actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24 bg-white">
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
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Email</h3>
                      <a
                        href="mailto:hello@bayesprice.com"
                        className="text-xl font-normal text-foreground hover:text-coral transition-colors"
                      >
                        hello@bayesprice.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Office</h3>
                      <p className="text-xl font-normal text-foreground leading-relaxed">
                        123 Innovation Drive,<br />
                        London, UK
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">Socials</h3>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="text-base text-foreground hover:text-coral transition-colors flex items-center gap-2"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="#"
                          className="text-base text-foreground hover:text-coral transition-colors flex items-center gap-2"
                        >
                          Twitter
                        </a>
                        <a
                          href="#"
                          className="text-base text-foreground hover:text-coral transition-colors flex items-center gap-2"
                        >
                          Instagram
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
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-charcoal">
                      What's your name?
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-charcoal">
                      What's your email?
                    </label>
                    <Input
                      id="email"
                      type="email"
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
                      placeholder="e.g. Platinum Platform, Consultancy..."
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-charcoal">
                      Tell us about your project
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Hello, I'm looking for..."
                      className="bg-white border-gray-200 focus-visible:ring-coral focus-visible:border-coral min-h-[150px] text-base resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="w-full bg-coral hover:bg-coral/90 text-white rounded-lg px-8 py-6 text-base font-medium transition-all"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-normal text-foreground mb-4">
              Ready to transform your data?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join hundreds of researchers and businesses who trust Bayes Price with their intelligence needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
