import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const includes = [
  "Estudo de mercado e estratégia de leilão Google Ads",
  "Gestão ativa de campanhas na Zona Sul de SJC",
  "Auditoria e otimização do funil no site da OArco",
  "Tracking completo (GTM, GA4, UTMs, Dashboard)",
  "Relatório mensal com comparativos e projeções",
  "WhatsApp group dedicado com resposta ágil",
  "Consultoria de crescimento com visão 360° do negócio",
  "Acesso ao ecossistema Dominus de imobiliárias referência",
  "Time de 5 profissionais dedicados ao projeto"
];

export function Investment() {
  return (
    <section id="preco" className="py-24 md:py-32 relative bg-background-dark text-text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(232,113,10,0.08)_0%,transparent_65%)]" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Investimento</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Um projeto completo.<br className="hidden md:block"/>
            <span className="text-dominus">Uma decisão.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-gray font-regular leading-relaxed max-w-3xl mx-auto">
            Tudo que a OArco precisa para dominar a Zona Sul de SJC com método, dados e previsibilidade.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-medium/60 backdrop-blur-sm border border-white/5 rounded-3xl p-10 md:p-16 mb-8 relative overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-dominus to-dominus-alt" />
            
            <div className="inline-block text-xs font-bold tracking-widest uppercase bg-dominus/10 text-dominus px-4 py-2 rounded-full mb-8">
              Plano Geração de Demanda Qualificada
            </div>
            
            <div className="text-6xl md:text-[80px] font-black text-text-white tracking-tight leading-none mb-2">
              <sup className="text-3xl md:text-4xl align-super mr-2 font-bold text-text-gray">R$</sup>2.800
            </div>
            
            <div className="text-sm font-bold tracking-widest uppercase text-text-gray mb-12">
              por mês · gestão completa (verba de mídia à parte)
            </div>

            <ul className="list-none text-left mb-12 max-w-xl mx-auto space-y-4">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-none last:pb-0 text-text-gray text-base md:text-lg">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-dominus/10 text-dominus shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* <a 
              href="#cta" 
              className="block w-full max-w-md mx-auto text-center bg-dominus text-white font-bold text-lg px-10 py-5 rounded-xl transition-all transform hover:-translate-y-1 duration-300 shadow-[0_8px_30px_rgba(232,113,10,0.3)] hover:bg-dominus-alt"
            >
              Quero fechar agora
            </a> */}

            <div className="text-center mt-8">
              <div className="inline-flex items-center justify-center gap-3 bg-dominus/10 border border-dominus/20 px-6 py-3 rounded-full text-sm font-bold text-dominus mx-auto w-full sm:w-auto">
                💡 Equivale a uma economia mínima de R$10.000/mês em contratações internas
              </div>
            </div>
          </motion.div>

          <p className="text-center text-text-gray text-base leading-relaxed">
            Time comissionado pelo seu sucesso. Não especulamos resultados e provamos com dado.<br className="hidden md:block"/>
            A verba de mídia (Google Ads) é investida diretamente pela OArco na plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
