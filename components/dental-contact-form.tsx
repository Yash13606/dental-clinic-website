"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InteractiveParticles } from "@/components/ui/interactive-particles"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

interface DentalContactFormProps {
    title?: string
    description?: string
    phone?: string
    email?: string
    address?: string
    hours?: string
}

export const DentalContactForm = ({
    title = "Get in Touch",
    description = "We're here to answer your questions and schedule your next appointment. Reach out to us today!",
    phone = "(555) 123-4567",
    email = "info@dentalcare.com",
    address = "123 Dental Street, Suite 100, San Francisco, CA 94102",
    hours = "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
}: DentalContactFormProps) => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Interactive Particles Background */}
            <div className="absolute inset-0">
                <InteractiveParticles
                    particleCount={60}
                    particleSize={2}
                    speed={0.3}
                    interactionRadius={160}
                    attractMode={true}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />

            <div className="container relative z-10">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    {/* Left Side - Contact Info */}
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-4 text-5xl font-bold lg:text-6xl text-gradient">
                                {title}
                            </h1>
                            <p className="text-muted-foreground text-lg">{description}</p>
                        </div>

                        {/* Contact Details Cards */}
                        <div className="flex flex-col gap-6">
                            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                            {phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">
                                            {email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Address</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Hours</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {hours}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="mx-auto w-full max-w-screen-md">
                        <div className="flex flex-col gap-6 rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm p-10 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                            <div className="text-center lg:text-left mb-2">
                                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                                <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="grid w-full items-center gap-2">
                                    <Label htmlFor="firstname">First Name *</Label>
                                    <Input type="text" id="firstname" placeholder="John" required />
                                </div>
                                <div className="grid w-full items-center gap-2">
                                    <Label htmlFor="lastname">Last Name *</Label>
                                    <Input type="text" id="lastname" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input type="email" id="email" placeholder="john.doe@example.com" required />
                            </div>

                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input type="tel" id="phone" placeholder="(555) 123-4567" />
                            </div>

                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="subject">Subject *</Label>
                                <Input type="text" id="subject" placeholder="Appointment Inquiry" required />
                            </div>

                            <div className="grid w-full gap-2">
                                <Label htmlFor="message">Message *</Label>
                                <Textarea
                                    placeholder="Please describe how we can help you..."
                                    id="message"
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <Button className="w-full text-lg py-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                                Send Message
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                                * Required fields. We typically respond within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
