import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, ShieldCheck, Heart } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Descubre la mejor versión de ti mismo</h1>
            <p>Medicina estética avanzada que resalta tu belleza natural con la experiencia y confianza del Dr. Yesid Moreno.</p>
            <div className="hero-actions">
              <Link to="/contacto" className="btn-primary">Agendar Cita</Link>
              <Link to="/procedimientos" className="btn-outline">Ver Procedimientos</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="features-section">
        <div className="container features-container">
          <div className="feature-card">
            <Award className="feature-icon" size={40} />
            <h3>Experiencia Certificada</h3>
            <p>Años de trayectoria garantizando resultados excepcionales y seguros.</p>
          </div>
          <div className="feature-card">
            <ShieldCheck className="feature-icon" size={40} />
            <h3>Seguridad y Confianza</h3>
            <p>Protocolos médicos rigurosos para cuidar de tu bienestar en cada paso.</p>
          </div>
          <div className="feature-card">
            <Heart className="feature-icon" size={40} />
            <h3>Atención Personalizada</h3>
            <p>Tratamientos diseñados específicamente para tus necesidades y objetivos.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
