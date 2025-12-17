"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveParticles } from "@/components/ui/interactive-particles"
import { useLanguage } from "@/hooks/use-language"
import { services } from "@/lib/data"

export default function AppointmentPage() {
    const { t } = useLanguage()
    const [step, setStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        time: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Appointment booked:", formData)
        setIsSubmitted(true)
    }

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM",
    ]

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
                {/* Interactive Particles Background */}
                <div className="absolute inset-0">
                    <InteractiveParticles
                        particleCount={80}
                        particleSize={2.5}
                        speed={0.3}
                        interactionRadius={180}
                        attractMode={true}
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />

                <div className="max-w-2xl mx-auto text-center relative z-10">
                    <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 animate-pulse">
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="text-5xl font-bold mb-4 text-gradient">Appointment Confirmed!</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Thank you for booking with us. We've sent a confirmation email to <strong>{formData.email}</strong>.
                    </p>
                    <Card className="text-left mb-8">
                        <CardHeader>
                            <CardTitle>Appointment Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Service:</span>
                                <span className="font-semibold">{formData.service}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Date:</span>
                                <span className="font-semibold">{formData.date}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Time:</span>
                                <span className="font-semibold">{formData.time}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Patient:</span>
                                <span className="font-semibold">{formData.firstName} {formData.lastName}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => { setIsSubmitted(false); setStep(1) }}>
                            Book Another Appointment
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="/">Return Home</a>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Interactive Particles Background */}
            <div className="absolute inset-0">
                <InteractiveParticles
                    particleCount={70}
                    particleSize={2}
                    speed={0.3}
                    interactionRadius={170}
                    attractMode={true}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">{t.appointment.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.appointment.subtitle}
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                1
                            </div>
                            <span className="hidden sm:inline font-medium">Service & Date</span>
                        </div>
                        <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                2
                            </div>
                            <span className="hidden sm:inline font-medium">Your Information</span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <Card className="backdrop-blur-sm bg-card/50 border-2">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit}>
                            {/* Step 1: Service & DateTime */}
                            {step === 1 && (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="space-y-2">
                                        <Label htmlFor="service" className="text-base">Select Service *</Label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            required
                                        >
                                            <option value="">Choose a service...</option>
                                            {services.map((service) => (
                                                <option key={service.id} value={service.title}>
                                                    {service.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="date" className="text-base">Preferred Date *</Label>
                                        <Input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="h-12"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-base">Preferred Time *</Label>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, time })}
                                                    className={`px-4 py-3 rounded-lg border-2 transition-all duration-200 ${formData.time === time
                                                        ? 'border-primary bg-primary text-primary-foreground shadow-lg'
                                                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        disabled={!formData.service || !formData.date || !formData.time}
                                        className="w-full h-12 text-lg"
                                        size="lg"
                                    >
                                        Continue to Your Information
                                    </Button>
                                </div>
                            )}

                            {/* Step 2: Personal Information */}
                            {step === 2 && (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="John"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Doe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john.doe@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="(555) 123-4567"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                                        <Textarea
                                            id="notes"
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleInputChange}
                                            placeholder="Any specific concerns or requests?"
                                            className="min-h-[100px]"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            variant="outline"
                                            className="w-full sm:w-auto sm:flex-1 h-12"
                                            size="lg"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            type="submit"
                                            className="w-full sm:w-auto sm:flex-1 h-12 text-lg"
                                            size="lg"
                                        >
                                            Confirm Appointment
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </CardContent>
                </Card>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <Card className="text-center hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-6">
                            <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                            <p className="text-sm text-muted-foreground">
                                Choose a time that works best for you
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-6">
                            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Quick & Easy</h3>
                            <p className="text-sm text-muted-foreground">
                                Book in just a few simple steps
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-6">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Instant Confirmation</h3>
                            <p className="text-sm text-muted-foreground">
                                Receive email confirmation immediately
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
