"use client"

import { TestimonialCard } from "@/components/testimonial-card"
import { useLanguage } from "@/hooks/use-language"
import { testimonials } from "@/lib/data"

export default function TestimonialsPage() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">{t.testimonials.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t.testimonials.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            rating={testimonial.rating}
                            text={testimonial.text}
                            service={testimonial.service}
                            date={testimonial.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
