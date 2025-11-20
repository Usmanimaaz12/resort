import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Anchor, Wine, Sunset } from 'lucide-react';
import { Experience } from '../types';

const experiencesData: (Experience & { icon: React.ReactNode, fullDescription: string })[] = [
  {
    id: 1,
    title: "Holistic Wellness",
    description: "Rejuvenate in our overwater spa.",
    fullDescription: "Surrender to the soothing sounds of the ocean as expert therapists guide you through ancient healing rituals. Our overwater spa features glass floors, allowing you to gaze at the marine life while finding inner peace.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2670&auto=format&fit=crop", // Spa
    icon: <Compass className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Underwater Dining",
    description: "A culinary journey beneath the waves.",
    fullDescription: "Experience the world's first all-glass undersea restaurant. Savor a contemporary European menu while 16 feet below sea level, surrounded by the vibrant coral reef and its inhabitants.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop", // Dining
    icon: <Wine className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Sunset Yachting",
    description: "Champagne cruise into the horizon.",
    fullDescription: "Board our luxury yacht 'The Azure' for a private sunset cruise. Enjoy free-flowing champagne and canapés as you witness the sky turn into a canvas of gold and violet.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2670&auto=format&fit=crop", // Yacht
    icon: <Anchor className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Private Sandbank",
    description: "Escape to your own private island.",
    fullDescription: "For the ultimate romantic gesture, we whisk you away to a secluded sandbank. Just you, your loved one, a picnic basket, and the endless turquoise ocean.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop", // Beach
    icon: <Sunset className="w-6 h-6" />
  }
];

interface ExperiencesProps {
    onInquire: (experience: string) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onInquire }) => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section id="experiences" className="py-32 bg-navy-900 overflow-hidden relative">
       {/* Section Header */}
       <div className="container mx-auto px-6 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Unforgettable Moments</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">Curated Experiences</h2>
          </motion.div>
       </div>

       {/* Interactive Accordion */}
       <div className="h-[650px] md:h-[750px] flex flex-col md:flex-row w-full border-t border-b border-white/10">
          {experiencesData.map((exp) => (
             <motion.div
                key={exp.id}
                layout
                onClick={() => setActiveId(exp.id)}
                className={`relative h-full cursor-pointer group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${activeId === exp.id ? 'flex-[4] md:flex-[5]' : 'flex-1 hidden md:flex hover:flex-[1.5] grayscale-[0.5] hover:grayscale-0'}
                  border-b md:border-b-0 md:border-r border-white/10 last:border-r-0
                `}
             >
                {/* Background Image */}
                <img 
                    src={exp.image} 
                    alt={exp.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${activeId === exp.id ? 'scale-105' : 'scale-110 group-hover:scale-105'}`}
                />
                
                {/* Gradient Overlay - Stronger for text readability */}
                <div className={`absolute inset-0 bg-gradient-to-b from-navy-900/10 via-transparent to-navy-900/90 transition-opacity duration-500 ${activeId === exp.id ? 'opacity-90' : 'opacity-60 group-hover:opacity-40'}`} />
                
                {/* Dark Tint for inactive items */}
                <div className={`absolute inset-0 bg-navy-900/40 transition-opacity duration-500 ${activeId === exp.id ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    
                    {/* Collapsed Label (Desktop) */}
                    {activeId !== exp.id && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-6 z-20">
                            <span className="text-gold-400 font-serif text-xl">0{exp.id}</span>
                            <div className="w-[1px] h-12 bg-white/20" />
                            <span className="writing-mode-vertical text-white uppercase tracking-[0.3em] text-xs font-bold opacity-90 rotate-180 whitespace-nowrap">{exp.title}</span>
                        </div>
                    )}

                    {/* Active Content */}
                    <AnimatePresence mode="wait">
                        {activeId === exp.id && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="max-w-xl relative z-20"
                            >
                                <div className="flex items-center gap-4 text-gold-400 mb-6">
                                    <span className="font-serif text-3xl opacity-50">0{exp.id}</span>
                                    <div className="h-[1px] w-12 bg-gold-400/50" />
                                    <span className="text-xs uppercase tracking-widest font-bold">Signature</span>
                                </div>
                                
                                <h3 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-none">{exp.title}</h3>
                                
                                <p className="text-white/90 text-lg font-light leading-relaxed mb-10 border-l-2 border-gold-400 pl-6">
                                    {exp.fullDescription}
                                </p>
                                
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onInquire(exp.title);
                                    }}
                                    className="group flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold hover:text-gold-400 transition-colors"
                                >
                                    <span className="border-b border-white group-hover:border-gold-400 pb-1 transition-all">Book This Experience</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Only Collapsed Title */}
                    <div className="md:hidden">
                        {activeId !== exp.id && (
                             <h3 className="text-white font-serif text-2xl">{exp.title}</h3>
                        )}
                    </div>
                </div>
             </motion.div>
          ))}
       </div>
    </section>
  );
};