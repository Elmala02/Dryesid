import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>DR. YESID MORENO</h3>
          <p>Medicina estética avanzada enfocada en resaltar tu belleza natural con seguridad y profesionalismo.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/sobre-el-doctor">Sobre el Doctor</Link></li>
            <li><Link to="/procedimientos">Procedimientos</Link></li>
            <li><Link to="/resultados">Resultados</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li><MapPin size={18} /> <span>Calle Falsa 123, Bogotá, Colombia</span></li>
            <li><Phone size={18} /> <span>+57 300 123 4567</span></li>
            <li><Mail size={18} /> <span>contacto@dryesidmoreno.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dr. Yesid Moreno. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
