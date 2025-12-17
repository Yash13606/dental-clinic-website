"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    opacity: number
    targetOpacity: number
}

interface InteractiveParticlesProps {
    particleCount?: number
    particleColor?: string
    particleSize?: number
    speed?: number
    interactionRadius?: number
    attractMode?: boolean
    className?: string
}

export function InteractiveParticles({
    particleCount = 80,
    particleColor,
    particleSize = 2,
    speed = 0.5,
    interactionRadius = 150,
    attractMode = true,
    className = "",
}: InteractiveParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0, isMoving: false })
    const animationFrameRef = useRef<number | undefined>(undefined)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = []
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    radius: particleSize + Math.random() * 2,
                    opacity: 0.3 + Math.random() * 0.4,
                    targetOpacity: 0.3 + Math.random() * 0.4,
                })
            }
        }
        initParticles()

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY,
                isMoving: true,
            }
        }

        // Mouse leave handler
        const handleMouseLeave = () => {
            mouseRef.current.isMoving = false
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        // Get particle color based on theme
        const getParticleColor = () => {
            if (particleColor) return particleColor
            return theme === "dark" ? "rgba(14, 165, 233, " : "rgba(14, 165, 233, "
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const particles = particlesRef.current
            const mouse = mouseRef.current
            const baseColor = getParticleColor()

            particles.forEach((particle) => {
                // Calculate distance from mouse
                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                // Mouse interaction
                if (mouse.isMoving && distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius
                    const angle = Math.atan2(dy, dx)

                    if (attractMode) {
                        // Attract mode - pull particles towards mouse
                        particle.vx += Math.cos(angle) * force * 0.2
                        particle.vy += Math.sin(angle) * force * 0.2
                    } else {
                        // Repel mode - push particles away from mouse
                        particle.vx -= Math.cos(angle) * force * 0.3
                        particle.vy -= Math.sin(angle) * force * 0.3
                    }

                    // Increase opacity and size near mouse
                    particle.targetOpacity = 0.8 + (1 - distance / interactionRadius) * 0.2
                    particle.radius = particleSize + (1 - distance / interactionRadius) * 3
                } else {
                    particle.targetOpacity = 0.3 + Math.random() * 0.1
                    particle.radius += (particleSize - particle.radius) * 0.1
                }

                // Smooth opacity transition
                particle.opacity += (particle.targetOpacity - particle.opacity) * 0.1

                // Apply velocity with damping
                particle.x += particle.vx
                particle.y += particle.vy
                particle.vx *= 0.95
                particle.vy *= 0.95

                // Add slight random motion for natural float
                particle.vx += (Math.random() - 0.5) * 0.1
                particle.vy += (Math.random() - 0.5) * 0.1

                // Limit velocity
                const maxVelocity = 3
                const velocity = Math.sqrt(particle.vx ** 2 + particle.vy ** 2)
                if (velocity > maxVelocity) {
                    particle.vx = (particle.vx / velocity) * maxVelocity
                    particle.vy = (particle.vy / velocity) * maxVelocity
                }

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.vx = -particle.vx
                    particle.x = Math.max(0, Math.min(canvas.width, particle.x))
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.vy = -particle.vy
                    particle.y = Math.max(0, Math.min(canvas.height, particle.y))
                }

                // Draw particle without glow
                ctx.shadowBlur = 0
                ctx.shadowColor = 'transparent'

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fillStyle = baseColor + particle.opacity + ")"
                ctx.fill()
            })

            // Shadow already at 0
            ctx.shadowBlur = 0

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [particleCount, particleColor, particleSize, speed, interactionRadius, attractMode, theme])

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none ${className}`}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
            }}
        />
    )
}
