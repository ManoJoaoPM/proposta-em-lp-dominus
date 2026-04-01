import { motion } from 'framer-motion';

export function Diagnostic() {
  return (
    <section className="py-24 md:py-32 bg-background-light text-text-dark">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-text-dark">
              A Provectum é grande.
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-text-gray/70">
              O problema é que o mercado ainda <br className="hidden md:block" /> não sente isso.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-text-dark/80 max-w-2xl leading-relaxed">
              <p>
                Vocês trabalham com todas as faixas de VGV. Do Minha Casa Minha Vida ao alto padrão. Têm 11 unidades em Campinas, Valinhos e Paulínia. Estão entre as 20 melhores imobiliárias do Brasil no Ranking da Superlógica.
              </p>
              <p className="font-bold text-text-dark">
                Mas nas redes sociais, a Provectum parece qualquer outra imobiliária de Campinas.
              </p>
              <p>
                Não porque o produto é fraco.<br/>
                Não porque os corretores são ruins.
              </p>
              <p className="font-bold text-dominus">
                Mas porque sem diretório, sem frequência e sem dados, o que poderia ser autoridade vira ruído.
              </p>
            </div>
          </motion.div>

          {/* Imagem da Logo na direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-dominus/5 rounded-full blur-[80px] pointer-events-none" />
              <img 
                src="/provectum/logo-provectum.webp" 
                alt="Logo Rede Provectum Imóveis" 
                className="w-full h-auto object-contain relative z-10 mix-blend-multiply opacity-90"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sem diretório de conteúdo",
              desc: "Cada unidade publica o que quer, quando quer. O que deveria ser uma rede coesa parece 11 perfis sem conexão."
            },
            {
              title: "Sem dados metrificados",
              desc: "Sem medir, não há como otimizar. A Provectum investe em presença digital sem saber o que funciona, e sem ter controle do crescimento frente aos concorrentes."
            },
            {
              title: "Sem diferenciação",
              desc: "No digital, a Provectum ainda não se diferencia de imobiliárias de mesmo porte em Campinas. O tamanho que existe na operação não aparece na percepção do público."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dominus/10 text-dominus mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-dark">{item.title}</h3>
              <p className="text-text-gray leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
