import React, { useState, useEffect } from 'react';
import logoHeader from '../../img/logoHeader.jpeg';
import logoF from '../../img/logoF.png';

const Navbar = ({ onToggleDarkMode, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkClass, setIsDarkClass] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkClass(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const getThemeIcon = () => {
    if (theme === 'light') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else if (theme === 'dark') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white dark:text-white transition-colors duration-300"
      style={{ backgroundColor: document.documentElement.classList.contains('dark') ? 'var(--footer)' : undefined }}
    >
      {/* Top bar - Horario animado */}
      <div className="overflow-hidden py-2 text-sm relative bg-[var(--horario)] text-[var(--texto-horario-footer)] dark:bg-neutral-800 dark:text-white transition-colors duration-300">
        <div className="animate-scroll whitespace-nowrap inline-block">
          <span className="inline-block px-8">Lunes a Viernes: 10:30 am - 19:00 pm</span>
          <span className="inline-block px-8">Sábados: 10:30 am - 17:00 pm</span>
          <span className="inline-block px-8">Domingos: 10:30 am - 15:00 pm</span>
          <span className="inline-block px-8">Lunes a Viernes: 10:30 am - 19:00 pm</span>
          <span className="inline-block px-8">Sábados: 10:30 am - 17:00 pm</span>
          <span className="inline-block px-8">Domingos: 10:30 am - 15:00 pm</span>
          <span className="inline-block px-8">Lunes a Viernes: 10:30 am - 19:00 pm</span>
          <span className="inline-block px-8">Sábados: 10:30 am - 17:00 pm</span>
          <span className="inline-block px-8">Domingos: 10:30 am - 15:00 pm</span>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 dark:text-white">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={isDarkClass ? logoF : logoHeader}
              alt="Logo"
              className="h-12 md:h-16 object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:opacity-70 transition-opacity text-[var(--texto)] dark:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              {/* Search */}
              <button className="p-2 hover:opacity-70 rounded transition-opacity text-[var(--texto)] dark:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* User */}
              <button className="p-2 hover:opacity-70 rounded transition-opacity text-[var(--texto)] dark:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="p-2 hover:opacity-70 rounded transition-opacity text-[var(--texto)] dark:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 hover:opacity-70 rounded transition-opacity flex items-center gap-1 text-[var(--texto)] dark:text-white"
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Modo claro' : theme === 'dark' ? 'Modo oscuro' : 'Auto (sistema)'}
            >
              {getThemeIcon()}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{color: 'var(--texto)'}}
                  className="hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;