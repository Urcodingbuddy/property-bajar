import BestChoice from "@/components/Best-Choice";
import Featured from "@/components/Featured";
import HeroTitle from "@/components/Hero-Title";
import HighDemand from "@/components/High-Demand";
import RecProjects from "@/components/Rec-Projects";
import { SearchBar } from "@/components/SearchBar";
import SellProperty from "@/components/Sell-Property";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20 bg-white">
      <section>
        <HeroTitle />
      </section>

      <section className="relative">
        <SearchBar />
      </section>

      <section className="w-full flex justify-center">
        <Featured />
      </section>

      <section className="w-full flex justify-center">
        <BestChoice />
      </section>

      <section className="w-full flex justify-center">
        <RecProjects />
      </section>

      <section className="w-full flex justify-center mb-20">
        <HighDemand />
      </section>

      <section className="w-full flex justify-center mb-20">
        <SellProperty />
      </section>
    </main>
  );
}