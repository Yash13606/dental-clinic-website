"use client"

import React, { createContext, useState, useEffect } from "react"
import { Language, translations } from "@/lib/translations"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof translations.en
}

export const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => { },
    t: translations.en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language
        if (savedLang && (savedLang === "en" || savedLang === "es")) {
            setLanguage(savedLang)
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage: handleSetLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}
