# 🚀 Guía Rápida - Referencias de Componentes

## 📌 Componentes Principales

### 1. `App.jsx` - Raíz de la aplicación
```jsx
✨ Detalles:
  - Integra todos los componentes principales
  - Usa hook useDarkMode() para gestionar tema
  - Layout general: Navbar → Hero → Home → Testimonials → VideoButton → Footer

🎯 Props:
  - theme: ('light' | 'dark' | 'system')
  - toggleTheme(): Cicla temas

📱 Responsive: Automático via Tailwind
```

---

### 2. `Navbar.jsx` - Barra de navegación
```jsx
✨ Detalles:
  - Fixed positioning (top-0)
  - Barra superior: Horario animado (scroll infinito)
  - Logo adaptativo (cambia según tema)
  - Links: Home, Nosotros, Servicios, Contacto
  - Iconos: Search, User, Cart
  - Botón tema + Menú hamburguesa

🎯 Props:
  - theme: ('light' | 'dark' | 'system')
  - onToggleDarkMode: () => void

🖼️ Estados:
  - isMenuOpen: boolean (menú móvil)
  - isDarkClass: boolean (observa cambios en DOM)
```

---

### 3. `Hero.jsx` - Banner Principal
```jsx
✨ Detalles:
  - 3 slides rotables
  - Cada slide: Título + Descripción + Imagen
  - Botones prev/next con iconos SVG
  - Color de fondo personalizado

🎯 Estados:
  - currentSlide: 0-2 (índice del slide actual)

🎨 Estilos:
  - backgroundColor: 'var(--secciones)'
  - min-h-[400px]
```

---

### 4. `Home.jsx` - Página Principal
```jsx
✨ Secciones:
  1️⃣ Galería: 3 imágenes grandes (1→3 cols)
  2️⃣ Servicios: Encabezado + Grid 5 servicios
  3️⃣ Carrusel: ImageCarousel interactivo

📦 Componentes usados:
  - Section: Contenedor
  - Heading: Título "Servicios"
  - Servicios: Grid de logos
  - ImageCarousel: Carrusel independiente
```

---

### 5. `Servicios.jsx` - Grid de Servicios
```jsx
✨ Detalles:
  - 5 servicios con logos
  - Borde personalizado: borderColor='var(--secciones)'
  - Grid: 2 cols (móvil) → 5 cols (desktop)

📊 Data:
  [
    { img: logo, text: 'Diseño Grafico' },
    { img: logo2, text: 'Desarrollo Web' },
    { img: logo3, text: 'SEO' },
    { img: logo4, text: 'Marketing Online' },
    { img: logo5, text: 'Fotografia/Video' }
  ]

🎯 Props: Ninguno (datos internos)
```

---

### 6. `ImageCarousel.jsx` - Carrusel de Imágenes
```jsx
✨ Detalles:
  - 3 imágenes rotables
  - Aspect ratio: 3:1
  - Botones prev/next + Dots navigator
  - Indicadores de punto clickeables

🎯 Estados:
  - currentSlide: 0-2

🎨 Estilos:
  - aspect-[3/1]
  - Sombra y bordes suaves
```

---

### 7. `Testimonials.jsx` - Testimonios
```jsx
✨ Detalles:
  - 4 testimonios de clientes
  - Cada uno: ⭐ + Cita + Nombre + Rol
  - Fondo gris: backgroundColor='var(--secciones)'
  - Grid: 1 col (móvil) → 2 cols (desktop)

📊 Data:
  { name, role, comment, rating: 5 }

🎯 Props: Ninguno (datos internos)
```

---

### 8. `VideoButton.jsx` - Modal Video
```jsx
✨ Detalles:
  - Botón que abre modal overlay
  - Modal: Reproductor HTML5 + Botón cerrar
  - Video: /public/video.mp4

🎯 Estados:
  - showVideo: boolean

🎨 Features:
  - Fondo overlay oscuro (bg-black/60)
  - Botón × para cerrar (hover: rojo)
  - video controls + autoplay

⚙️ Nota: Debe existir /public/video.mp4
```

---

### 9. `Footer.jsx` - Pie de Página
```jsx
✨ Detalles:
  - Fondo: backgroundColor='var(--footer)' (#7e593d)
  - Grid 3 columnas:
    📍 Izq: Icons contacto (ubicación, teléfono, email)
    🏢 Centro: Logo grande
    ⚖️ Derecha: Links legales
  - Créditos al pie

🎯 Props: Ninguno

🎨 Colores:
  - Fondo: var(--footer)
  - Texto: var(--texto-horario-footer) blanco
```

---

## 🎨 Componentes Reutilizables (UI)

### `Button.jsx`
```jsx
✨ Props:
  - children: ReactNode
  - variant: 'primary' | 'secondary' | 'accent' | 'outline' (default: 'primary')
  - size: 'sm' | 'md' | 'lg' (default: 'md')
  - className: string
  - ...props (atributos HTML)

🎨 Variantes:
  - primary: Azul (4f46e5) + hover oscuro
  - secondary: Rosa (db2777) + hover oscuro
  - accent: Naranja/Dorado (f59e0b) + hover oscuro
  - outline: Borde 2px + relleno al hover

📏 Tamaños:
  - sm: px-4 py-2 text-sm
  - md: px-6 py-3 text-base (default)
  - lg: px-8 py-4 text-lg
```

### `Card.jsx`
```jsx
✨ Props:
  - icon: ReactNode (emoji o SVG)
  - title: string
  - description: string
  - variant: 'default' | 'gradient' | 'hover' (default: 'default')
  - className: string
  - ...props

🎨 Variantes:
  - default: Fondo blanco + borde gris
  - gradient: Gradiente blanco→gris
  - hover: Efecto interactivo con sombra
```

