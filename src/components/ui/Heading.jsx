// Componente Título/Encabezado reutilizable
// Genera etiquetas h1 a h6 con estilos predefinidos
// Soporta modo gradiente para colores multicolor

import React from 'react';

const Heading = ({
  // Nivel de encabezado: 1-6 (genera h1, h2, ... h6)
  level = 1,
  // Contenido del encabezado
  children,
  // Clases CSS adicionales
  className = '',
  // Si se debe aplicar gradiente de colores
  gradient = false,
  ...props
}) => {
  // Genera la etiqueta dinámica (h1, h2, etc.)
  const Tag = `h${level}`;

  // Estilos de tamaño para cada nivel
  const styles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold font-heading',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold font-heading',
    h4: 'text-xl md:text-2xl font-semibold font-heading',
    h5: 'text-lg md:text-xl font-semibold font-heading',
    h6: 'text-base md:text-lg font-semibold font-heading',
  };

  // Aplica gradiente de colores si está habilitado
  const gradientClass = gradient
    ? 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'
    : 'text-neutral-900 dark:text-neutral-50';

  return (
    <Tag
      className={`${styles[Tag]} ${gradientClass} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
