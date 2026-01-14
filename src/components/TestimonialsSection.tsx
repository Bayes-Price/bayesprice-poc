import RotatingTestimonials from "./RotatingTestimonials"

const testimonials = [
  {
    quote: "Bayes Price are a regular partner in providing quantitative research. It's important for us that they have similar ethics and dedication to quality, and work in similar ways. They're quick, efficient, great at problem-solving, and reliably get things done.",
    title: "Managing Director",
    company: "OKO"
  },
  {
    quote: "An excellent solution. The integrated approach to merging data, simplifying communication, delivering interactive results, and automating all these through a single scripting language should significantly reduce errors, turnaround time, and cost.",
    title: "Judges",
    company: "MRS/ASC Award for Technology & Innovation"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <RotatingTestimonials
          testimonials={testimonials}
          interval={5000}
        />
      </div>
    </section>
  )
}

export default TestimonialsSection
