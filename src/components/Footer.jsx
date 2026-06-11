import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src="/images/logo.png" alt="Aesthetic Evolution Logo" className="footer-logo" style={{ height: '60px', marginBottom: '1rem' }} />
          </div>
          <h3>AESTHETIC EVOLUTION</h3>
          <p>Medicina estética avanzada enfocada en resaltar tu belleza natural con seguridad y profesionalismo.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/aesthetic_evolution_bogota/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
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
            <li><MapPin size={18} /> <span>Bogotá Cll 82 #20-26</span></li>
            <li><Phone size={18} /> <span>+57 322 446 7275</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aesthetic Evolution. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
