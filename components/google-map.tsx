"use client"

import { useEffect, useRef } from "react"

interface GoogleMapProps {
    address: string
    className?: string
    zoom?: number
}

export function GoogleMap({ address, className = "", zoom = 15 }: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    // Encode the address for the Google Maps embed URL
    const encodedAddress = encodeURIComponent(address)

    // Google Maps Embed URL (no API key required for basic embed)
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${encodedAddress}&zoom=${zoom}`

    // Alternative: Use Google Maps search URL in iframe
    const searchUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`

    return (
        <div className={`relative w-full h-full ${className}`}>
            <iframe
                ref={iframeRef}
                src={searchUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Dental Clinic Location"
            />
        </div>
    )
}
