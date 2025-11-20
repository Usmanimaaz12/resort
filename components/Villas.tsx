import React from 'react';
import { motion } from 'framer-motion';
import { Villa } from '../types';
import { ArrowRight, Maximize2, Wifi, User } from 'lucide-react';

const villas: Villa[] = [
  {
    id: 1,
    name: "Ocean Overwater Villa",
    price: "from $1,200",
    capacity: "2 Guests",
    size: "120 sqm",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop", // Authentic Overwater bungalow
    features: ["Private Pool", "Ocean Access", "Sunset View"]
  },
  {
    id: 2,
    name: "Beachfront Sanctuary",
    price: "from $1,500",
    capacity: "4 Guests",
    size: "200 sqm",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop", // Luxury Interior
    features: ["Direct Beach Access", "Private Garden", "Outdoor Bath"]
  },
  {
    id: 3,
    name: "The Royal Residence",
    price: "from $5,000",
    capacity: "8 Guests",
    size: "500 sqm",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop", // Modern Villa
    features: ["Private Chef", "Cinema Room", "Dedicated Butler"]
  }
];

interface VillasProps {
    onOpenBooking: () => void;
}

export const Villas: React.FC<VillasProps> = ({ onOpenBooking }) => {
  return (
    <section id="villas" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block mb-6 font-bold">Accommodations</span>
          <h2 className="font-serif text-5xl md:text-6xl text-navy-900 leading-tight">Villas & Suites</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {villas.map((villa, index) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={onOpenBooking}
            >
              {/* Image Container */}
              <div className="relative h-[500px] w-full overflow-hidden mb-6">
                <img 
                  src={villa.image} 
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500" />
                
                {/* Hover Button */}
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white/95 text-navy-900 px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold-400 hover:text-white transition-colors flex items-center gap-2">
                        View Details <ArrowRight size={14} />
                    </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl text-navy-900 group-hover:text-gold-500 transition-colors duration-300">{villa.name}</h3>
                </div>
                
                <p className="text-gold-500 font-medium text-lg mb-4">{villa.price} <span className="text-stone-400 text-sm font-light">/ night</span></p>
                
                <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-6 text-stone-500 text-sm font-light">
                   <span className="flex items-center gap-2">
                       <User size={14} /> {villa.capacity}
                   </span>
                   <span className="w-1 h-1 bg-stone-300 rounded-full" />
                   <span>{villa.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};