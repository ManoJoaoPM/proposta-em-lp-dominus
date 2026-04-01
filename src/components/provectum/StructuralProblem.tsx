import { motion } from 'framer-motion';

export function StructuralProblem() {
  return (
    <section className="py-24 md:py-32 bg-background-light text-text-dark border-t border-black/5">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Problema Estrutural</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-text-dark">
            O problema não está na vontade. <br className="hidden md:block"/>
            <span className="text-text-gray font-semibold">Está na falta de estrutura para sustentar o crescimento.</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-text-dark/80 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              A comunicação de uma rede com 11 unidades não pode depender de cada corretor decidindo o que publicar.
            </p>
            <p>
              Sem um diretório de conteúdo, sem scripts e sem identidade unificada, o volume que poderia fortalecer a marca se torna fragmentação.
            </p>
            <p className="font-bold text-xl md:text-2xl text-dominus mt-8 block">
              E fragmentação não constrói referência. Fragmentação constrói confusão.
            </p>
          </div>
        </motion.div>

        {/* Insight Adicional Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-dominus/10 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-dominus" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-dominus/5 rounded-full blur-3xl" />
          
          <p className="text-xl md:text-2xl font-medium text-text-dark leading-relaxed relative z-10">
            A Provectum tem todos os ingredientes para dominar o digital em Campinas. <br className="hidden md:block"/>
            <strong className="text-dominus">O que falta é o método para transformar isso em presença consistente.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
