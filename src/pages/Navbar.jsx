import "./css/Navbar.css";
import logo from "../assets/Logo.png";
import { useEffect, useState } from "react";
import Title from "../components/titles/Title";
import Button from "../components/buttons/Button";

function Navbar() {
  const navItems = [
    { name: "Inicio", link: "#hero" },
    { name: "Servicios", link: "#servicios" },
    { name: "Proyectos", link: "#proyectos" },
    { name: "Nosotros", link: "#us" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="" className="logo" />
        <Title className="title-logo">ApexScale</Title>
      </div>

      <ul className={`navbar-items ${menuOpen ? "active" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <Button className="contact-button" link="#footer">
          Hablemos
        </Button>
      </div>
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
