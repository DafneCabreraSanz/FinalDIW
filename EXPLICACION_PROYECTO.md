# 📱 Explicación del Proyecto: Agencia Digital (FinalDIW)

## 🎯 Descripción General

Este proyecto es un sitio web moderno y responsivo para una **agencia de marketing digital**. Construido con **React 19**, **Vite**, y **Tailwind CSS**, ofrece una experiencia visual atractiva con soporte para modo oscuro/claro.

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico
- **Frontend**: React 19 + JSX
- **Bundler**: Vite (compilación rápida)
- **Estilos**: Tailwind CSS + CSS personalizado
- **Modo oscuro**: Sistema de clases CSS + localStorage
- **Fuente**: Architects Daughter (Google Fonts)

### Estructura de Carpetas

```
src/
├── main.jsx                      # Punto de entrada de React
├── App.jsx                       # Componente raíz
├── index.css                     # Estilos globales + variables CSS
├── components/
│   ├── layout/                   # Componentes de página
│   │   ├── Navbar.jsx            # Barra de navegación fija
│   │   ├── Hero.jsx              # Banner hero con carrusel (3 slides)
│   │   ├── Card.jsx              # Tarjeta reutilizable
│   │   ├── Servicios.jsx         # Grid de 5 servicios
│   │   ├── ImageCarousel.jsx     # Carrusel de imágenes
│   │   ├── Testimonials.jsx      # Testimonios de clientes (4 items)
│   │   ├── VideoButton.jsx       # Botón para video modal
│   │   └── Footer.jsx            # Pie de página
│   └── ui/                       # Componentes reutilizables
│       ├── Button.jsx            # Botón (4 variantes, 3 tamaños)
│       ├── Heading.jsx           # Encabezados h1-h6
│       └── Section.jsx           # Contenedor de secciones
├── pages/
│   └── Home.jsx                  # Página principal
├── hooks/
│   └── useDarkMode.js            # Hook de modo oscuro custom
└── data/
    └── mockData.js               # Datos simulados (servicios, testimonios, métricas)
```

---

## 🎨 Secciones de la Página

### 1. **Navbar** (`Navbar.jsx`)
- Barra superior fija con opción de siempre visible
- **Elementos**:
  - Barra superior: Horario de atención animado (scroll infinito)
  - Logo responsivo (cambia según tema)
  - Links de navegación (Home, Nosotros, Servicios, Contacto)
  - Iconos: Búsqueda, Usuario, Carrito
  - **Botón Tema**: Cicla entre Light → Dark → System
  - Menú hamburguesa en móvil

### 2. **Hero** (`Hero.jsx`)
- Banner principal con fondo de color personalizado
- **Carrusel de 3 slides** con:
  - Título principal
  - Descripción
  - Botones de navegación anterior/siguiente
  - Imagen de fondo
- Auto-cicla o navegación manual

### 3. **Home** (`Home.jsx` + `Servicios.jsx`)
**Sección 1: Galería de Imágenes**
- 3 imágenes grandes en grid responsivo
- 1 columna móvil → 3 columnas desktop

**Sección 2: Servicios Principales**
- Encabezado "Servicios"
- Grid de 5 servicios con ícono y nombre
- 2 columnas móvil → 5 columnas desktop
- Cada servicio tiene borde de color personalizado

**Sección 3: Carrusel (ImageCarousel)**
- Imagen principal 3:1 aspect ratio
- Botones prev/next con iconos SVG
- Indicadores de puntos (dots) para navegar

### 4. **Testimonials** (`Testimonials.jsx`)
- Sección con fondo gris personalizado
- Grid de 4 testimonios:
  - Estrellas de calificación (⭐× 5)
  - Cita/comentario
  - Nombre cliente
  - Cargo/Rol
- 1 columna móvil → 2 columnas desktop

### 5. **VideoButton** (`VideoButton.jsx`)
- Botón "Ver video" con color personalizado
- Al clic, abre **modal overlay** con:
  - Reproductor de video HTML5
  - Botón cerrar (×)
  - Fondo overlay oscuro
  - Video: `/video.mp4` (ubicado en carpeta public/)

### 6. **Footer** (`Footer.jsx`)
- Fondo color personalizado (--footer)
- Grid de 3 secciones:
  - **Izquierda**: Iconos de contacto (ubicación, teléfono, email)
  - **Centro**: Logo
  - **Derecha**: Links legales (Aviso Legal, Privacidad, Cookies)
- Créditos al pie: "© Pedro Sola y Dafne Cabrera"

---

## 🎛️ Sistema de Colores y Variables CSS

### Variables Personalizadas (`:root` en `index.css`)

```css
--fondo: #ffffff               /* Fondo principal */
--footer: #7e593d              /* Color footer/encabezado */
--horario: #7e593d             /* Color barra horario */
--secciones: #d9cfc1           /* Color fondo secciones */
--texto: #000000               /* Color texto */
--texto-horario-footer: #ffffff /* Color texto footer */
--tipo-de-texto: Architects Daughter, cursive
```

