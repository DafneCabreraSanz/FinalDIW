// Componente Footer: Pie de página
// Contiene:
// - Iconos y texto de contacto (izquierda)
// - Logo centrado
// - Links legales y sociales (derecha)
// - Créditos al pie

import logoF from '../../img/logoF.png';

const Footer = () => {
  // Obtiene el año actual para el copyright
  const currentYear = new Date().getFullYear();

  return (
    // Pie de página con color personalizado
    <footer style={{backgroundColor: 'var(--footer)', color: 'var(--texto-horario-footer)'}} className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Grid de 3 columnas: contacto, logo, links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6">
          {/* COLUMNA 1: Iconos de contacto (izquierda) */}
          <div className="flex flex-col space-y-4 items-center md:-translate-x-8">
            {/* Icono de ubicación */}
            <div className="flex flex-col items-center space-y-2 translate-y-4">
              <svg className="w-8 h-8 translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-[10px] text-white">Dirección</p>
            </div>

            {/* Icono de teléfono */}
            <div className="flex flex-col items-center space-y-2 translate-y-4">
              <svg className="w-8 h-8 translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-[10px] text-white">Teléfono</p>
            </div>

            {/* Icono de email */}
            <div className="flex flex-col items-center space-y-2 translate-y-4">
              <svg className="w-8 h-8 translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-[10px] text-white">Email</p>
            </div>
          </div>

          {/* COLUMNA 2: Logo centrado */}
          <div className="flex items-center justify-center w-full h-full">
            <img src={logoF} alt="Logo" className="h-24 md:h-32 object-contain mx-auto" />
          </div>

          {/* COLUMNA 3: Links legales y redes sociales (derecha) */}
          <div className="flex flex-col space-y-4 items-center md:items-end md:-translate-x-24 md:self-center">
            {/* Links legales */}
            <ul className="flex flex-col space-y-2 text-sm text-white">
              <li>
                <a href="#" className="hover:text-white transition-colors">• Aviso Legal</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">• Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">• Política de cookies</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Creditos al pie */}
        <div className="flex justify-center w-full mt-4">
          <span className="text-base text-white font-semibold text-center">&copy; Pedro Sola y Dafne Cabrera</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
