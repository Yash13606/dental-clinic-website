"use client"

import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { ServiceCard } from "@/components/service-card"
import { AnimatedTestimonials } from "@/components/animated-testimonials"
import { TeamMember } from "@/components/team-member"
import { GoogleMap } from "@/components/google-map"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { services, teamMembers, faqs, contactInfo } from "@/lib/data"
import { ArrowRight, Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" variant="outline" className="group">
                {t.services.viewAll}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Testimonials Section */}
      <AnimatedTestimonials />

      {/* Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t.team.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.team.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                title={member.title}
                specialty={member.specialty}
                image={member.image}
                bio={member.bio}
                education={member.education}
              />
            ))}
          </div>
          <div className="text-center">
            <Link href="/team">
              <Button size="lg" variant="outline" className="group">
                Meet All Our Dentists
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t.faq.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.faq.subtitle}
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button size="lg" variant="outline" className="group">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{t.contact.phone}</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{t.contact.email}</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{t.contact.address}</h3>
                <p className="text-muted-foreground text-sm">
                  {contactInfo.address}<br />{contactInfo.city}
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{t.contact.hours}</h3>
                <p className="text-muted-foreground text-sm">
                  {contactInfo.hours.weekdays}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-2xl overflow-hidden border shadow-lg h-96">
            <GoogleMap address={`${contactInfo.address}, ${contactInfo.city}`} zoom={16} />
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="group">
                Get Directions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, brighter smile.
          </p>
          <Link href="/appointment">
            <Button size="lg" className="text-xl px-12 py-8 h-auto rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              <Calendar className="mr-3 h-8 w-8" />
              Schedule an Appointment
              <ArrowRight className="ml-3 h-8 w-8" />
            </Button>
          </Link>
          <p className="mt-8 text-sm text-muted-foreground">
            Or call us at <a href={`tel:${contactInfo.phone}`} className="text-primary font-semibold hover:underline">{contactInfo.phone}</a>
          </p>
        </div>
      </section>
    </div>
  )
}
