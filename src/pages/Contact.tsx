import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to transform your business intelligence? Let's discuss how Bayes Price 
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Smith" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="john.smith@company.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+44 123 456 7890" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      I'm interested in *
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Platinum Platform</option>
                      <option>Ruby Desktop</option>
                      <option>Professional Services</option>
                      <option>Discovery Session</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your business intelligence needs..." 
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Information</h2>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                      <a 
                        href="mailto:info@bayesprice.com" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        info@bayesprice.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                      <a 
                        href="tel:+441234567890" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +44 (0) 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">LinkedIn</h3>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Our Locations</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-charcoal">London Office</h4>
                        <p className="text-muted-foreground text-sm">
                          London, United Kingdom
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-charcoal">Bristol Office</h4>
                        <p className="text-muted-foreground text-sm">
                          Bristol, United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    Book a Discovery Session
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a personalized demo to see how our AI-powered solutions 
                    can transform your business intelligence workflow.
                  </p>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Schedule Discovery Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
