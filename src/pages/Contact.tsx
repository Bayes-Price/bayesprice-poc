import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column: Text & Details */}
          <div className="space-y-16 animate-fade-in-up">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                Tell us about <br />
                <span className="text-bayes-yellow">your brand...</span>
              </h1>
              <p className="text-xl text-white/60 max-w-md leading-relaxed">
                We'd love to hear from you. Let's discuss how we can help transform your data into actionable intelligence.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-bayes-yellow uppercase tracking-wider">Email</h3>
                <a href="mailto:hello@bayesprice.com" className="text-2xl md:text-3xl font-light text-white hover:text-bayes-yellow transition-colors block">
                  hello@bayesprice.com
                </a>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-bayes-yellow uppercase tracking-wider">Office</h3>
                <p className="text-2xl md:text-3xl font-light leading-tight text-white">
                  123 Innovation Drive,<br />
                  London, UK
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-bayes-yellow uppercase tracking-wider">Socials</h3>
                <div className="flex gap-6">
                  <a href="#" className="text-lg text-white hover:text-bayes-yellow transition-colors border-b border-transparent hover:border-bayes-yellow">LinkedIn</a>
                  <a href="#" className="text-lg text-white hover:text-bayes-yellow transition-colors border-b border-transparent hover:border-bayes-yellow">Twitter</a>
                  <a href="#" className="text-lg text-white hover:text-bayes-yellow transition-colors border-b border-transparent hover:border-bayes-yellow">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:pt-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-12">
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-sm font-medium text-white/60 group-focus-within:text-bayes-yellow transition-colors">
                  What's your name?
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-xl focus-visible:ring-0 focus-visible:border-bayes-yellow placeholder:text-white/20 transition-colors h-auto text-white"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="email" className="text-sm font-medium text-white/60 group-focus-within:text-bayes-yellow transition-colors">
                  What's your email?
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-xl focus-visible:ring-0 focus-visible:border-bayes-yellow placeholder:text-white/20 transition-colors h-auto text-white"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="service" className="text-sm font-medium text-white/60 group-focus-within:text-bayes-yellow transition-colors">
                  What service are you interested in?
                </label>
                <Input
                  id="service"
                  placeholder="e.g. Platinum Platform, Consultancy..."
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-xl focus-visible:ring-0 focus-visible:border-bayes-yellow placeholder:text-white/20 transition-colors h-auto text-white"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-sm font-medium text-white/60 group-focus-within:text-bayes-yellow transition-colors">
                  Tell us about your project
                </label>
                <Textarea
                  id="message"
                  placeholder="Hello, I'm looking for..."
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-xl focus-visible:ring-0 focus-visible:border-bayes-yellow placeholder:text-white/20 transition-colors min-h-[150px] resize-none text-white"
                />
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full md:w-auto bg-bayes-yellow text-bayes-blue hover:bg-bayes-yellow-light rounded-none px-10 py-6 text-lg font-medium transition-all border-none">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
