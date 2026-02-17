// Componente Título/Encabezado reutilizable
// Genera etiquetas h1 a h6 con estilos predefinidos
// Soporta modo gradiente para colores multicolor

function Heading(props) {
  const level = props.level || 1;
  const children = props.children;
  const className = props.className || '';
  const gradient = props.gradient || false;

  // Genera la etiqueta dinámica (h1, h2, etc.)
  const Tag = 'h' + level;

  // Estilos de tamaño para cada nivel
  const styles = {};
  styles.h1 = 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading';
  styles.h2 = 'text-3xl md:text-4xl lg:text-5xl font-bold font-heading';
  styles.h3 = 'text-2xl md:text-3xl lg:text-4xl font-semibold font-heading';
  styles.h4 = 'text-xl md:text-2xl font-semibold font-heading';
  styles.h5 = 'text-lg md:text-xl font-semibold font-heading';
  styles.h6 = 'text-base md:text-lg font-semibold font-heading';

  // Aplica gradiente de colores si está habilitado
  let gradientClass;
  if (gradient === true) {
    gradientClass = 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent';
  } else {
    gradientClass = 'text-neutral-900 dark:text-neutral-50';
  }

  const finalClass = styles[Tag] + ' ' + gradientClass + ' ' + className;

  if (Tag === 'h1') {
    return <h1 className={finalClass}>{children}</h1>;
  } else if (Tag === 'h2') {
    return <h2 className={finalClass}>{children}</h2>;
  } else if (Tag === 'h3') {
    return <h3 className={finalClass}>{children}</h3>;
  } else if (Tag === 'h4') {
    return <h4 className={finalClass}>{children}</h4>;
  } else if (Tag === 'h5') {
    return <h5 className={finalClass}>{children}</h5>;
  } else if (Tag === 'h6') {
    return <h6 className={finalClass}>{children}</h6>;
  }
}

export default Heading;
