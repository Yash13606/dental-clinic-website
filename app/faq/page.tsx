"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/hooks/use-language"
import { faqs } from "@/lib/data"

export default function FAQPage() {
    const { t } = useLanguage()

    // Group FAQs by category
    const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">{t.faq.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t.faq.subtitle}
                    </p>
                </div>

                {categories.map((category) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">{category}</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs
                                .filter((faq) => faq.category === category)
                                .map((faq) => (
                                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                                        <AccordionTrigger className="text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    )
}
