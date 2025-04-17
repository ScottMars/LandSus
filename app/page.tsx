import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LocationsSection } from "@/components/locations-section"
import { StepsSection } from "@/components/steps-section"
import { AutoRouteSection } from "@/components/auto-route-section"
import { FeaturesSection } from "@/components/features-section"
import { AtmosphericPlacesSection } from "@/components/atmospheric-places-section"
import { FaqSection } from "@/components/faq-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <Hero />
        <LocationsSection />
        <StepsSection />
        <AutoRouteSection />
        <FeaturesSection />
        <AtmosphericPlacesSection />
        <FaqSection />
        <DownloadSection />
      </div>
      <Footer />
    </main>
  )
}
