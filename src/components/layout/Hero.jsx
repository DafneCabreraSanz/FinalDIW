// Componente Hero: Banner principal rotativo con 3 slides
// Contiene:
// - Títulos y descripciones rotativas
// - Imagen de fondo
// - Botones de navegación anterior/siguiente

import { useState } from 'react';
import carrouselArriba from '../../img/carrouselArriba.jpeg';
import carrouselArriba2 from '../../img/carrouselArriba2.jpeg';
import carrouselArriba3 from '../../img/carrouselArriba3.png';

const Hero = () => {
  // Índice del slide actual (0-2)
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de imágenes para el carrusel
  const images = [carrouselArriba, carrouselArriba2, carrouselArriba3];
  
  // Array de contenido para cada slide (título y descripción)
  const slides = [
    {
      title: "Impulsa tu marca al siguiente nivel",
      description: "Estrategias digitales, creatividad y resultados para que tu negocio destaque en el mundo online.",
    },
    {
      title: "Tu éxito digital, nuestra misión",
      description: "Creamos soluciones de marketing, diseño y comunicación para hacer crecer tu empresa.",
    },
    {
      title: "Conecta, impacta y crece",
      description: "Atrae más clientes y haz que tu marca brille con nuestros servicios de marketing y diseño.",
    }
  ];

  // Función que avanza al siguiente slide (cicla desde el último al primero)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Función que retrocede al slide anterior (cicla desde el primero al último)
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // Sección hero con imagen de fondo
    <section
      id="home"
      style={{
        backgroundColor: 'var(--secciones)',
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 100%)'
      }}
      className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[600px] flex items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative h-full flex flex-col items-center justify-center gap-12">
        {/* Botón para ir al slide anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-neutral-600 transition-all duration-300 z-10 btn-glow"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide content */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto animate-fade-in-scale">
          <h1 
            style={{color: 'var(--texto)'}} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight"
          >
            {slides[currentSlide].title}
          </h1>
          
          <p 
            style={{color: 'var(--texto)'}} 
            className="text-sm sm:text-base md:text-lg mt-6 sm:mt-8 md:mt-10 mb-10 sm:mb-12 md:mb-14 leading-relaxed opacity-85 max-w-2xl px-2"
          >
            {slides[currentSlide].description}
          </p>

          {/* Indicadores de slides */}
          <div className="flex justify-center items-center space-x-3">
            {[...Array(slides.length)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-neutral-700 dark:bg-white' 
                    : 'w-3 h-3 bg-neutral-400 dark:bg-neutral-500 hover:bg-neutral-600 dark:hover:bg-neutral-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-neutral-600 transition-all duration-300 z-10 btn-glow"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
