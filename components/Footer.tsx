import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      if(email) {
          setSubscribed(true);
          setEmail('');
      }
  }

  return (
    <footer className="bg-navy-900 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-16">
            {/* Brand */}
            <div className="space-y-8">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center rotate-45">
                        <div className="w-4 h-4 bg-gold-400 -rotate-45" />
                    </div>
                    <span className="font-serif text-3xl tracking-widest font-bold">AZUREA</span>
                 </div>
                 <p className="text-white/50 leading-relaxed text-sm max-w-xs">
                     A sanctuary for the soul, where luxury meets nature in perfect harmony. Experience the extraordinary.
                 </p>
                 <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all">
                         <Instagram size={18} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all">
                         <Facebook size={18} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all">
                         <Twitter size={18} />
                     </a>
                 </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="font-serif text-xl mb-8">Resort</h4>
                <ul className="space-y-4 text-sm text-white/60">
                    <li><a href="#villas" className="hover:text-gold-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Villas & Suites</a></li>
                    <li><a href="#dining" className="hover:text-gold-400 transition-colors">Dining</a></li>
                    <li><a href="#experiences" className="hover:text-gold-400 transition-colors">Experiences</a></li>
                    <li><a href="#spa" className="hover:text-gold-400 transition-colors">Spa & Wellness</a></li>
                    <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-serif text-xl mb-8">Contact Us</h4>
                <ul className="space-y-6 text-sm text-white/60">
                    <li className="flex gap-4 items-start">
                        <MapPin size={20} className="text-gold-400 shrink-0 mt-1" />
                        <span>Noonu Atoll, Republic of Maldives<br/>P.O. Box 20000</span>
                    </li>
                    <li className="flex gap-4">
                        <Phone size={20} className="text-gold-400 shrink-0" />
                        <span>+960 555 0123</span>
                    </li>
                    <li className="flex gap-4">
                        <Mail size={20} className="text-gold-400 shrink-0" />
                        <span>reservations@azurea.com</span>
                    </li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="font-serif text-xl mb-8">Newsletter</h4>
                <p className="text-white/60 text-sm mb-6">Subscribe to receive exclusive offers and updates from paradise.</p>
                {!subscribed ? (
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email Address" 
                            required
                            className="bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-white/30"
                        />
                        <button type="submit" className="bg-gold-400 text-navy-900 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                            Subscribe
                        </button>
                    </form>
                ) : (
                    <div className="bg-white/10 p-6 rounded border border-green-500/30 flex flex-col items-center text-center gap-3 text-green-400">
                        <Check size={32} />
                        <span className="text-sm font-medium">You are now on the guest list.</span>
                    </div>
                )}
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest">
            <p>&copy; 2025 Azurea Resort. All Rights Reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
        </div>
      </div>
    </footer>
  );
};