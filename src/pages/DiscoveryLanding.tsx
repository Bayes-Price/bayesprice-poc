import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Database, Users, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitDiscoveryForm } from "@/lib/formHandler";

const DiscoveryLanding = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const scrollToForm = () => {
        document.getElementById("discovery-form")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await submitDiscoveryForm(formData);

            if (response.success) {
                toast({
                    title: "Discovery session requested!",
                    description: "Thank you for your interest. Check your email for confirmation and we'll be in touch within 24 hours.",
                });

                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                throw new Error(response.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section - Finta Style */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
                            Transform Your Data Into{" "}
                            <span className="text-yellow">Actionable Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                            Book a free discovery session to explore how our solutions can revolutionise your business intelligence. We'll listen, learn, and share knowledge.
                        </p>
                        <Button
                            size="lg"
                            onClick={scrollToForm}
                            className="bg-green hover:bg-green/90 text-white rounded-full px-8 py-6 text-base font-medium transition-all"
                        >
                            Book Your Discovery Session
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                                Why <span className="text-blue">Bayes Price</span>?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                We combine deep research expertise with cutting-edge AI technology to deliver
                                business intelligence that drives real results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-6 w-6 text-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-2">Human Insights. AI-Powered.</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Unlock value, automate analysis, uncover hidden patterns, and generate
                                            insights across data silos.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-6 w-6 text-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-2">Transform Weeks Into Minutes</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Our automation reduces analysis time, giving you instant insights
                                            when you need them most.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-6 w-6 text-red" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-2">Expert Human Insight</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Experienced analysts guide the methodology ensuring reliable,
                                            actionable insights.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-6 w-6 text-green" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground mb-2">Award-Winning Solutions</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Trusted by leading organisations and recognised for innovation in
                                            data analytics and business intelligence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials - Sky */}
            <section className="py-24 md:py-32 bg-secondary/30">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Sky Logo */}
                        <div className="flex justify-center mb-12">
                            <img
                                src="/images/Sky.png"
                                alt="Sky"
                                className="h-32 md:h-40 object-contain"
                            />
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* First Quote */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <div className="mb-6">
                                    <svg className="h-10 w-10 text-yellow/60" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                                    We've worked closely with Bayes Price for several years. We are now excited to be working in close collaboration on developing the Platinum software which we believe addresses key challenges around speed to insight, maximising value of our data sources and improving accessibility of insight.
                                </blockquote>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-foreground font-medium">Director of Research</p>
                                </div>
                            </div>

                            {/* Second Quote */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <div className="mb-6">
                                    <svg className="h-10 w-10 text-yellow/60" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                                    The team at Bayes Price have been instrumental at getting to the insight in our data. Beyond data processing, the team are very skilled at visualisations, automations and integration of complex algorithms and segmentations into our data.
                                </blockquote>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-foreground font-medium">Head of Brand & Campaign Insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products & Services Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
                            Our Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Powerful tools and expert services designed to elevate your business intelligence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Platinum Solution */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue/30 transition-all group">
                            <div className="mb-6">
                                <Sparkles className="h-12 w-12 text-blue" />
                            </div>
                            <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-blue transition-colors">
                                Platinum
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                AI-driven automated analysis platform that transforms weeks of work into minutes. Get richer, faster insights from your data.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" />
                                    <span>Automated data processing</span>
                                </li>
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" />
                                    <span>Interactive dashboards</span>
                                </li>
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" />
                                    <span>AI-powered insights</span>
                                </li>
                            </ul>
                        </div>

                        {/* Ruby Solution */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-red/30 transition-all group">
                            <div className="mb-6">
                                <Database className="h-12 w-12 text-red" />
                            </div>
                            <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-red transition-colors">
                                Ruby
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Award winning desktop application for comprehensive survey data management. Combine intuitive GUI with powerful batch scripting.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-red flex-shrink-0 mt-0.5" />
                                    <span>Survey processing</span>
                                </li>
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-red flex-shrink-0 mt-0.5" />
                                    <span>Batch scripting</span>
                                </li>
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-red flex-shrink-0 mt-0.5" />
                                    <span>Data validation</span>
                                </li>
                            </ul>
                        </div>

                        {/* Professional Services */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-green/30 transition-all group">
                            <div className="mb-6">
                                <Users className="h-12 w-12 text-green" />
                            </div>
                            <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-green transition-colors">
                                Services
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Expert support from data connection to final delivery. Our team combines technical expertise with deep market research knowledge.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                                    <span>Data consulting</span>
                                </li>
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                                    <span>Custom development</span>
                                </li>
                                <li className="flex items-start gap-2 text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                                    <span>Training & support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discovery Session Form */}
            <section id="discovery-form" className="py-24 md:py-32 bg-gradient-to-b from-blue-50/30 to-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
                                Book Your Discovery Session
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Let's discuss how we can help transform your business intelligence
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Full Name *
                                </label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-white border-gray-300 text-foreground placeholder:text-muted-foreground focus-visible:border-blue focus-visible:ring-blue"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Email Address *
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-white border-gray-300 text-foreground placeholder:text-muted-foreground focus-visible:border-blue focus-visible:ring-blue"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-foreground">
                                    Company Name
                                </label>
                                <Input
                                    id="company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="bg-white border-gray-300 text-foreground placeholder:text-muted-foreground focus-visible:border-blue focus-visible:ring-blue"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Tell us about your needs
                                </label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-white border-gray-300 text-foreground placeholder:text-muted-foreground focus-visible:border-blue focus-visible:ring-blue min-h-32 resize-none"
                                    placeholder="What challenges are you facing? What are you looking to achieve?"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green hover:bg-green/90 text-white rounded-full py-6 text-lg font-medium transition-all"
                            >
                                {isSubmitting ? "Submitting..." : "Request Discovery Session"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DiscoveryLanding;
