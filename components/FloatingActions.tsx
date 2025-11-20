import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-end">
            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-navy-900 hover:bg-gold-400 hover:text-white transition-colors"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
            
            <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
                <span className="hidden md:block font-medium text-sm">Chat with Concierge</span>
                <MessageCircle size={24} />
            </a>
        </div>
    );
};