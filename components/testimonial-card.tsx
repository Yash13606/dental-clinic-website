"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
    name: string
    rating: number
    text: string
    service: string
    date: string
}

export function TestimonialCard({ name, rating, text, service, date }: TestimonialCardProps) {
    return (
        <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-200 text-gray-200"
                                }`}
                        />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    &ldquo;{text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="text-sm text-muted-foreground">{service}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        {new Date(date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
