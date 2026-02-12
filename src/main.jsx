// Punto de entrada de la aplicación React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Renderiza la aplicación React en el elemento con id="root"
// StrictMode ayuda a detectar problemas en desarrollo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
