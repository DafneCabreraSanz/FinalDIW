// Página principal que contiene:
// 1. Galería de 3 imágenes grandes
// 2. Sección de 5 servicios principales
// 3. Carrusel de imágenes con navegación

import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/layout/Card';
import ImageCarousel from '../components/layout/ImageCarousel';
import Servicios from '../components/layout/Servicios';
import primeraFoto from '../img/primeraFoto.jpeg';
import segundaFoto from '../img/segundaFoto.jpeg';
import terceraFoto from '../img/terceraFoto.jpeg';

const Home = () => {
  return (
    <div>
      {/* SECCIÓN 1: Galería de 3 imágenes grandes */}
      <Section background="default" padding="sm">
        {/* Grid responsivo: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Mapea las 3 imágenes y las muestra en tarjetas */}
          {[primeraFoto, segundaFoto, terceraFoto].map((img, index) => (
            <div key={index} className="aspect-[3/4] bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg overflow-hidden">
              <img src={img} alt="Servicio" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Section>

      {/* SECCIÓN 2: Servicios principales */}
      <Section background="default" padding="sm">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <Heading level={2} className="text-3xl md:text-4xl">
            Servicios
          </Heading>
        </div>

        {/* Componente que muestra 5 servicios en grid (2 móvil, 5 desktop) */}
        <Servicios />
      </Section>

      {/* SECCIÓN 3: Carrusel de imágenes con botones de navegación */}
      <ImageCarousel />
    </div>
  );
};

export default Home;
