"use client"

import { TestimonialsColumn } from "@/components/ui/testimonials-columns"
import { InteractiveParticles } from "@/components/ui/interactive-particles"
import { motion } from "motion/react"
import { useLanguage } from "@/hooks/use-language"

const dentalTestimonials = [
    {
        text: "Dr. Smith and her team are amazing! My kids actually look forward to their dental appointments now. The pediatric care is exceptional.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
        name: "Sarah Johnson",
        role: "Parent of Two",
    },
    {
        text: "The cosmetic dentistry work exceeded my expectations. My smile transformation has boosted my confidence tremendously!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
        name: "Michael Chen",
        role: "Business Professional",
    },
    {
        text: "Best dental experience ever! The staff is friendly, the facility is modern, and the care is top-notch. Highly recommend!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        name: "Emily Rodriguez",
        role: "Marketing Manager",
    },
    {
        text: "Dr. Lee's expertise in dental implants is remarkable. The entire process was smooth and the results are perfect!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        name: "David Thompson",
        role: "Retired Teacher",
    },
    {
        text: "The emergency dental care I received was prompt and professional. They saved my tooth and my smile!",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
        name: "Lisa Martinez",
        role: "Nurse",
    },
    {
        text: "Outstanding orthodontic treatment! Dr. Johnson explained everything clearly and my teeth look amazing now.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
        name: "James Wilson",
        role: "Software Engineer",
    },
    {
        text: "The teeth whitening results are incredible! Professional service in a comfortable, welcoming environment.",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=faces",
        name: "Amanda Foster",
        role: "Real Estate Agent",
    },
    {
        text: "I was nervous about my root canal, but the team made me feel at ease. Painless procedure and excellent care!",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
        name: "Robert Garcia",
        role: "Accountant",
    },
    {
        text: "From routine cleanings to complex procedures, this clinic provides exceptional dental care. My whole family comes here!",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=faces",
        name: "Jennifer Lee",
        role: "Teacher",
    },
]

const firstColumn = dentalTestimonials.slice(0, 3)
const secondColumn = dentalTestimonials.slice(3, 6)
const thirdColumn = dentalTestimonials.slice(6, 9)

export function AnimatedTestimonials() {
    const { t } = useLanguage()

    return (
        <section className="bg-background py-20 relative overflow-hidden">
            {/* Interactive Particles Background - Repel Mode */}
            <div className="absolute inset-0">
                <InteractiveParticles
                    particleCount={60}
                    particleSize={2}
                    speed={0.4}
                    interactionRadius={200}
                    attractMode={false}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent z-0" />

            <div className="container z-10 mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >
                    <div className="flex justify-center">
                        <div className="border py-1 px-4 rounded-lg text-sm">
                            {t.testimonials.title}
                        </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
                        What Our Patients Say
                    </h2>
                    <p className="text-center mt-5 opacity-75">
                        {t.testimonials.subtitle}
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className="hidden md:block"
                        duration={19}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className="hidden lg:block"
                        duration={17}
                    />
                </div>
            </div>
        </section>
    )
}
