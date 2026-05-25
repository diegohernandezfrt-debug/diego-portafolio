import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, title, url, isGame = false }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center px-8 py-5 border-b dark:border-gray-800">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button
                onClick={onClose}
                className="text-4xl leading-none text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <div className="flex-1 p-4 overflow-auto">
              {isGame ? (
                <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                  <p className="text-xl mb-6">Este juego se abre mejor en una ventana nueva</p>
                  <a
                    href={url}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-xl font-semibold"
                  >
                    🎮 Abrir Juego en Nueva Pestaña
                  </a>
                </div>
              ) : (
                <iframe
                  src={url}
                  className="w-full h-[75vh] rounded-2xl"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}