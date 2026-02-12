// Componente Tarjeta reutilizable
// Muestra contenido con icono, título y descripción
// Soporta 3 variantes: default, gradient, hover

import React from 'react';

const Card = ({ 
  // Ícono emoji o similar
  icon, 
  // Título de la tarjeta
  title, 
  // Descripción del contenido
  description, 
  // Variante visual
  variant = 'default',
  // Clases CSS adicionales
  className = '',
  ...props 
}) => {
  // Estilos para cada variante
  const variants = {
    // Variante por defecto con borde sutil
    default: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
    // Variante con gradiente de colores
    gradient: 'bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-transparent',
    // Variante con efecto hover (borde y sombra al pasar ratón)
    hover: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary dark:hover:border-primary-light hover:shadow-xl',
  };

  return (
    <div
      className={`rounded-xl p-6 md:p-8 transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Ícono si se proporciona */}
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}
      
      {/* Título si se proporciona */}
      {title && (
        <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-900 dark:text-neutral-50 mb-3">
          {title}
        </h3>
      )}
      
      {/* Descripción si se proporciona */}
      {description && (
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
