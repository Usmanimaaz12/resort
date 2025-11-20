import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info } from 'lucide-react';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info';
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-24 right-6 z-[80] flex flex-col gap-4 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            layout
            className="bg-white shadow-xl border-l-4 border-gold-400 p-4 min-w-[300px] flex items-start gap-3 pointer-events-auto"
          >
             <div className="text-gold-400 mt-1">
                {toast.type === 'success' ? <CheckCircle size={20} /> : <Info size={20} />}
             </div>
             <div>
                 <h4 className="font-serif text-navy-900 font-medium">
                    {toast.type === 'success' ? 'Success' : 'Information'}
                 </h4>
                 <p className="text-stone-500 text-sm">{toast.message}</p>
             </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};