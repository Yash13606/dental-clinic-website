"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Stethoscope } from "lucide-react"

interface TeamMemberProps {
    name: string
    title: string
    specialty: string
    bio: string
    education: string
    image: string
}

export function TeamMember({ name, title, specialty, bio, education, image }: TeamMemberProps) {
    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-xl">{name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                    {title}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                    <Stethoscope className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <p className="text-sm font-medium">Specialty</p>
                        <p className="text-sm text-muted-foreground">{specialty}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <p className="text-sm font-medium">Education</p>
                        <p className="text-sm text-muted-foreground">{education}</p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
            </CardContent>
        </Card>
    )
}
