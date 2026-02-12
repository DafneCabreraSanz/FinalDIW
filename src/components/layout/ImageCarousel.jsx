// Componente ImageCarousel: Carrusel de imágenes con navegación
// Muestra 1 imagen a la vez con botones prev/next e indicadores de puntos

import React, { useState } from 'react';
import carrouselAbajo from '../../img/carrouselAbajo.jpeg';
import segundaCarrousel from '../../img/segundaCarrousel.jpeg';
import terceraCarrousel from '../../img/terceraCarrousel.jpeg';

const ImageCarousel = () => {
  // Índice de la imagen actual
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de imágenes del carrusel
  const images = [carrouselAbajo, segundaCarrousel, terceraCarrousel];
  const totalSlides = images.length;

  // Avanza a la siguiente imagen
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Retrocede a la imagen anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    // Sección carrusel
    <section className="relative py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Contenedor de la imagen actual */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[3/1] bg-white dark:bg-neutral-700 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
            {/* Imagen del slide actual */}
            <img
              src={images[currentSlide]}
              alt={`Carousel ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores de puntos: muestra cuál es el slide actual */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide 
                  ? 'bg-neutral-900 dark:bg-white' 
                  : 'bg-neutral-400 dark:bg-neutral-600'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
