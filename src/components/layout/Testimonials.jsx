// Componente Testimonials: Sección de testimonios de clientes
// Muestra 4 comentarios con calificaciones de 5 estrellas

import React from 'react';
import Section from '../ui/Section';
import Heading from '../ui/Heading';

const Testimonials = () => {
  // Array de testimonios con: nombre, rol, comentario y calificación
  const testimonials = [
    {
      name: 'María García',
      role: 'CEO, Empresa XYZ',
      comment: 'Excelente servicio, superaron todas nuestras expectativas. Altamente recomendados.',
      rating: 5,
    },
    {
      name: 'Juan Pérez',
      role: 'Director de Marketing',
      comment: 'Profesionales comprometidos y resultados excepcionales. Muy satisfecho con el trabajo realizado.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Gerente de Producto',
      comment: 'Gran atención al detalle y soporte impecable. Definitivamente volveremos a trabajar juntos.',
      rating: 5,
    },
    {
      name: 'Juan Pérez',
      role: 'Director de Marketing',
      comment: 'Profesionales comprometidos y resultados excepcionales. Muy satisfecho con el trabajo realizado.',
      rating: 5,
    },
  ];

  return (
    // Sección con fondo de color
    <Section background="gray" padding="lg">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <Heading level={2} className="text-3xl md:text-4xl !text-black dark:!text-black" style={{ color: '#000' }}>
          Lo que dicen nuestros clientes
        </Heading>
      </div>

      {/* Grid de testimonios: 1 columna en móvil, 2 en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Itera sobre cada testimonio y lo muestra en una tarjeta */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg p-8 flex flex-col shadow-md bg-white text-texto dark:bg-neutral-800 dark:text-white"
          >
            {/* Estrellas de calificación */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>

            {/* Texto del comentario */}
            <p className="mb-6 flex-grow text-sm leading-relaxed text-black dark:text-white">
              "{testimonial.comment}"
            </p>

            {/* Información del autor */}
            <div className="border-t pt-4 border-texto">
              {/* Nombre */}
              <p className="font-bold text-sm text-black dark:text-white">
                {testimonial.name}
              </p>
              {/* Cargo/Rol */}
              <p className="text-xs text-black dark:text-white">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
