import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ROI() {
  return (
    <section className="py-24 md:py-32 bg-background-medium text-text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-dominus/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Na prática, o que isso representa?</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            O Retorno Sobre o Investimento
          </h2>
          <p className="text-lg md:text-xl text-text-gray font-regular leading-relaxed max-w-3xl mx-auto">
            Levando em consideração 2 fechamentos/mês influenciados pelas redes sociais, com comissão de 5% e VGV médio de R$600.000:
          </p>
        </motion.div>

        {/* Calculadora Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24 max-w-6xl mx-auto items-stretch relative">
          {/* Cenário Atual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm flex flex-col justify-between h-full"
          >
            <div>
              <div className="text-sm font-bold tracking-widest text-text-gray mb-10 uppercase border-b border-white/10 pb-4">Cenário Atual</div>
              <ul className="space-y-6 text-xl text-text-gray font-medium">
                <li className="flex justify-between items-center">
                  <span>Fechamentos/mês</span>
                  <span className="text-white font-bold">2</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>VGV médio</span>
                  <span className="text-white font-bold">R$ 600.000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Comissão</span>
                  <span className="text-white font-bold">5%</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-sm text-text-gray uppercase tracking-wider mb-2">Total Mensal</div>
              <div className="text-5xl font-black text-text-white">R$ 60.000 <span className="text-2xl font-medium text-text-gray">VGC</span></div>
            </div>
          </motion.div>

          {/* Seta Visual Desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-16 h-16 bg-background-dark rounded-full border border-dominus/20 shadow-[0_0_30px_rgba(232,113,10,0.3)]">
            <ArrowRight className="w-8 h-8 text-dominus" />
          </div>

          {/* Seta Visual Mobile */}
          <div className="flex lg:hidden justify-center my-4">
            <ArrowRight className="w-8 h-8 text-dominus rotate-90" />
          </div>

          {/* Cenário com Dominus */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-10 border-2 border-dominus rounded-2xl bg-dominus/5 relative flex flex-col justify-between h-full shadow-[0_20px_50px_rgba(232,113,10,0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-dominus/20 blur-[50px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-sm font-bold tracking-widest text-dominus mb-10 uppercase border-b border-dominus/20 pb-4">Cenário Com A Dominus</div>
              <ul className="space-y-6 text-xl text-text-white font-medium">
                <li className="flex justify-between items-center">
                  <span>Fechamentos/mês</span>
                  <span className="text-dominus font-black text-3xl">4</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>VGV médio</span>
                  <span className="text-white font-bold">R$ 600.000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Comissão</span>
                  <span className="text-white font-bold">5%</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-dominus/20 relative z-10">
              <div className="text-sm text-dominus uppercase tracking-wider mb-2 font-bold">Total Mensal Projetado</div>
              <div className="text-6xl font-black text-dominus drop-shadow-[0_0_15px_rgba(232,113,10,0.5)] mb-2">R$ 120.000 <span className="text-2xl font-medium text-white/80">VGC</span></div>
              <div className="text-lg text-text-gray font-medium">+ R$ 2.400.000 VGV gerado</div>
              
              <div className="mt-6 inline-block bg-dominus/20 border border-dominus/30 px-6 py-3 rounded-lg text-text-white font-bold">
                DIFERENÇA: +R$60.000 VGC por mês
              </div>
            </div>
          </motion.div>
        </div>

        {/* Texto de Apoio */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-text-gray font-regular mb-10 leading-relaxed">
            Esse cenário considera apenas o impacto conservador das redes sociais no processo de decisão de compra, sem incluir o efeito de autoridade de marca no longo prazo.
          </p>

          <p className="text-2xl md:text-3xl font-bold text-text-white border-t border-white/10 pt-10">
            A Dominus não vende promessa de resultado. <br className="hidden md:block"/>
            <span className="text-dominus">Vende método e o método tem lógica.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
