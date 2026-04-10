import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-background-dark overflow-hidden pb-12 pt-20">
      {/* Background with low opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-dominus/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dominus/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-background-dark/80 pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src="/logo-institucional-white.png"
                alt="Logo Dominus"
                className="w-48 md:w-56 h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-text-gray/80 uppercase border border-white/10 rounded-full px-6 py-2.5 bg-white/5">
                Proposta personalizada · OArco
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.05] text-text-white mb-8 tracking-tight">
              A Zona Sul <br className="hidden md:block" />
              de SJC vai <br className="hidden md:block" />
              ser <span className="text-dominus">sua.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-gray font-regular max-w-xl mb-12 leading-relaxed">
              Enquanto sua concorrência paga por <strong className="text-text-white font-bold">atenção</strong>, você vai pagar por <strong className="text-text-white font-bold">intenção</strong>.<br className="hidden md:block" />
              Quem pesquisa no Google quer comprar agora. A Dominus coloca a OArco na frente deles.
            </p>
            
            {/*<div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href="#calculadora" className="w-full sm:w-auto px-10 py-5 bg-dominus text-white font-bold text-lg rounded-lg hover:bg-dominus-alt transition-all transform hover:-translate-y-1 duration-300 shadow-[0_8px_30px_rgba(232,113,10,0.3)] text-center">
                Ver minha projeção
              </a>
              <a href="#preco" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/10 text-text-white hover:border-white/30 font-bold text-lg rounded-lg transition-all transform hover:-translate-y-1 duration-300 text-center">
                Ver proposta completa
              </a>
            </div>*/}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="bg-background-medium/60 backdrop-blur-sm border border-white/5 rounded-3xl p-10 mb-6 relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-dominus" />
              <div className="text-xs font-bold tracking-widest uppercase text-text-gray mb-3">Foco principal</div>
              <div className="text-5xl font-black text-dominus tracking-tight mb-2">Google Ads</div>
              <div className="text-base text-text-gray">Captura de intenção, porque quem pesquisa quer comprar</div>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-background-medium/60 backdrop-blur-sm border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-dominus" />
                <div className="text-[10px] font-bold tracking-widest uppercase text-text-gray mb-3">Região alvo</div>
                <div className="text-3xl font-black text-text-white tracking-tight mb-1">Zona Sul</div>
                <div className="text-sm text-text-gray">São José dos Campos</div>
              </div>
              {/* <div className="bg-background-medium/60 backdrop-blur-sm border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-dominus" />
                <div className="text-[10px] font-bold tracking-widest uppercase text-text-gray mb-3">Investimento mensal</div>
                <div className="text-3xl font-black text-text-white tracking-tight mb-1">R$2.800</div>
                <div className="text-sm text-text-gray">Gestão completa</div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
