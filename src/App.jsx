import Grainient from './components/background/Grainient'

import './App.css'
// Navbar
import Navbar from './pages/Navbar'
// Hero
import Hero from './pages/Hero'
import Servicios from './pages/Servicios'


function App() {

  return (
    <>
      <div className="app">
        <Grainient />
        <main className="container">
          <Navbar />
          <Hero/>
          <Servicios />
        </main>
      </div>
    </>
  )
}

export default App
