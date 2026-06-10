import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          DR. YESID MORENO
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/sobre-el-doctor" onClick={() => setIsOpen(false)}>Sobre el Doctor</Link>
          <Link to="/procedimientos" onClick={() => setIsOpen(false)}>Procedimientos</Link>
          <Link to="/resultados" onClick={() => setIsOpen(false)}>Resultados</Link>
          <Link to="/promociones" onClick={() => setIsOpen(false)}>Promociones</Link>
          <Link to="/contacto" className="btn-primary" onClick={() => setIsOpen(false)}>Agendar Cita</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