### Modo Oscuro
- Definido con clase CSS `.dark`
- Sistema de prefijos: `dark:` en Tailwind (ej: `dark:bg-neutral-900`)
- Alternancia manual en Navbar
- Persistencia en localStorage

---

## ⚙️ Hooks y Funcionalidades

### `useDarkMode()` (Custom Hook)
**Línea**: `src/hooks/useDarkMode.js`

**Funcionalidad**:
1. Lee preferencia de localStorage
2. Cicla entre 3 temas:
   - `light`: Modo claro forzado
   - `dark`: Modo oscuro forzado
   - `system`: Usa preferencia del OS
3. Aplica clase `.dark` al `<html>`
4. Observa cambios en el DOM
5. Detecta cambios de preferencia del SO

**Retorna**: `{ theme, toggleTheme }`

---

## 📊 Datos Simulados (`mockData.js`)

### `services` (6 servicios)
```javascript
[
  { id, icon: emoji, title, description },
  // SEO & SEM, Social Media, Analytics, 
  // Content Marketing, Diseño Creativo, Email Marketing
]
```

### `trustMetrics` (Estadísticas)
```javascript
[
  { id, value: '500+', label: 'Proyectos completados', icon },
  { id, value: '98%', label: 'Satisfacción', icon },
  // etc...
]
```

### `testimonials` (4 testimonios)
```javascript
[
  { id, name, position, image, quote, rating: 5 },
  // 4 items predefinidos
]
```

### `advantages` (Ventajas competitivas)
```javascript
[
  { id, title, description },
  // 4 ventajas principales
]
```

---

## 🔄 Flujo de Componentes

```
App (useDarkMode)
├── Navbar (recibe: theme, onToggleDarkMode)
├── Hero (carrusel 3 slides)
├── Home
│   ├── Galería imágenes (3)
│   ├── Servicios (5 items)
│   └── ImageCarousel (carrusel)
├── Testimonials (4 items)
├── VideoButton (modal video)
└── Footer
```

---

## 🛠️ Configuración de Build

### `vite.config.js`
- Plugin React para JSX
- Servidor de desarrollo rápido

### `tailwind.config.js`
- Modo oscuro por clase (`.dark`)
- Paleta de colores extendida (primary, secondary, accent)
- Familias de fuentes personalizadas

### `postcss.config.js`
- Tailwind CSS processor
- Autoprefixer para compatibilidad

### `eslint.config.js`
- Linter para código React

---

## 📱 Responsividad

### Breakpoints Usados

```
Móvil:    < 768px  (md:)
Tablet:   768px    (md:)
Desktop:  1024px   (lg:)
```

### Ejemplos de Responsive

- **Navbar**: Hamburger menu en móvil, links horizontales en desktop
- **Servicios**: 2 columnas móvil → 5 desktop
- **Testimonios**: 1 columna móvil → 2 desktop
- **Imágenes**: Full width adaptado a pantalla

---

## 🎛️ Componentes Reutilizables

### `Button.jsx`
- **Props**: `variant`, `size`, `children`
- **Variantes**: primary, secondary, accent, outline
- **Tamaños**: sm, md, lg

### `Card.jsx`
- **Props**: `icon`, `title`, `description`, `variant`
- **Variantes**: default, gradient, hover

### `Heading.jsx`
- **Props**: `level` (1-6), `children`, `gradient`
- Genera etiquetas h1-h6 con estilos predefinidos

### `Section.jsx`
- **Props**: `background` (default, gray, primary), `padding` (none, sm, default, lg)
- Contenedor para estructurar secciones

---

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Desarrollo (hot reload)
npm run dev

# Build producción
npm run build

# Vista previa producción
npm run preview

```

---

## 📝 Notas Importantes

1. **Video**: Debe existir `/public/video.mp4`
2. **Imágenes**: Importadas desde `/src/img/`
3. **Fuentes**: Cargadas desde Google Fonts (Architects Daughter)
4. **Animaciones**: Scroll infinito horario, transiciones suaves
5. **Accesibilidad**: Aria-labels en botones e iconos
6. **SEO**: IDs en secciones para navegación ancla

---

## 📚 Archivos Clave

| Archivo | Propósito |
|---------|-----------|
| `App.jsx` | Componente raíz, estructura principal |
| `useDarkMode.js` | Lógica de tema oscuro/claro |
| `index.css` | Variables CSS y estilos globales |
| `mockData.js` | Base de datos simulada |
| `Navbar.jsx` | Navegación y horario |
| `Hero.jsx` | Banner principal |
| `Footer.jsx` | Pie de página |


---

## ✨ Características Destacadas

✅ Modo oscuro persistente
✅ Carruseles interactivos (Hero + Gallery)
✅ Responsive design
✅ Video modal
✅ Animación scroll infinito
✅ Componentes reutilizables
✅ Código con comentarios explicativos

---

**Última actualización**: Febrero 2026
**Desarrolladores**: Pedro Sola y Dafne Cabrera
