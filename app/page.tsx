import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SearchSection from "@/components/search-section";
import FeaturesSection from "@/components/features-section";
import { PropertyGrid } from "@/components/property-grid";
import { getBaseUrl } from "@/lib/baseUrl";

export default async function Home() {
  let properties = [];
  let hasError = false;

  try {
    const res = await fetch(`${getBaseUrl()}/api/items`, { cache: "no-store" });
    if (res.ok) {
      properties = await res.json();
    } else {
      hasError = true;
    }
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <HeroSection />
      <SearchSection />
      <FeaturesSection />

      {/* Featured Properties Section */}
      <section className="w-full px-6 md:px-12 py-12 md:py-16">
        {hasError ? (
          <div className="text-center py-12">
            <p className="text-destructive text-lg">
              Failed to load properties. Please try again later.
            </p>
          </div>
        ) : (
          <PropertyGrid properties={properties} title="Discover Properties" />
        )}
      </section>
    </main>
  );
}
