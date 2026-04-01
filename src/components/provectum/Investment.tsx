import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function Investment() {
  return (
    <section className="py-24 md:py-32 bg-background-dark text-text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-dominus/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Investimento</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Uma estrutura de alto nível, <br className="hidden md:block"/>
            <span className="text-dominus">por uma fração do custo.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-gray font-regular leading-relaxed max-w-3xl mx-auto">
            A ancoragem é clara: ter presença de marca exige braço operacional e inteligência. Você pode tentar construir o seu do zero, ou pode plugar a operação da Dominus hoje mesmo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
          
          {/* O Caminho Tradicional (Ancoragem) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 md:p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm opacity-80"
          >
            <div className="text-sm font-bold tracking-widest text-text-gray mb-8 uppercase">O Caminho Tradicional</div>
            <h3 className="text-2xl font-bold mb-8 text-white">Contratar Equipe Interna</h3>
            
            <ul className="space-y-4 mb-10 text-text-gray">
              {[
                { role: "Estrategista de Conteúdo", cost: "R$ 4.000" },
                { role: "Videomaker / Captador", cost: "R$ 3.500" },
                { role: "Editor de Vídeo", cost: "R$ 3.000" },
                { role: "Copywriter", cost: "R$ 3.500" },
                { role: "Designer", cost: "R$ 3.000" },
                { role: "Gestor de Projeto", cost: "R$ 4.000" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-500/70" />
                    {item.role}
                  </span>
                  <span>{item.cost}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-white/10">
              <div className="text-sm text-text-gray mb-1">Custo Estimado (sem encargos)</div>
              <div className="text-4xl font-bold text-white/50 line-through decoration-red-500/50">R$ 21.000<span className="text-xl">/mês</span></div>
              <p className="text-xs text-text-gray/60 mt-3">*Sem contar tempo de recrutamento, curva de aprendizado, equipamentos e gestão de pessoas.</p>
            </div>
          </motion.div>

          {/* Plano Essencial Dominus */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-8 md:p-12 border-2 border-dominus rounded-2xl bg-background-medium relative shadow-[0_0_50px_rgba(232,113,10,0.15)] transform lg:scale-105 z-20"
          >
            <div className="absolute -top-4 right-8 bg-dominus text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              Proposta
            </div>
            
            <div className="text-sm font-bold tracking-widest text-dominus mb-4 uppercase">Plano Personalizado</div>
            <h3 className="text-3xl font-black mb-2 text-white">Dominus Essencial</h3>
            <p className="text-text-gray mb-8">Para a Rede Provectum dominar o digital em Campinas.</p>
            
            <ul className="space-y-5 mb-12">
              {[
                "60 conteúdos mensais (30 vídeos + 30 posts)",
                "2 diárias de captação profissional por mês",
                "Diretório de conteúdo para 3 unidades",
                "Scripts e acompanhamento de corretores",
                "Metrificação, relatórios e estratégia",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-dominus shrink-0 mt-0.5" />
                  <span className="text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="p-6 bg-dominus/10 rounded-xl border border-dominus/20 mb-8">
              <div className="text-sm text-dominus font-semibold mb-2 uppercase tracking-wider">Investimento Mensal</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-black text-white">R$ 8.000</span>
                <span className="text-xl text-text-gray">/mês</span>
              </div>
            </div>

            <button className="w-full py-4 bg-dominus text-white font-bold text-lg rounded-lg hover:bg-[#D16508] transition-all transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,113,10,0.3)] duration-300">
              Avançar com o Plano Essencial
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