### `Heading.jsx`
```jsx
✨ Props:
  - level: 1-6 (genera h1-h6, default: 1)
  - children: ReactNode
  - gradient: boolean (aplica gradiente multicolor)
  - className: string
  - ...props

🎨 Tamaños por nivel:
  - h1: text-4xl md:text-5xl lg:text-6xl
  - h2: text-3xl md:text-4xl lg:text-5xl
  - h3: text-2xl md:text-3xl lg:text-4xl
  - ...reduciendo por nivel
```

### `Section.jsx`
```jsx
✨ Props:
  - children: ReactNode
  - background: 'default' | 'gray' | 'primary' | 'gradient' (default: 'default')
  - padding: 'none' | 'sm' | 'default' | 'lg' (default: 'default')
  - fullWidth: boolean
  - className: string
  - ...props

📏 Paddings:
  - none: Sin padding
  - sm: py-8 md:py-12
  - default: py-12 md:py-16 lg:py-20
  - lg: py-16 md:py-20 lg:py-28

🎨 Background:
  - gray: backgroundColor='var(--secciones)'
```

---

## 🎣 Hooks Personalizados

### `useDarkMode()`
```jsx
✨ Funcionalidad:
  - Gestiona tema: light → dark → system
  - Persiste en localStorage
  - Observa cambios en DOM
  - Detecta preferencia del SO

🔄 Ciclo:
  light → dark → system → light → ...

📦 Retorna:
  { theme, toggleTheme }

🎯 Uso:
  const { theme, toggleTheme } = useDarkMode()
  
💾 localStorage key:
  'theme' ('light' | 'dark' | 'system')
```

---

## 📊 Datos (`mockData.js`)

### `services[]`
```javascript
[
  { id: 1, icon: '🎯', title: 'SEO & SEM', description: '...' },
  { id: 2, icon: '📱', title: 'Social Media', description: '...' },
  { id: 3, icon: '📊', title: 'Analytics', description: '...' },
  { id: 4, icon: '✍️', title: 'Content Marketing', description: '...' },
  { id: 5, icon: '🎨', title: 'Diseño Creativo', description: '...' },
  { id: 6, icon: '📧', title: 'Email Marketing', description: '...' }
]
```

### `trustMetrics[]`
```javascript
[
  { id: 1, value: '500+', label: 'Proyectos completados', icon: '🚀' },
  { id: 2, value: '98%', label: 'Satisfacción de clientes', icon: '⭐' },
  { id: 3, value: '250%', label: 'ROI promedio', icon: '📈' },
  { id: 4, value: '24/7', label: 'Soporte dedicado', icon: '💬' }
]
```

### `testimonials[]`
```javascript
[
  {
    id: 1,
    name: 'María González',
    position: 'CEO, TechStart',
    image: '👩‍💼',
    quote: '...',
    rating: 5
  },
  // ... 2 más
]
```

---

## 🎨 Variables CSS Personalizadas

```css
/* index.css :root */
--fondo: #ffffff;                  /* Fondo principal */
--footer: #7e593d;                 /* Color footer/headers */
--horario: #7e593d;                /* Barra horario */
--secciones: #d9cfc1;              /* Fondo secciones */
--texto: #000000;                  /* Color texto */
--texto-horario-footer: #ffffff;   /* Texto footer */
--tipo-de-texto: Architects Daughter, cursive;
```

---

## 🔧 Configuración Tailwind

```javascript
// tailwind.config.js
colors: {
  primary: { light: '#6366f1', DEFAULT: '#4f46e5', dark: '#4338ca' },
  secondary: { light: '#ec4899', DEFAULT: '#db2777', dark: '#be185d' },
  accent: { light: '#fbbf24', DEFAULT: '#f59e0b', dark: '#d97706' },
  neutral: { 50-950: Escala gris }
}

darkMode: 'class' // Modo oscuro por clase
```

---

## 📱 Responsive Breakpoints

```
Móvil:     < 768px   (no prefijo)
Tablet:    768px+    (md: prefijo)
Desktop:   1024px+   (lg: prefijo)

Ejemplos:
  grid-cols-1 md:grid-cols-3      → 1 col móvil, 3 desktop
  text-xl md:text-2xl             → Aumenta texto en tablet
  hidden md:flex                  → Mostrar solo en desktop
```

---

## 🎯 Puntos de Entrada

```
Entry Point: src/main.jsx
  ↓
createRoot(document.getElementById('root'))
  ↓
App.jsx (Componente raíz)
  ↓
HTML: index.html <div id="root"></div>
```

---

## 📦 Comandos npm

```bash
npm run dev        → Inicia servidor desarrollo (Vite)
npm run build      → Build producción
npm run preview    → Previsualiza build
npm run lint       → Lint con ESLint
```

---

## ✨ Cambios Realizados

✅ **Comentarios agregados a**:
  - App.jsx
  - main.jsx
  - useDarkMode.js
  - Home.jsx
  - Servicios.jsx
  - Button.jsx
  - Card.jsx
  - Heading.jsx
  - Section.jsx
  - Hero.jsx
  - ImageCarousel.jsx
  - VideoButton.jsx
  - Testimonials.jsx
  - Footer.jsx
  - Navbar.jsx
  - mockData.js

✅ **Documentación creada**:
  - EXPLICACION_PROYECTO.md (Guía completa)
  - Este archivo (Referencia rápida)

---

**Última actualización**: Febrero 2026
**Proyecto**: FinalDIW - Agencia Marketing Digital
**Stack**: React 19 + Vite + Tailwind CSS
