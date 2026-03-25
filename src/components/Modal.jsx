
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b dark:border-gray-800">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button
                onClick={onClose}
                className="text-4xl leading-none text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </div>

            {/* Contenido (iframe) */}
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}