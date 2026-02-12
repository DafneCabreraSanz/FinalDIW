// Componente Hero: Banner principal rotativo con 3 slides
// Contiene:
// - Títulos y descripciones rotativas
// - Imagen de fondo
// - Botones de navegación anterior/siguiente

import React, { useState } from 'react';
import Button from '../ui/Button';
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
        backgroundColor: 'var(--secciones)'
      }}
      className="relative min-h-[400px] flex items-start justify-center pt-36 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative h-full flex flex-col items-center justify-start gap-12">
        {/* Botón para ir al slide anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide content */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 style={{color: 'var(--texto)'}} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {slides[currentSlide].title}
          </h1>
          
               <p style={{color: 'var(--texto)'}} className="text-base md:text-lg mt-12 mb-8 leading-relaxed opacity-80">
            {slides[currentSlide].description}
          </p>

          {/* ...sin botón ni dots... */}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
