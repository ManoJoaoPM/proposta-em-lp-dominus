export function Footer() {
  return (
    <footer className="py-12 bg-background-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-institucional-white.png" 
            alt="Dominus" 
            className="h-6 w-auto object-contain opacity-50 grayscale"
          />
          <span className="text-text-gray/30 text-lg font-light">×</span>
          <img 
            src="/oarco-assets/oarco-logo.webp" 
            alt="OArco GI" 
            className="h-6 w-auto object-contain opacity-50 grayscale"
          />
        </div>
        <p className="text-sm font-medium text-text-gray m-0">
          Proposta personalizada para OArco GI · São José dos Campos, SP
        </p>
        <p className="text-xs font-bold tracking-widest uppercase text-text-gray/50 m-0">
          CNPJ: Dominus Marketing LTDA · @dominusmkt
        </p>
      </div>
    </footer>
  );
}
