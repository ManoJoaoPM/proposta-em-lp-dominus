import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-background-alt relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dominus/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
            Essa página é <span className="text-gold">só o começo.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-12">
            A conversa real acontece na reunião. Marque 30 minutos com a gente e veja na prática como seria trabalhar junto.
          </p>
        </div>
      </div>
    </section>
  );
}
