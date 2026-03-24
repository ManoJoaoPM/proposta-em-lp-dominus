import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solution } from "@/components/sections/Solution";
import { Partnership } from "@/components/sections/Partnership";
import { Investment } from "@/components/sections/Investment";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary selection:bg-dominus selection:text-white">
      <Hero />
      <Pain />
      <Solution />
      <Partnership />
      <Investment />
      <FinalCTA />
      <Footer />
    </main>
  );
}
