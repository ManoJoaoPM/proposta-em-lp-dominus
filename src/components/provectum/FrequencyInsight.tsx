import { motion } from 'framer-motion';

export function FrequencyInsight() {
  return (
    <section className="py-24 md:py-32 bg-background-medium text-text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-dominus/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Nós nos lembramos daquilo que consumimos todos os dias, <br className="hidden md:block"/>
            <span className="text-dominus">não do que aparece uma vez por semana.</span>
          </h2>
        </motion.div>

        {/* Visual Comparativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 max-w-5xl mx-auto">
          {/* HOJE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm opacity-60 grayscale-[50%]"
          >
            <div className="text-sm font-bold tracking-widest text-text-gray mb-8 uppercase">Hoje</div>
            <div className="space-y-6">
              <div className="flex items-end gap-4 border-b border-white/10 pb-6">
                <span className="text-5xl font-black text-text-white">2x</span>
                <span className="text-xl text-text-gray pb-1">por semana</span>
              </div>
              <div className="flex items-end gap-4">
                <span className="text-4xl font-bold text-text-white">8x</span>
                <span className="text-lg text-text-gray pb-1">por mês</span>
              </div>
            </div>
            <p className="mt-10 text-lg text-text-gray italic leading-relaxed">
              "Um post aqui, um vídeo lá."
            </p>
          </motion.div>

          {/* COM A DOMINUS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-10 border-l-4 border-l-dominus rounded-r-2xl bg-dominus/5 shadow-[inset_0_0_80px_rgba(232,113,10,0.02)] relative"
          >
            <div className="absolute top-10 right-10 w-16 h-16 bg-dominus/20 rounded-full blur-xl" />
            <div className="text-sm font-bold tracking-widest text-dominus mb-8 uppercase">Com a Dominus</div>
            <div className="space-y-6">
              <div className="flex items-end gap-4 border-b border-dominus/20 pb-6">
                <span className="text-6xl font-black text-dominus">14x</span>
                <span className="text-xl text-text-white pb-1 font-medium">por semana</span>
              </div>
              <div className="flex items-end gap-4">
                <span className="text-5xl font-bold text-dominus/90">60x</span>
                <span className="text-lg text-text-white/80 pb-1">por mês</span>
              </div>
            </div>
            <p className="mt-10 text-xl text-text-white font-medium leading-relaxed">
              Apareceremos em uma semana o que hoje vocês aparecem em um mês.
            </p>
          </motion.div>
        </div>

        {/* Texto de Apoio & Destaque */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-xl md:text-2xl font-medium leading-relaxed mb-16 text-text-white/90">
            Frequência constrói familiaridade. <br/>
            Familiaridade constrói confiança. <br/>
            <span className="text-dominus font-bold">Confiança fecha negócio.</span>
            
            <p className="mt-8 text-lg md:text-xl text-text-gray font-regular">
              Quando um comprador em Campinas pensar em imóvel, o nome que vai vir à mente é aquele que ele viu hoje de manhã e ontem à noite. <strong className="text-text-white">Não o que viu semana passada.</strong>
            </p>
          </div>

          <blockquote className="border-l-2 border-dominus pl-8 py-2 text-left italic text-2xl md:text-3xl font-semibold text-text-white bg-gradient-to-r from-dominus/10 to-transparent">
            "A referência indiscutível não é quem tem mais imóveis. É quem as pessoas reconhecem sem precisar pensar."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
