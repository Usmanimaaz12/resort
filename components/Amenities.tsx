import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Coffee, Utensils, Anchor, Sparkles, Sun, ChevronRight, ChevronLeft } from 'lucide-react';
import { Amenity } from '../types';

const amenities: Amenity[] = [
  { id: 1, title: "Private Beach", icon: <Sun className="w-6 h-6" />, description: "Exclusive access to pristine white sands." },
  { id: 2, title: "Michelin Dining", icon: <Utensils className="w-6 h-6" />, description: "Culinary masterpieces from world-renowned chefs." },
  { id: 3, title: "World-Class Spa", icon: <Sparkles className="w-6 h-6" />, description: "Rejuvenate your body and soul." },
  { id: 4, title: "Yacht Service", icon: <Anchor className="w-6 h-6" />, description: "Explore the archipelago in style." },
  { id: 5, title: "Butler Service", icon: <Coffee className="w-6 h-6" />, description: "24/7 personalized attention." },
  { id: 6, title: "High-Speed Wi-Fi", icon: <Wifi className="w-6 h-6" />, description: "Stay connected, even in paradise." },
];

export const Amenities: React.FC = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-32 bg-sand-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-lg">
            <h2 className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">Luxury Included</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-navy-900 leading-tight">Refined Amenities</h3>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
                <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={ref}
          className="relative"
        >
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
            >
            {amenities.map((item, index) => (
                <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[280px] md:min-w-[340px] bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] snap-start group hover:bg-navy-900 hover:text-white transition-all duration-500 cursor-default relative overflow-hidden"
                >
                {/* Hover Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="w-14 h-14 rounded-full bg-sand-100 flex items-center justify-center text-navy-900 mb-8 group-hover:bg-white/10 group-hover:text-gold-400 transition-colors">
                    {item.icon}
                </div>
                <h4 className="font-serif text-2xl mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-7 group-hover:text-white/70 transition-colors">
                    {item.description}
                </p>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};