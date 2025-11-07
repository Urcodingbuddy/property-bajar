import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SearchSection from "@/components/search-section"
import FeaturesSection from "@/components/features-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
    </main>
  )
}
