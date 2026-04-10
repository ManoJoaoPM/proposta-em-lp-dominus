import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-dominus text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
            Enquanto você espera, <br className="hidden md:block" />
            sua concorrência cresce.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
            A Zona Sul de SJC tem demanda. Tem comprador buscando no Google agora. A questão é: quem vai aparecer para ele?
          </p>
          
          <a 
            href="https://wa.me/5522997561553?text=Ol%C3%A1%2C%20quero%20fechar%20a%20proposta%20Dominus%20para%20a%20OArco%20GI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-background-dark text-white font-bold text-lg px-12 py-5 rounded-xl transition-all transform hover:-translate-y-1 duration-300 shadow-2xl hover:bg-background-medium hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          >
            Fechar proposta via WhatsApp
          </a>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <span className="block text-xs font-bold tracking-widest uppercase text-white/70">
              Dominus Marketing · dominusmarketing.ltda@gmail.com · @dominusmkt
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
