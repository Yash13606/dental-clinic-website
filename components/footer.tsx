"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { contactInfo } from "@/lib/data"

export function Footer() {
    const { t } = useLanguage()

    const quickLinks = [
        { href: "/", label: t.nav.home },
        { href: "/services", label: t.nav.services },
        { href: "/team", label: t.nav.team },
        { href: "/blog", label: t.nav.blog },
        { href: "/faq", label: t.nav.faq },
        { href: "/contact", label: t.nav.contact },
    ]

    return (
        <footer className="bg-muted/50 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">D</span>
                            </div>
                            <span className="text-xl font-bold text-gradient">DentalCare</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            {t.footer.aboutText}
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href={contactInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                            >
                                <Facebook className="w-4 h-4 text-primary" />
                            </a>
                            <a
                                href={contactInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-primary" />
                            </a>
                            <a
                                href={contactInfo.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                            >
                                <Twitter className="w-4 h-4 text-primary" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">{t.contact.title}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">{t.contact.phone}</p>
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="text-sm text-muted-foreground hover:text-primary"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">{t.contact.email}</p>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-sm text-muted-foreground hover:text-primary"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">{t.contact.address}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {contactInfo.address}
                                        <br />
                                        {contactInfo.city}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Office Hours */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">{t.contact.hours}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>{contactInfo.hours.weekdays}</li>
                            <li>{contactInfo.hours.saturday}</li>
                            <li>{contactInfo.hours.sunday}</li>
                        </ul>
                        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                            <p className="text-xs font-medium text-primary mb-1">
                                {t.contact.emergency}
                            </p>
                            <a
                                href={`tel:${contactInfo.emergencyPhone}`}
                                className="text-sm font-semibold text-primary"
                            >
                                {contactInfo.emergencyPhone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t text-center">
                    <p className="text-sm text-muted-foreground">
                        {t.footer.copyright}
                    </p>
                    <div className="mt-2 space-x-4">
                        <Link
                            href="/privacy"
                            className="text-xs text-muted-foreground hover:text-primary"
                        >
                            {t.footer.privacy}
                        </Link>
                        <Link
                            href="/terms"
                            className="text-xs text-muted-foreground hover:text-primary"
                        >
                            {t.footer.terms}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
