// Componente principal de la aplicación
// Integra todos los componentes principales de la página

import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Testimonials from './components/layout/Testimonials';
import VideoButton from './components/layout/VideoButton';

function App() {
  // Hook personalizado que gestiona el tema oscuro/claro y lo persiste en localStorage
  const { theme, toggleTheme } = useDarkMode();

  return (
    // Contenedor principal con estilos base
    // Clases dark: activas cuando el tema es oscuro
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
      {/* Barra de navegación: logo, menú de navegación, botón tema */}
      <Navbar theme={theme} onToggleDarkMode={toggleTheme} />
      
      {/* Sección Hero: banner grande rotativo con 3 slides */}
      <Hero />
      
      {/* Página principal: galería de imágenes, servicios, carrusel */}
      <Home />
      
      {/* Sección de testimonios: 4 comentarios de clientes con estrellas */}
      <Testimonials />
      
      {/* Botón para abrir video promocional en modal */}
      <VideoButton />
      
      {/* Pie de página: contacto, links legales, redes sociales */}
      <Footer />
    </div>
  );
}

export default App;
