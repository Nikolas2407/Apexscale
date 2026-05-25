import Grainient from './components/background/Grainient'
import { FaWhatsapp } from "react-icons/fa";
import './App.css'
// Navbar
import Navbar from './pages/Navbar'
// Hero
import Hero from './pages/Hero'
// Servicios
import Servicios from './pages/Servicios'
// Nosotros
import Nosotros from './pages/Nosotros'
// Proceso
import Proceso from './pages/Proceso'
// Proyectos
import Proyects from './pages/proyects'
// Us
import Us from './pages/Us'
// Footer
import Footer from './pages/Footer'



function App() {

  return (
    <>
      <div className="app">
        <Grainient />
        <main className="container">
          <Navbar />
          <Hero />
          <Servicios />
          <Nosotros />
          <Proceso />
          <Proyects />
          <Us />
          <Footer />


      <a
        href="https://wa.me/573112807065"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

        </main>
      </div>
    </>
  )
}

export default App
