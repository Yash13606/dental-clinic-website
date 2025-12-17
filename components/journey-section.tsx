"use client"

import { Calendar, FileText, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { InteractiveParticles } from "@/components/ui/interactive-particles"
import { useLanguage } from "@/hooks/use-language"

const journeySteps = [
    {
        icon: Calendar,
        title: "Initial Consultation",
        description: "Meet with our team to discuss your goals and assess your needs",
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
    },
    {
        icon: FileText,
        title: "Personalized Plan",
        description: "Create a customized treatment plan tailored to your smile goals",
        color: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
    },
    {
        icon: Zap,
        title: "Expert Treatment",
        description: "Experience world-class care with advanced technology and technique",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
    },
    {
        icon: CheckCircle,
        title: "Ongoing Care",
        description: "Maintain your beautiful smile with continued support and guidance",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-500",
    },
]

export function JourneySection() {
    const { language } = useLanguage()

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
            {/* Interactive Particles Background */}
            <div className="absolute inset-0">
                <InteractiveParticles
                    particleCount={50}
                    particleSize={2}
                    speed={0.2}
                    interactionRadius={150}
                    attractMode={true}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {language === "en" ? "Your Journey to a Perfect Smile" : "Su Camino Hacia una Sonrisa Perfecta"}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {language === "en"
                            ? "We guide you through every step of your dental care journey"
                            : "Le guiamos en cada paso de su viaje de cuidado dental"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connection Lines - Hidden on mobile */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    {journeySteps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <Card
                                key={index}
                                className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
                            >
                                <CardContent className="pt-6 text-center">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-10 h-10 ${step.iconColor}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-muted-foreground mb-4">
                        {language === "en"
                            ? "Ready to start your journey?"
                            : "¿Listo para comenzar su viaje?"}
                    </p>
                </div>
            </div>
        </section>
    )
}
