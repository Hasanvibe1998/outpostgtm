import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoBar } from "@/components/logo-bar"
import { WhoSection } from "@/components/who-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ResultsSection } from "@/components/results-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <LogoBar />
      <WhoSection />
      <ServicesSection />
      <HowItWorksSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
