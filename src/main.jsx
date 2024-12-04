import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
// import Footer from './components/Footer/index.jsx'
// import Header from './components/Header/index.jsx'
import Home from './pages/Inicio/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home />
  </StrictMode>,
)
