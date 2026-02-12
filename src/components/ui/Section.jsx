// Componente Sección reutilizable
// Contenedor para organizar secciones de la página
// Soporta fondos: default, gray, primary, gradient
// Soporta padding: none, sm, default, lg

import React from 'react';

const Section = ({
  // Contenido de la sección
  children,
  // Clases CSS adicionales
  className = '',
  // Si debe ocupar todo el ancho
  fullWidth = false,
  // Color de fondo: default, gray, primary, gradient
  background = 'default',
  // Espaciado vertical: none, sm, default, lg
  padding = 'default',
  ...props
}) => {
  // Estilos para cada tipo de fondo
  const backgrounds = {
    default: '',
    gray: '',
    primary: '',
    gradient: '',
  };

  // Aplica el color de fondo personalizado si es gray
  const backgroundStyle = background === 'gray' ? { backgroundColor: 'var(--secciones)' } : {};

  // Espaciados verticales en diferentes breakpoints
  const paddings = {
    // Sin padding
    none: '',
    // Pequeño: 8rem en móvil, 12rem en tablet
    sm: 'py-8 md:py-12',
    // Mediano (default): 12rem en móvil, 16rem en tablet, 20rem en desktop
    default: 'py-12 md:py-16 lg:py-20',
    // Grande: 16rem en móvil, 20rem en tablet, 28rem en desktop
    lg: 'py-16 md:py-20 lg:py-28',
  };

  return (
    <section
      style={backgroundStyle}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'}>
        {children}
      </div>
    </section>
  );
};

export default Section;
