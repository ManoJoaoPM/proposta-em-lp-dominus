import { useEffect } from 'react';
import { Navbar } from '@/components/oarco/Navbar';
import { Hero } from '@/components/oarco/Hero';
import { Diagnostic } from '@/components/oarco/Diagnostic';
import { Solution } from '@/components/oarco/Solution';
import { HowItWorks } from '@/components/oarco/HowItWorks';
import { Calculator } from '@/components/oarco/Calculator';
import { Cases } from '@/components/oarco/Cases';
import { Investment } from '@/components/oarco/Investment';
import { FinalCTA } from '@/components/oarco/FinalCTA';
import { Footer } from '@/components/oarco/Footer';

export default function OArcoLP() {
  useEffect(() => {
    document.title = "Proposta Dominus × OArco GI";
    
    // Smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="font-sans antialiased text-text-dark bg-background-light selection:bg-dominus selection:text-white">
      {/*<Navbar />*/}
      <Hero />
      <Diagnostic />
      <Solution />
      <HowItWorks />
      <Calculator />
      <Cases />
      <Investment />
      <FinalCTA />
      <Footer />
    </main>
  );
}
