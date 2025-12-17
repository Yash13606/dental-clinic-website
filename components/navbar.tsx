"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "/", label: t.nav.home },
        { href: "/services", label: t.nav.services },
        { href: "/team", label: t.nav.team },
        { href: "/testimonials", label: t.nav.testimonials },
        { href: "/blog", label: t.nav.blog },
        { href: "/faq", label: t.nav.faq },
        { href: "/contact", label: t.nav.contact },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xl font-bold text-gradient group-hover:opacity-80 transition-opacity">DentalCare</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Language Switcher */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setLanguage(language === "en" ? "es" : "en")}
                            title="Toggle Language"
                        >
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Toggle language</span>
                        </Button>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Book Appointment Button */}
                        <Link href="/appointment">
                            <Button className="ml-2">{t.nav.appointment}</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setLanguage(language === "en" ? "es" : "en")}
                        >
                            <Globe className="h-5 w-5" />
                        </Button>
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/appointment"
                            onClick={() => setIsOpen(false)}
                            className="block"
                        >
                            <Button className="w-full mt-2">{t.nav.appointment}</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
