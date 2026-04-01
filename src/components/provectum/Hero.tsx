import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0B0B0B] overflow-hidden pb-12">
      {/* Background Image with Low Opacity and pure dark overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/provectum/rede-provectum-hero-site.png')] bg-full bg-top bg-no-repeat opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-[#0B0B0B]/80" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-20 max-w-7xl pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto text-center border border-white/5 rounded-3xl p-10 md:p-16 bg-[#0B0B0B]/40 backdrop-blur-sm"
        >
          {/* Logo Dominus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <img
              src="/logo-institucional-white.png"
              alt="Logo Dominus"
              className="w-64 h-auto mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-10"
          >
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-text-gray/80 uppercase border border-white/10 rounded-full px-6 py-2.5 bg-white/5">
              Fortalecimento de marca · Campinas · Personalizado para Rede Provectum
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[1.05] text-text-white mb-10 tracking-tight">
            Não basta ser grande, <br className="hidden md:block" />
            é necessário <br className="hidden md:block" />
            se mostrar <span className="text-dominus">grande <br className="hidden md:block" /></span>
          </h1>

          <p className="text-lg md:text-xl text-text-gray font-regular max-w-4xl mx-auto mb-14 leading-relaxed">
            Esse é um projeto que irá mostrar congruência entre o tamanho real da rede e sua exponência digital. <br className="hidden md:block" />
            Iremos criar um <strong className="text-text-white font-bold">domínio inato em Campinas<br className="hidden md:block" /></strong>
          </p>

          {/*
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="w-full sm:w-auto px-10 py-5 bg-dominus text-white font-bold text-lg rounded-lg hover:bg-[#D16508] transition-all transform hover:-translate-y-1 duration-300 shadow-[0_8px_30px_rgba(232,113,10,0.3)]">
              Quero ser referência em Campinas →
            </button>
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
