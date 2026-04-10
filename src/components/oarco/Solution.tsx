import { motion } from 'framer-motion';

const solutions = [
  {
    num: "01",
    title: "Estudo de Mercado",
    desc: "Definição de leilões e estratégia para dominar regiões específicas da Zona Sul. Mapeamos o comportamento de busca do comprador de alto padrão em SJC e configuramos cada campanha para aparecer exatamente onde ele está procurando. Quem acha, não sabe. Quem mede, domina."
  },
  {
    num: "02",
    title: "Domínio via Google Ads",
    desc: "Campanhas estruturadas para vendas de condomínio de alto padrão na Zona Sul. Lances inteligentes, palavras-chave de alta intenção, anúncios que filtram o perfil antes mesmo do clique. Cada real investido atinge quem tem capacidade e intenção de compra."
  },
  {
    num: "03",
    title: "Funil Sem Gargalo",
    desc: "Análise e correção de qualquer ponto no site que possa frear a conversão. Do clique ao lead e do lead à visita, cada etapa rastreada, medida e otimizada. Tracking completo com GTM, GA4 e dashboards em tempo real para decisões baseadas em dado."
  },
  {
    num: "04",
    title: "Aumento de Pontos de Contato",
    desc: "Estratégia conjunta entre Google Ads e a produção de conteúdo existente para gerar encadeamento de visualizações. O mesmo comprador que pesquisa no Google encontra a OArco no Instagram, no YouTube e no remarketing, construindo autoridade indiscutível na região."
  }
];

export function Solution() {
  return (
    <section id="solucao" className="py-24 md:py-32 bg-background-dark text-text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(232,113,10,0.06)_0%,rgba(13,13,13,1)_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">O que será feito</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Quatro movimentos para <br className="hidden md:block"/>
            <span className="text-dominus">dominar a Zona Sul.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-gray font-regular leading-relaxed max-w-3xl mx-auto">
            Cada etapa resolve um ponto específico. Sem ação genérica, sem pacote pronto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-background-medium p-8 md:p-10 border-l-4 border-l-dominus rounded-r-2xl hover:bg-background-medium/80 transition-colors duration-300 group"
            >
              <div className="text-4xl font-black text-dominus/20 group-hover:text-dominus/40 transition-colors duration-300 mb-6">
                {item.num}.
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-white group-hover:text-dominus transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-text-gray leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
