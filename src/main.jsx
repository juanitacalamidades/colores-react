import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Colores from './Colores'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Colores />
  </StrictMode>,
)
