import { useEffect } from 'react';
import { Hero } from '@/components/provectum/Hero';
import { Diagnostic } from '@/components/provectum/Diagnostic';
import { FrequencyInsight } from '@/components/provectum/FrequencyInsight';
import { StructuralProblem } from '@/components/provectum/StructuralProblem';
import { Solution } from '@/components/provectum/Solution';
import { Deliverables } from '@/components/provectum/Deliverables';
import { ROI } from '@/components/provectum/ROI';
import { Investment } from '@/components/provectum/Investment';
import { HowItWorks } from '@/components/provectum/HowItWorks';
import { Authority } from '@/components/provectum/Authority';
import { FinalCTA } from '@/components/provectum/FinalCTA';

export default function ProvectumLP() {
  useEffect(() => {
    document.title = "Proposta - Rede Provectum";
  }, []);

  return (
    <main className="font-sans antialiased text-text-dark bg-background-light">
      <Hero />
      <Diagnostic />
      <FrequencyInsight />
      <StructuralProblem />
      <Solution />
      <Deliverables />
      <ROI />
      <Investment />
      <HowItWorks />
      <Authority />
      <FinalCTA />
    </main>
  );
}
