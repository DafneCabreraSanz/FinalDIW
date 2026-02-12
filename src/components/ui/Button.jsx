// Componente Botón reutilizable
// Soporta 4 variantes: primary, secondary, accent, outline
// Soporta 3 tamaños: sm, md, lg

import React from 'react';

const Button = ({
  children,
  // Variante de estilo del botón
  variant = 'primary',
  // Tamaño del botón
  size = 'md',
  // Clases CSS adicionales
  className = '',
  ...props
}) => {
  // Estilos base aplicados a todos los botones
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variantes de colores
  const variants = {
    // Botón principal con color primario (azul)
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary dark:bg-primary-light dark:hover:bg-primary',
    // Botón secundario con color secundario (rosa)
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary dark:bg-secondary-light dark:hover:bg-secondary',
    // Botón acentuado con color dorado/naranja
    accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
    // Botón con borde (sin fondo)
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-white',
  };

  // Tamaños disponibles
  const sizes = {
    // Pequeño
    sm: 'px-4 py-2 text-sm',
    // Mediano
    md: 'px-6 py-3 text-base',
    // Grande
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
