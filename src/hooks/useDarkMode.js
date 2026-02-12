// Hook personalizado para gestionar el tema oscuro/claro
// Cicla entre: light → dark → system (preferencia del sistema operativo)
// Persiste la selección en localStorage

import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Estado inicial: recupera del localStorage o usa "system" por defecto
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    return localStorage.getItem('theme') || 'system';
  });

  // Efecto que aplica el tema y detecta cambios del sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detecta si el sistema operativo tiene modo oscuro activado
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Función que aplica el tema actual al DOM
    const applyTheme = () => {
      const root = document.documentElement;
      const body = document.body;

      if (theme === 'dark') {
        // Modo oscuro: agrega la clase 'dark' para activar estilos oscuros
        root.classList.add('dark');
        body.classList.add('dark');
      } else if (theme === 'light') {
        // Modo claro: remueve la clase 'dark'
        root.classList.remove('dark');
        body.classList.remove('dark');
      } else {
        // Modo sistema: usa la preferencia del SO
        root.classList.toggle('dark', mediaQuery.matches);
        body.classList.toggle('dark', mediaQuery.matches);
      }
      // Guarda la preferencia en localStorage
      localStorage.setItem('theme', theme);
    };

    // Aplica el tema cuando cambia
    applyTheme();

    // Detecta cambios en la preferencia del sistema operativo
    const handleSystemChange = (e) => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', e.matches);
        document.body.classList.toggle('dark', e.matches);
      }
    };

    // Suscribe al cambio de preferencia del SO
    mediaQuery.addEventListener('change', handleSystemChange);

    // Limpia el evento al desmontar el componente
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // Función que cicla entre: light → dark → system → light
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'
    );
  };

  return { theme, toggleTheme };
}
