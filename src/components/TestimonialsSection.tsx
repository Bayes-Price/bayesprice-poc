import RotatingTestimonials from "./RotatingTestimonials"

const testimonials = [
  {
    quote: "The team at Bayes Price have been instrumental at getting to the insight in our data. Beyond data processing, the team are very skilled at visualisations, automations and integration of more complex algorithms and segmentations into our data.",
    title: "Head of Brand & Campaign Insights",
    company: "Sky Central"
  },
  {
    quote: "Bayes Price are a regular partner in providing quantitative research. It's important for us that they have similar ethics and dedication to quality, and work in similar ways. They're quick, efficient, great at problem-solving, and reliably get things done.",
    title: "Managing Director",
    company: "OKO"
  },
  {
    quote: "An excellent solution. The integrated approach to merging data, simplifying communication, delivering interactive results, and automating all these through a single scripting language should significantly reduce errors, turnaround time, and cost.",
    title: "Judges",
    company: "MRS/ASC Award for Technology & Innovation"
  },
  {
    quote: "We massively appreciate the stellar work you have done for us this year. Your proactivity, sound and considered recommendations, and quick-responses have acted as continuous reminders of how grateful we are to have you as our partners. We really value your expertise, support and advice.",
    title: "Research Team",
    company: "Sky Ireland"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-16">
          What our clients say
        </h2>

        <RotatingTestimonials
          testimonials={testimonials}
          interval={5000}
        />
      </div>
    </section>
  )
}

export default TestimonialsSection
