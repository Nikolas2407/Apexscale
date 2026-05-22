import Grainient from './components/background/Grainient'

import './App.css'
// Navbar
import Navbar from './pages/Navbar'
// Hero
import Hero from './pages/Hero'
// Servicios
import Servicios from './pages/Servicios'

import Proceso from './pages/Proceso'
import Footer from './pages/Footer'
// Nosotros
import Nosotros from './pages/Nosotros'


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
          {/* <Frase /> */}
          <Proceso />
          <Footer />

        </main>
      </div>
    </>
  )
}

export default App
