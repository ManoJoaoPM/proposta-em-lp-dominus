import { motion } from 'framer-motion';

export function Authority() {
  return (
    <section className="py-24 md:py-32 bg-background-dark text-text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(232,113,10,0.08)_0%,rgba(13,13,13,1)_80%)]" />
      </div>
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Autoridade</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Por que a Dominus?
          </h2>
        </motion.div>

        {/* 4 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 max-w-5xl mx-auto">
          {[
            {
              title: "Especializados no ramo imobiliário",
              desc: "Não somos agência generalista. Entendemos corretor, CRM, portfólio, VGV, visita técnica. Falamos o idioma do seu negócio."
            },
            {
              title: "Olhamos além do marketing",
              desc: "A Dominus não vende post. Olha para a operação completa, do lead ao fechamento e da unidade ao gestor."
            },
            {
              title: "Não especulamos resultados",
              desc: "Trabalhamos com lógica, dado e método. O que apresentamos hoje não é promessa, é raciocínio que você pode questionar agora."
            },
            {
              title: "Time comissionado pelo seu sucesso",
              desc: "Nosso interesse está diretamente alinhado ao crescimento da Provectum. Quando vocês crescem, crescemos junto."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-background-medium/50 p-8 md:p-10 border-l-2 border-l-dominus/30 hover:border-l-dominus hover:bg-background-medium rounded-r-xl transition-all duration-300 relative group"
            >
              <div className="absolute top-10 left-10 w-8 h-8 bg-dominus/10 rounded-full blur-xl group-hover:bg-dominus/20 transition-all duration-300" />
              <div className="relative z-10">
                <div className="text-dominus text-2xl mb-4 font-black">✦</div>
                <h3 className="text-2xl font-bold mb-4 text-text-white">{item.title}</h3>
                <p className="text-text-gray leading-relaxed text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gráfico de Distribuição */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-4xl mx-auto border-t border-white/10 pt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-text-white">Distribuição do Time Dominus</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              { percent: "50%", label: "Estratégico" },
              { percent: "30%", label: "Operacional" },
              { percent: "20%", label: "Controle de Qualidade" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-dominus mb-2">{item.percent}</div>
                <div className="text-text-gray font-medium uppercase tracking-widest text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
