import './css/Navbar.css'
import logo from '../assets/Logo.png'
import { useState } from 'react'
import Title from '../components/titles/Title';
import Button from '../components/buttons/Button';


function Navbar() {
  const navItems = [
    { name: 'Inicio', link: '#hero' },
    { name: 'Portafolio', link: '#portfolio' },
    { name: 'Proyectos', link: '#services' },
    { name: 'Nosotros', link: '#nosotros' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src={logo} alt="" className='logo'/>
        <Title className='title-logo'>ApexScale</Title>
      </div>

      <ul className={`navbar-items ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <Button className='contact-button '>
          Hablemos
        </Button>
      </div>
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  )
}

export default Navbar