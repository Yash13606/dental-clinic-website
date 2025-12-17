"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { services, teamMembers } from "@/lib/data"

const appointmentSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time"),
    service: z.string().min(1, "Please select a service"),
    doctor: z.string().optional(),
    comments: z.string().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

export function AppointmentForm() {
    const { t } = useLanguage()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormData>({
        resolver: zodResolver(appointmentSchema),
    })

    const onSubmit = (data: AppointmentFormData) => {
        console.log("Appointment Request:", data)
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl">{t.appointment.title}</CardTitle>
                <CardDescription>{t.appointment.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                {isSubmitted && (
                    <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary">
                        {t.appointment.form.success}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center space-x-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>{t.appointment.form.name}</span>
                        </label>
                        <Input
                            {...register("name")}
                            placeholder="John Doe"
                            className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>{t.appointment.form.email}</span>
                        </label>
                        <Input
                            {...register("email")}
                            type="email"
                            placeholder="john@example.com"
                            className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>{t.appointment.form.phone}</span>
                        </label>
                        <Input
                            {...register("phone")}
                            type="tel"
                            placeholder="(555) 123-4567"
                            className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{t.appointment.form.date}</span>
                            </label>
                            <Input
                                {...register("date")}
                                type="date"
                                min={new Date().toISOString().split("T")[0]}
                                className={errors.date ? "border-destructive" : ""}
                            />
                            {errors.date && (
                                <p className="text-sm text-destructive">{errors.date.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>{t.appointment.form.time}</span>
                            </label>
                            <Input
                                {...register("time")}
                                type="time"
                                className={errors.time ? "border-destructive" : ""}
                            />
                            {errors.time && (
                                <p className="text-sm text-destructive">{errors.time.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            {t.appointment.form.service}
                        </label>
                        <select
                            {...register("service")}
                            className={`w-full px-3 py-2 border rounded-md bg-background ${errors.service ? "border-destructive" : "border-input"
                                }`}
                        >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.title}
                                </option>
                            ))}
                        </select>
                        {errors.service && (
                            <p className="text-sm text-destructive">{errors.service.message}</p>
                        )}
                    </div>

                    {/* Doctor */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            {t.appointment.form.doctor} (Optional)
                        </label>
                        <select
                            {...register("doctor")}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                            <option value="">No preference</option>
                            {teamMembers.map((member) => (
                                <option key={member.id} value={member.id.toString()}>
                                    {member.name} - {member.specialty}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Comments */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            <span>{t.appointment.form.comments}</span>
                        </label>
                        <Textarea
                            {...register("comments")}
                            placeholder="Any specific concerns or questions?"
                            rows={4}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" size="lg">
                        {t.appointment.form.submit}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
