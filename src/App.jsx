import Grainient from './components/background/Grainient'

import './App.css'
// Navbar
import Navbar from './pages/Navbar'
// Hero
import Hero from './pages/Hero'


function App() {

  return (
    <>
      <div className="app">
        <Grainient />
        <main className="container">
          <Navbar />
          <Hero/>
        </main>
      </div>
    </>
  )
}

export default App
