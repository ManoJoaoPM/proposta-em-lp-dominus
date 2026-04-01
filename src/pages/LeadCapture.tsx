import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function LeadCapture() {
  useEffect(() => {
    document.title = "Faça sua proposta conosco - Dominus";
  }, []);

  return (
    <main className="font-sans antialiased bg-background-dark min-h-screen text-text-white relative overflow-hidden flex items-center justify-center">
      {/* Background Image / Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,113,10,0.15)_0%,rgba(13,13,13,1)_70%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-20 max-w-5xl py-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Logo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <img src="/logo-d.png" alt="Dominus" className="w-30 h-20 object-contain" />
          </motion.div>

          <span className="text-sm font-bold tracking-[0.2em] text-dominus uppercase mb-6 block">
            Assessoria de Marketing Imobiliário
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
            Está na hora da sua imobiliária <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dominus to-[#FF9900]">
              ser a mais lembrada.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text-gray font-regular max-w-3xl mx-auto mb-16 leading-relaxed">
            Nós não entregamos conteúdo. Entregamos um sistema de crescimento focado em volume, dados e posicionamento. 
            <strong className="text-text-white"> Clique abaixo para construir uma proposta personalizada para a sua rede.</strong>
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=5522997561553&text=Ol%C3%A1%2C+vim+pelo+site+de+propostas.+Quero+uma+proposta+personalizada+para+a+minha+imobili%C3%A1ria." // Coloque o link real do wpp aqui
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-dominus text-white font-bold text-xl rounded-xl hover:bg-[#D16508] transition-all shadow-[0_10px_40px_rgba(232,113,10,0.3)] hover:shadow-[0_15px_50px_rgba(232,113,10,0.5)]"
            >
              <MessageCircle className="w-7 h-7" />
              Faça sua proposta personalizada
            </a>
          </motion.div>

          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 text-text-gray font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-dominus" />
              Análise de Concorrentes
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-dominus" />
              Diretório de Conteúdo
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-dominus" />
              Acompanhamento de Vendas
            </div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}