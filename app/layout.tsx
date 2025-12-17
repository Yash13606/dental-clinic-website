import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DentalChatWidget } from "@/components/dental-chat-widget"
import { DentalDock } from "@/components/dental-dock"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DentalCare - Your Smile, Our Priority",
  description: "Experience exceptional dental care with our expert team. Comprehensive services including general dentistry, cosmetic treatments, orthodontics, and emergency care.",
  keywords: ["dental clinic", "dentist", "teeth whitening", "orthodontics", "dental implants", "cosmetic dentistry"],
  authors: [{ name: "DentalCare Clinic" }],
  openGraph: {
    title: "DentalCare - Your Smile, Our Priority",
    description: "Experience exceptional dental care with our expert team",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <DentalChatWidget />
            <DentalDock />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
