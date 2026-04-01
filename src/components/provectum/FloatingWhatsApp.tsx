import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a 
        href="#"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </motion.div>
  );
}
