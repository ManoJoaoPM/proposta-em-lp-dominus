import { motion } from 'framer-motion';

export function Solution() {
  return (
    <section className="py-24 md:py-32 bg-background-dark text-text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(232,113,10,0.06)_0%,rgba(13,13,13,1)_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">A Solução</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Fortalecimento de marca com método. <br className="hidden md:block"/>
            <span className="text-dominus">Não com improviso.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-gray font-regular leading-relaxed max-w-3xl mx-auto">
            A Dominus não entrega conteúdo. Entrega sistema. Um projeto construído especificamente para a Rede Provectum — para que em 12 meses, <strong className="text-text-white">qualquer campineiro que pense em imóvel pense em Provectum.</strong>
          </p>
        </motion.div>

        {/* 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Rastreio Total",
              desc: "\"O que não se mede não se otimiza.\" Controle de crescimento dos perfis da Provectum versus concorrentes. Métricas reais. Dados que orientam decisões e não achismos."
            },
            {
              num: "02",
              title: "Organização e Execução",
              desc: "Diretório mensal de conteúdo para as unidades. Scripts prontos para os corretores. Planejamento, edição e publicação. Frequência de 2 publicações por dia com identidade unificada."
            },
            {
              num: "03",
              title: "Expansão de Presença",
              desc: "Além do digital: campanhas e designs para mídia externa. Eventos, banners, parcerias. A Provectum vista em todo lugar, online e offline."
            }
          ].map((item, i) => (
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
