"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ArrowRight } from "lucide-react"
import { DotScreenShader } from "@/components/ui/dot-shader-background"
import { InteractiveParticles } from "@/components/ui/interactive-particles"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
    const { theme } = useTheme()
    const { t } = useLanguage()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dot Shader Background */}
            <div className="absolute inset-0">
                <DotScreenShader />
            </div>

            {/* Interactive Particles Layer */}
            <InteractiveParticles
                particleCount={100}
                particleSize={2.5}
                speed={0.3}
                interactionRadius={180}
                attractMode={true}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <div className="animate-fade-in">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <span className="text-gradient">{t.hero.title}</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/appointment">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-tilt"></div>
                                <Button size="lg" className="relative group text-lg px-12 py-8 h-auto rounded-full bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-[45deg] animate-shimmer" style={{ transform: 'translateX(-150%)' }} />
                                    <span className="relative flex items-center gap-2 font-bold tracking-wide">
                                        {t.hero.cta}
                                        <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </div>
                        </Link>
                        <Link href="/services">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto rounded-full">
                                {t.hero.cta2}
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">20+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                        <div className="text-sm text-muted-foreground">Happy Patients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">4</div>
                        <div className="text-sm text-muted-foreground">Expert Dentists</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow" />
                </div>
            </div>
        </section>
    )
}
