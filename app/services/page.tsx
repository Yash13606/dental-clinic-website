"use client"

import { ServiceCard } from "@/components/service-card"
import { useLanguage } from "@/hooks/use-language"
import { services } from "@/lib/data"

export default function ServicesPage() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">{t.services.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t.services.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            features={service.features}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
