import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-background-light text-text-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dominus to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Próximos Passos</span>
          <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-8 text-text-dark">
            A Provectum já é grande. <br className="hidden md:block"/>
            <span className="text-dominus">Está na hora de ser indiscutível.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-gray font-regular leading-relaxed max-w-3xl mx-auto mb-16">
            Enquanto a Provectum aparece uma vez por semana, a concorrência está se posicionando. Esse projeto existe para inverter esse cenário, <strong className="text-text-dark">com método, dados e frequência.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-dominus text-white font-bold text-lg rounded-lg hover:bg-[#D16508] transition-all transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,113,10,0.3)] duration-300">
              Quero fechar o projeto
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-sm text-text-gray/80 max-w-2xl mx-auto border-t border-black/5 pt-8">
            *Proposta aberta a ajustes e sugestões. <br/>
            A Dominus acredita que o melhor projeto é aquele construído em parceria.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
