import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "Eleanor & James",
    location: "London, UK",
    rating: 5,
    text: "The attention to detail is unmatched. From the private villa amenities to the personalized dining experiences, Azurea is truly paradise on earth.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Alexander Wright",
    location: "New York, USA",
    rating: 5,
    text: "I've traveled to many resorts, but the spa service here is on another level. A spiritual journey I will never forget.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Tranquility refined. The architecture blends perfectly with nature. The sunset cruise was the highlight of our honeymoon.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-32 bg-navy-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold-400/5 rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <Star className="w-6 h-6 text-gold-400 mx-auto mb-6" fill="currentColor" />
                <h2 className="font-serif text-4xl md:text-6xl mb-6">Guest Stories</h2>
                <p className="text-white/60 text-lg font-light tracking-wide">Memories made in paradise.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="bg-white/5 backdrop-blur-md p-10 border border-white/5 rounded-sm hover:border-gold-400/30 transition-colors group"
                    >
                        <Quote className="w-10 h-10 text-gold-400 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <p className="text-lg font-light italic mb-10 leading-relaxed text-white/80 min-h-[120px]">"{review.text}"</p>
                        <div className="flex items-center gap-5">
                            <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border border-white/10 group-hover:border-gold-400 transition-colors" />
                            <div>
                                <h4 className="font-serif text-lg text-white">{review.name}</h4>
                                <span className="text-xs uppercase tracking-widest text-gold-400/70">{review.location}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};