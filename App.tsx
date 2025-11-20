import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Amenities } from './components/Amenities';
import { Villas } from './components/Villas';
import { Experiences } from './components/Experiences';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { ToastContainer, ToastMessage } from './components/Toast';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const addToast = (message: string, type: 'success' | 'info' = 'info') => {
      const id = Math.random().toString(36).substring(7);
      setToasts(prev => [...prev, { id, message, type }]);
      setTimeout(() => {
          setToasts(prev => prev.filter(t => t.id !== id));
      }, 4000);
  };

  const removeToast = (id: string) => {
      setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <main className="font-sans text-navy-900 antialiased relative">
          {/* Global Noise Overlay is in index.html via CSS class .bg-noise, but we can also add it here if we want more control */}
          
          <Header onOpenBooking={() => setIsBookingOpen(true)} />
          
          <Hero />
          
          <Amenities />
          
          <Villas onOpenBooking={() => setIsBookingOpen(true)} />
          
          <Experiences onInquire={(item) => addToast(`Inquiry sent for ${item}. Our concierge will contact you.`)} />
          
          <Reviews />
          
          <Gallery />
          
          {/* Location Section */}
          <section id="location" className="h-[500px] w-full relative bg-stone-200 flex items-center justify-center overflow-hidden group">
             <img 
                src="https://picsum.photos/1920/400?random=99" 
                alt="Map" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000" 
             />
             <div className="relative z-10 bg-white p-10 shadow-2xl max-w-md text-center border-t-4 border-gold-400">
                <h3 className="font-serif text-3xl mb-3 text-navy-900">Getting Here</h3>
                <p className="text-stone-500 mb-8 leading-relaxed">A 45-minute scenic seaplane journey from Velana International Airport offering breathtaking views of the atolls.</p>
                <button 
                    onClick={() => addToast('Flight schedule downloaded to your device.', 'success')}
                    className="text-navy-900 uppercase font-bold text-xs tracking-[0.2em] border-b border-gold-400 pb-1 hover:text-gold-500 transition-colors"
                >
                    View Flight Schedules
                </button>
             </div>
          </section>
          
          <Footer />
          
          <FloatingActions />
          
          <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
          
          <ToastContainer toasts={toasts} removeToast={removeToast} />
        </main>
      )}
    </ReactLenis>
  );
}

export default App;