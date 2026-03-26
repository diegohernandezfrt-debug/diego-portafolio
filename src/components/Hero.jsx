
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="sobre-mi" className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Foto + animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
              
              <img
                src="../../image/Perfil.png" 
                alt="Diego Hernández"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Efecto de brillo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl -z-10 blur-3xl" />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hola, soy <span className="text-blue-600 dark:text-blue-400">Diego Hernández</span>
            </motion.h1>
            <p className="mt-3 text-2xl text-gray-600 dark:text-gray-400">
              Ingeniero en Sistemas Computacionales
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            Soy un desarrollador apasionado por crear experiencias web modernas, rápidas y visualmente impactantes. 
            Me encanta el frontend, los juegos y los sistemas fullstack. Siempre estoy buscando aprender algo nuevo.
          </motion.p>

          {/* Botón CV */}
          <motion.a
            href="documents/Curriculum HRDF.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all"
          >
            📄 Descargar mi Currículum
          </motion.a>

          
          <div className="pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Algunas de mis formaciones</p>
            {/* Aquí más adelante pondremos el carrusel con Framer Motion */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
