import { useState, useEffect } from "react"

interface Testimonial {
  quote: string
  title: string
  company: string
}

interface RotatingTestimonialsProps {
  testimonials: Testimonial[]
  interval?: number
}

const RotatingTestimonials = ({ testimonials, interval = 5000 }: RotatingTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return

    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [isPaused, testimonials.length, interval])

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  const current = testimonials[currentIndex]

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-2xl mx-auto text-center min-h-[200px] flex flex-col justify-center">
        <div
          className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
        >
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            "{current.quote}"
          </p>
          <div>
            <p className="text-white font-medium">{current.title}</p>
            <p className="text-white/50 text-sm">{current.company}</p>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default RotatingTestimonials
