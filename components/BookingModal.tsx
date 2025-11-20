import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, ArrowRight, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-navy-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-2xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh] relative rounded-lg">
              {/* Header */}
              <div className="bg-navy-900 p-8 flex justify-between items-center">
                <div>
                    <span className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">Reservations</span>
                    <h2 className="font-serif text-3xl text-white">Your Sanctuary Awaits</h2>
                </div>
                <button 
                    onClick={onClose} 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-400 hover:text-navy-900 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 md:p-12 bg-sand-50 flex-1 overflow-y-auto">
                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <label className="block text-xs uppercase tracking-wider font-bold text-navy-900/50 mb-2">
                                    Check In
                                </label>
                                <input type="date" required className="w-full bg-transparent border-b border-stone-300 py-3 text-navy-900 focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg" />
                            </div>
                            <div className="relative group">
                                <label className="block text-xs uppercase tracking-wider font-bold text-navy-900/50 mb-2">
                                    Check Out
                                </label>
                                <input type="date" required className="w-full bg-transparent border-b border-stone-300 py-3 text-navy-900 focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="relative">
                                <label className="block text-xs uppercase tracking-wider font-bold text-navy-900/50 mb-2">
                                    Guests
                                </label>
                                <select className="w-full bg-transparent border-b border-stone-300 py-3 text-navy-900 focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg appearance-none cursor-pointer">
                                    <option>2 Adults</option>
                                    <option>2 Adults, 1 Child</option>
                                    <option>2 Adults, 2 Children</option>
                                    <option>4 Adults</option>
                                </select>
                                <div className="absolute right-0 bottom-4 pointer-events-none text-stone-400">
                                    <ChevronDown size={16} />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-xs uppercase tracking-wider font-bold text-navy-900/50 mb-2">
                                    Preferred Villa
                                </label>
                                <select className="w-full bg-transparent border-b border-stone-300 py-3 text-navy-900 focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg appearance-none cursor-pointer">
                                    <option>No Preference</option>
                                    <option>Ocean Overwater Villa</option>
                                    <option>Beachfront Sanctuary</option>
                                    <option>The Royal Residence</option>
                                </select>
                                <div className="absolute right-0 bottom-4 pointer-events-none text-stone-400">
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-navy-900 text-white py-5 text-sm uppercase tracking-[0.2em] font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70 group shadow-lg hover:shadow-xl"
                            >
                                {isLoading ? (
                                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>Check Availability <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-12 flex flex-col items-center justify-center h-full animate-fade-in">
                        <div className="w-24 h-24 bg-gold-400/10 text-gold-500 rounded-full flex items-center justify-center mb-8">
                            <Check size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-4xl text-navy-900 mb-4">Request Received</h3>
                        <p className="text-stone-500 mb-8 max-w-md leading-relaxed text-lg font-light">
                            Thank you for choosing Azurea. Our concierge team is currently reviewing your request and will send a personalized confirmation to your email shortly.
                        </p>
                        <button 
                            onClick={onClose}
                            className="px-12 py-4 border border-navy-900 text-navy-900 uppercase text-xs font-bold tracking-[0.2em] hover:bg-navy-900 hover:text-white transition-all duration-300"
                        >
                            Return to Resort
                        </button>
                    </div>
                )}
              </div>

              {/* Footer Note */}
              {!isSuccess && (
                  <div className="p-6 bg-sand-100 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 flex items-center justify-center gap-4">
                        <span>Best Rate Guarantee</span>
                        <span className="w-1 h-1 bg-stone-300 rounded-full" />
                        <span>Instant Confirmation</span>
                    </p>
                  </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Helper component for custom select arrow
const ChevronDown = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);