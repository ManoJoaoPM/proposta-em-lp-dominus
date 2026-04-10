import { motion } from 'framer-motion';

const cases = [
  {
    name: "Eleven Brokers",
    tag: "Posicionamento digital",
    text: "A imobiliária posicionou-se acima de todos os portais da sua região de atuação, tornando-se a referência indiscutível no digital e superando Zap, OLX e concorrentes locais.",
    result: "Referência #1 nos portais da área de atuação"
  },
  {
    name: "Áquilas",
    tag: "Lançamento do zero",
    text: "A Dominus entrou desde antes da abertura. Estruturou o digital, o funil comercial e o posicionamento. Nos primeiros 30 dias de operação, um negócio já estava fechado.",
    result: "Primeiro negócio fechado em 30 dias de operação"
  },
  {
    name: "Império Nobre",
    tag: "Qualidade de leads",
    text: "A taxa de leads qualificados (MQL) foi de praticamente zero para mais de 50% do total gerado, um resultado que nunca havia sido alcançado em toda a história da imobiliária.",
    result: "MQL de 0% para +50% com resultado histórico"
  }
];

export function Cases() {
  return (
    <section id="casos" className="py-24 md:py-32 bg-background-light text-text-dark">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Resultados reais</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-text-dark">
            Imobiliárias que <br className="hidden md:block" />
            escolheram <span className="text-dominus">método.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 relative group"
            >
              <div className="absolute top-4 left-6 text-7xl font-black text-dominus/10 leading-none pointer-events-none group-hover:text-dominus/20 transition-colors duration-300">
                "
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-2xl font-black text-text-dark mb-2">
                  {c.name}
                </h3>
                <div className="inline-block text-[10px] font-bold tracking-widest uppercase bg-dominus/10 text-dominus px-3 py-1.5 rounded-full mb-6">
                  {c.tag}
                </div>
                <p className="text-text-gray text-lg leading-relaxed mb-8">
                  {c.text}
                </p>
                <div className="pt-6 border-t border-black/5 text-sm font-bold text-dominus">
                  {c.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
