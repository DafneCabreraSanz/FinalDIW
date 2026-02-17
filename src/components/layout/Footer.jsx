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
    <footer style={{backgroundColor: 'var(--footer)', color: 'var(--texto-horario-footer)'}} className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Grid responsivo: 1 col móvil, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start md:items-center mb-8 md:mb-12">
          
          {/* COLUMNA 1: Iconos de contacto */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Icono de ubicación */}
            <div className="icon-bounce flex items-center space-x-3 w-full md:w-auto">
              <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-center md:text-left text-sm text-white">Dirección</span>
            </div>

            {/* Icono de teléfono */}
            <div className="icon-bounce flex items-center space-x-3 w-full md:w-auto">
              <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-center md:text-left text-sm text-white">Teléfono</span>
            </div>

            {/* Icono de email */}
            <div className="icon-bounce flex items-center space-x-3 w-full md:w-auto">
              <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-center md:text-left text-sm text-white">Email</span>
            </div>
          </div>

          {/* COLUMNA 2: Logo centrado */}
          <div className="flex items-center justify-center py-6 md:py-0">
            <img src={logoF} alt="Logo" className="h-20 sm:h-24 md:h-32 object-contain" />
          </div>

          {/* COLUMNA 3: Links legales y redes sociales */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            {/* Links legales */}
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm text-white text-center md:text-right">
              <li>
                <a href="#" className="ripple-link text-white/80">• Aviso Legal</a>
              </li>
              <li>
                <a href="#" className="ripple-link text-white/80">• Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="ripple-link text-white/80">• Política de cookies</a>
              </li>
            </ul>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a href="#" className="icon-bounce text-white/80 hover:text-white" title="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="icon-bounce text-white/80 hover:text-white" title="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 18.894a1.5 1.5 0 1 1 2.121-2.121 1.5 1.5 0 0 1-2.121 2.121zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4-7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM12 3c4.971 0 9 4.029 9 9s-4.029 9-9 9-9-4.029-9-9 4.029-9 9-9zm0 1.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z"/>
                </svg>
              </a>
              <a href="#" className="icon-bounce text-white/80 hover:text-white" title="TikTok">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-5.63 5.63c0 3.26 2.69 5.88 6 5.88s6-2.62 6-5.88c0-.01 0-.02 0-.02s0 .02 0 .02v-5.17c1.29.86 2.84 1.35 4.45 1.38V8.79A6.27 6.27 0 0 1 19.59 6.69Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8 md:my-10"></div>

        {/* Créditos al pie */}
        <div className="flex justify-center w-full">
          <span className="text-xs sm:text-sm text-white font-semibold text-center">&copy; {currentYear} Pedro Sola y Dafne Cabrera. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
