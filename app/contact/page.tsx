"use client"

import { DentalContactForm } from "@/components/dental-contact-form"
import { GoogleMap } from "@/components/google-map"
import { contactInfo } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

export default function ContactPage() {
    const { t } = useLanguage()

    const fullAddress = `${contactInfo.address}, ${contactInfo.city}`

    return (
        <div className="min-h-screen">
            {/* Contact Form Section */}
            <DentalContactForm
                title={t.contact.title}
                description={t.contact.subtitle}
                phone={contactInfo.phone}
                email={contactInfo.email}
                address={fullAddress}
                hours={`${contactInfo.hours.weekdays} | ${contactInfo.hours.saturday} | ${contactInfo.hours.sunday}`}
            />

            {/* Map Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Visit Our Clinic</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Conveniently located in the heart of the city. We look forward to welcoming you!
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-border/50 h-[500px]">
                        <GoogleMap address={fullAddress} zoom={15} />
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                            Get Directions →
                        </a>
                    </div>
                </div>
            </section>

            {/* Emergency Contact Banner */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">Dental Emergency?</h3>
                    <p className="text-lg mb-6 opacity-90">
                        We offer emergency dental services. Call us immediately if you're experiencing severe pain or trauma.
                    </p>
                    <a
                        href={`tel:${contactInfo.emergencyPhone}`}
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg"
                    >
                        📞 {contactInfo.emergencyPhone}
                    </a>
                </div>
            </section>
        </div>
    )
}
