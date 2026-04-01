import { motion } from 'framer-motion';
import { Video, FolderOpen, BarChart3, Target } from 'lucide-react';

export function Deliverables() {
  return (
    <section className="py-24 md:py-32 bg-background-light text-text-dark">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">O Plano Essencial</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            O que está incluído no projeto
          </h2>
          <p className="text-xl text-text-gray font-medium">Personalizado para Rede Provectum</p>
        </motion.div>

        {/* Entregáveis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 max-w-5xl mx-auto">
          {[
            {
              icon: <Video className="w-8 h-8 text-dominus" />,
              title: "Conteúdo Mensal",
              items: [
                "60 conteúdos por mês (30 vídeos e 30 posts)",
                "2 diárias de captação de vídeos profissionais (até 10 vídeos por diária)"
              ]
            },
            {
              icon: <FolderOpen className="w-8 h-8 text-dominus" />,
              title: "Organização",
              items: [
                "Diretório de conteúdo para 3 unidades",
                "Scripts e referências prontas para os corretores",
                "Acompanhamento individual com as unidades"
              ]
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-dominus" />,
              title: "Controle",
              items: [
                "Controle de crescimento: perfis Provectum x concorrentes",
                "Metrificação mês a mês",
                "Relatórios de desempenho"
              ]
            },
            {
              icon: <Target className="w-8 h-8 text-dominus" />,
              title: "Estratégia",
              items: [
                "Estruturação de metas e benefícios para unidades (gamificação)",
                "Elaboração de campanhas e designs para mídia externa",
                "Planejamento editorial com foco em frequência e conversão"
              ]
            }
          ].map((block, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/5"
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-black/5">
                <div className="p-3 bg-dominus/10 rounded-lg">
                  {block.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-dark">{block.title}</h3>
              </div>
              <ul className="space-y-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-dominus mt-1 font-bold">•</span>
                    <span className="text-lg text-text-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Badge de Destaque */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-dominus text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-[0_16px_40px_rgba(232,113,10,0.25)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <p className="text-xl md:text-3xl font-bold leading-relaxed relative z-10">
            Um time de 7 profissionais dedicados à Provectum. <br className="hidden md:block"/>
            O equivalente a uma economia de pelo menos <strong className="font-black text-4xl">R$21.000/mês</strong> em contratações internas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
