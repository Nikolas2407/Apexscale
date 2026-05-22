import Grainient from './components/background/Grainient'

import './App.css'
// Navbar
import Navbar from './pages/Navbar'
// Hero
import Hero from './pages/Hero'
import Servicios from './pages/Servicios'
import Frase from './pages/Frase'
import Proceso from './pages/Proceso'
import Footer from './pages/Footer'


function App() {

  return (
    <>
      <div className="app">
        <Grainient />
        <main className="container">
          <Navbar />
          <Hero/>
          <Servicios />
          <Frase />
          <Proceso />
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App
