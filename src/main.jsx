import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Footer from './components/Footer/index.jsx'
import Header from './components/Header/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    
    <Footer />
  </StrictMode>,
)
