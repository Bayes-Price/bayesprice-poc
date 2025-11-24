import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
    {
        id: 1,
        title: "The Future of AI in Business Intelligence",
        category: "AI & Tech",
        date: "Nov 20, 2025",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 2,
        title: "Understanding Consumer Behavior Through Data",
        category: "Insights",
        date: "Nov 15, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 3,
        title: "Bayes Price Wins Innovation Award",
        category: "Company News",
        date: "Nov 10, 2025",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 4,
        title: "Optimizing Your Data Strategy for 2026",
        category: "Strategy",
        date: "Nov 05, 2025",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 5,
        title: "The Role of Automation in Market Research",
        category: "Automation",
        date: "Oct 28, 2025",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 6,
        title: "Case Study: Retail Giant Boosts Sales by 20%",
        category: "Case Studies",
        date: "Oct 20, 2025",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
        link: "#"
    }
];

const News = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="container mx-auto px-6 lg:px-8 pt-32 pb-24">
                {/* Hero Section */}
                <div className="mb-24 animate-fade-in-up">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                        We share <br />
                        <span className="text-bayes-yellow">ideas...</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-md leading-relaxed">
                        Latest updates, insights, and thoughts from the team at Bayes Price.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {articles.map((article, index) => (
                        <Link
                            key={article.id}
                            to={article.link}
                            className="group block animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-white/5">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-bayes-blue/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {article.category}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="text-sm text-white/40">{article.date}</div>
                                <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-bayes-yellow transition-colors">
                                    {article.title}
                                </h3>
                                <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-bayes-yellow transition-colors mt-4">
                                    Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default News;
