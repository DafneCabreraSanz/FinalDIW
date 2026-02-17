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
    // Grid responsivo: 2 columnas en móvil, 5 en desktop
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {/* Itera sobre cada servicio y lo muestra en una tarjeta */}
      {servicios.map((item, index) => (
        <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-6 flex flex-col items-center text-center">
          {/* Contenedor para el logo con borde de color personalizado */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white border-2 flex items-center justify-center mb-4" style={{ borderColor: 'var(--secciones)' }}>
            {/* Imagen del logo del servicio */}
            <img src={item.img} alt="Logo de servicio" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          {/* Nombre del servicio */}
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
