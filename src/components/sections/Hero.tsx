import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-background border-b border-dominus/20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075&ixlib=rb-4.0.3')] bg-cover bg-center"
      />
      <div className="absolute inset-0 z-0 bg-background/90" />

      <div className="container relative z-10 px-4 md:px-6 py-20 mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/logo-institucional-white.png" 
            alt="Dominus Logo" 
            className="h-12 object-contain"
          />
        </div>

        {/* Tag */}
        <span className="text-sm font-medium text-gold uppercase tracking-wider mb-8 block">
          Proposta personalizada · Imobiliária Inglaterra
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary max-w-5xl leading-tight tracking-tight mb-8">
          Tráfego pago para imobiliária não é sobre apertar botões. <br className="hidden md:block" />
          <span className="text-dominus">
            É sobre confiar em quem está do outro lado da tela.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed mb-12">
          A Inglaterra tem 25 anos de história, quase 2 mil imóveis cadastrados e nome consolidade em Londrina. 
          O que falta é uma parceria de marketing que entenda esse tamanho e entregue estratégia real, e não estratégias pré-prontas.
        </p>
      </div>
    </section>
  );
}
