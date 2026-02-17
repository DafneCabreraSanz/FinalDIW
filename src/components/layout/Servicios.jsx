// Componente que muestra 5 servicios principales en un grid
// Cada servicio tiene un icono/logo y nombre descriptivo

import logo from '../../img/Logo.jpeg';
import logo2 from '../../img/Logo (2).jpeg';
import logo3 from '../../img/Logo3.jpeg';
import logo4 from '../../img/Logo4.jpeg';
import logo5 from '../../img/Logo5.jpeg';

const Servicios = () => {
  // Array con los 5 servicios principales de la agencia
  // Cada servicio tiene: imagen del logo y texto descriptivo
  const servicios = [
    { img: logo, text: 'Diseño Grafico' },
    { img: logo2, text: 'Desarrollo Web' },
    { img: logo3, text: 'SEO' },
    { img: logo4, text: 'Marketing Online' },
    { img: logo5, text: 'Fotografia/Video' },
  ];

  return (
    // Grid responsivo: 2 columnas en móvil (2-2-1), 5 en desktop
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
      {/* Itera sobre cada servicio y lo muestra en una tarjeta */}
      {servicios.map((item, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-neutral-800 rounded-lg p-8 md:p-10 flex flex-col items-center text-center h-full justify-center hover-lift animate-slide-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Contenedor para el logo con borde de color personalizado */}
          <div 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-36 lg:h-36 bg-white border-2 border-transparent flex items-center justify-center mb-6 rounded-lg transition-all duration-300 hover:shadow-lg" 
            style={{ borderColor: 'var(--secciones)' }}
          >
            {/* Imagen del logo del servicio */}
            <img src={item.img} alt="Logo de servicio" className="w-20 h-20 md:w-28 md:h-28 lg:w-24 lg:h-24 object-contain" />
          </div>
          {/* Nombre del servicio */}
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-medium">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
