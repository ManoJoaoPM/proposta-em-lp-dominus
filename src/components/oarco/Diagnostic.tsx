import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export function Diagnostic() {
  return (
    <section id="diagnostico" className="py-24 md:py-32 bg-background-light text-text-dark">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">O problema real</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-text-dark">
              Você não tem problema <br className="hidden md:block" /> de produto.
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-text-gray">
              Tem problema <br className="hidden md:block" /> de canal.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-text-dark/80 max-w-2xl leading-relaxed">
              <p>
                A OArco tem portfólio de alto padrão, equipe treinada e presença no Instagram. Mesmo assim, o mês fecha com menos vendas do que deveria.
              </p>
              <p className="font-bold text-text-dark">
                A razão é simples: rede social gera atenção. Google gera intenção.
              </p>
              <p>
                Existe uma diferença enorme entre quem viu seu imóvel enquanto rolava o feed... e quem abriu o Google e digitou <em>"casa em condomínio Zona Sul São José dos Campos"</em>.
              </p>
              <p>
                Um tem curiosidade. O outro tem cheque na mão.
              </p>
            </div>
            
            <div className="mt-10 bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-l-4 border-dominus">
              <p className="text-lg font-bold text-text-dark leading-relaxed">
                Mensagem no WhatsApp não é conversão.<br/>
                Conversão é venda. E venda começa com intenção.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden border border-black/5">
              <div className="p-8 md:p-10 border-b border-black/5 bg-background-light/50">
                <div className="text-xs font-bold tracking-widest uppercase mb-6">
                  Antes · Canal de atenção
                </div>
                <ul className="space-y-4">
                  {[
                    "Lead frio que chegou sem intenção de compra",
                    "Alcance amplo com perfil desalinhado",
                    "Corretor perde tempo qualificando do zero",
                    "Impossível controlar qual região dominar",
                    "Volume de leads sem previsibilidade de venda"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-text-gray/90 text-base md:text-lg">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-text-gray/10 text-text-gray shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 md:p-10 bg-white relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-dominus" />
                <div className="text-xs font-bold tracking-widest uppercase text-dominus mb-6">
                  Depois · Canal de intenção
                </div>
                <ul className="space-y-4">
                  {[
                    "Lead quente que buscou ativamente o imóvel",
                    "Segmentação por região, bairro e tipo de imóvel",
                    "Corretor entra em cena já com perfil qualificado",
                    "Domínio de regiões específicas via leilão de busca",
                    "Funil rastreável do clique ao fechamento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-text-dark text-base md:text-lg font-medium">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-dominus/10 text-dominus shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
