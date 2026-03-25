// src/components/ExperienceModal.jsx
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperienceModal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[110] backdrop-blur-sm"
          />

          {/* Modal más alto y ancho */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-white dark:bg-gray-900 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">

              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <button 
                  onClick={onClose}
                  className="text-4xl text-gray-400 hover:text-red-500 transition-colors"
                >
                  ×
                </button>
              </div>

              {/* CONTENIDO CON SCROLL (aquí está la solución) */}
              <div className="flex-1 overflow-y-auto p-8 md:p-10 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {children}
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t dark:border-gray-700 text-center">
                <button 
                  onClick={onClose}
                  className="px-10 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-2xl font-medium transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}