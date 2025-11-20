import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-navy-900 flex items-center justify-center"
    >
      <div className="text-center relative">
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-24 h-24 border border-white/20 mx-auto mb-8 rotate-45 flex items-center justify-center relative"
        >
             <div className="absolute inset-2 border border-white/10" />
             <div className="w-8 h-8 bg-gold-400 -rotate-45 shadow-[0_0_30px_rgba(212,175,55,0.5)]" />
        </motion.div>
        
        <div className="overflow-hidden">
            <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl text-white tracking-[0.2em] font-bold"
            >
            AZUREA
            </motion.h1>
        </div>
        
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gold-400 text-xs uppercase tracking-[0.4em] mt-4"
        >
            Luxury Defined
        </motion.p>
      </div>
    </motion.div>
  );
};