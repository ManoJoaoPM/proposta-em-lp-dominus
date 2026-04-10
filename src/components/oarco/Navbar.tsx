import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <img 
            src="/logo-institucional-white.png" 
            alt="Dominus" 
            className="h-8 w-auto object-contain"
          />
          <span className="text-text-gray/50 text-xl font-light">×</span>
          <img 
            src="/oarco/oarco-logo.webp" 
            alt="OArco GI" 
            className="h-8 w-auto object-contain"
          />
        </div>
        <a 
          href="#cta" 
          className="hidden md:inline-block text-xs font-bold tracking-widest text-dominus uppercase border border-dominus/30 px-6 py-2.5 rounded-full hover:bg-dominus hover:text-white transition-all duration-300"
        >
          Fechar Proposta
        </a>
      </div>
    </nav>
  );
}
