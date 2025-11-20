import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const handleExploreClick = () => {
      const element = document.getElementById('villas');
      if(element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        {/* High-quality Maldives Aerial Shot */}
        <img 
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2674&auto=format&fit=crop" 
          alt="Azurea Resort Ocean View" 
          className="w-full h-[120%] object-cover object-center brightness-90"
        />
        {/* Sophisticated Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/80" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-12">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center"
        >
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-gold-300 mb-8 opacity-80" />
            <span className="block text-gold-300 text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium drop-shadow-md">
              Welcome to Azurea
            </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium leading-[1.1] mb-8 drop-shadow-2xl tracking-tight"
        >
          Beyond <br/>
          <span className="italic font-light text-gold-300/90">Paradise</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide text-shadow-sm"
        >
          Where infinite horizons meet bespoke luxury. Your private sanctuary on the edge of the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
            <button 
                onClick={handleExploreClick}
                className="group relative px-12 py-5 overflow-hidden transition-all hover:scale-105 duration-500"
            >
                {/* Glassmorphism Button Style */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/40 group-hover:border-gold-400/80 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-400/20 to-gold-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <span className="relative z-10 font-serif text-lg tracking-[0.2em] text-white group-hover:text-gold-300 transition-colors">
                    Discover More
                </span>
            </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-3 cursor-pointer hover:text-white transition-colors"
        onClick={handleExploreClick}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold-400/80 animate-float blur-[1px]" />
        </div>
      </motion.div>
    </section>
  );
};