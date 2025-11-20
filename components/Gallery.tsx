import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?q=80&w=2670&auto=format&fit=crop", // Pool evening
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop", // Luxury Resort
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop", // Massage
    "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2672&auto=format&fit=crop", // Beach
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop", // Drink/Food
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2574&auto=format&fit=crop", // Room
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedImage !== null) {
          setSelectedImage((selectedImage + 1) % images.length);
      }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
        setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  }

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
            <div>
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block mb-4 font-bold">Our World</span>
                <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-2">Visual Journey</h2>
            </div>
            <button className="hidden md:block text-navy-900 uppercase tracking-widest text-xs font-bold border-b border-navy-900 pb-2 hover:text-gold-500 hover:border-gold-500 transition-all">
                View All Photos
            </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => openLightbox(index)}
                    className={`relative group cursor-pointer overflow-hidden aspect-square ${index === 1 || index === 4 ? 'md:col-span-1' : ''}`}
                >
                    <img 
                        src={src} 
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            <Maximize2 size={20} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-xl flex items-center justify-center"
                onClick={closeLightbox}
            >
                <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
                    <X size={40} />
                </button>
                
                <button onClick={prevImage} className="absolute left-4 md:left-10 text-white/50 hover:text-gold-400 transition-colors p-2 z-50">
                    <ChevronLeft size={48} strokeWidth={1} />
                </button>

                <img 
                    src={images[selectedImage]} 
                    alt="Lightbox"
                    className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
                />

                <button onClick={nextImage} className="absolute right-4 md:right-10 text-white/50 hover:text-gold-400 transition-colors p-2 z-50">
                    <ChevronRight size={48} strokeWidth={1} />
                </button>
                
                <div className="absolute bottom-6 text-white/40 tracking-[0.2em] text-xs font-medium">
                    0{selectedImage + 1} — 0{images.length}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};