
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Intentamos leer del localStorage, si no existe usamos 'light' por defecto
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    // También respetamos la preferencia del sistema si no hay guardado
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Cada vez que cambie el theme → guardamos en localStorage y actualizamos la clase en html
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Función para alternar
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);