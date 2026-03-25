// src/components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos-reales', label: 'Proyectos' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#cursos', label: 'Cursos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Diego H.
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Dark mode + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Toggle Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}