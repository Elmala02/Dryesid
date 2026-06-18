import React from 'react';
import { Award, GraduationCap, Star, Play } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Hero About */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-text">
            <h1>Sobre el Doctor</h1>
            <h2>Dr. Yesid Moreno</h2>
            <p>Especialista en Medicina Estética Avanzada</p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="about-bio container">
        <div className="bio-grid">
          <div className="bio-image">
            <img src="/images/doctor/_MG_0750.jpg" alt="Dr. Yesid Moreno en consulta" />
          </div>
          <div className="bio-content">
            <h3>Mi Filosofía de Trabajo</h3>
            <p>
              "Mi objetivo principal es realzar la belleza natural de cada paciente, 
              manteniendo la armonía y proporción facial y corporal. Creo firmemente 
              en que la medicina estética debe ser sutil, elegante y segura."
            </p>
            <p>
              Con años de experiencia en el sector, me he dedicado a perfeccionar 
              técnicas vanguardistas para ofrecer resultados excepcionales que no solo 
              mejoran la apariencia física, sino que también fortalecen la autoestima 
              y confianza de quienes confían en mis manos.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="about-credentials">
        <div className="container credentials-container">
          <div className="credential-card">
            <GraduationCap className="credential-icon" size={40} />
            <h4>Formación Académica</h4>
            <p>Médico Cirujano con especialización en Medicina Estética Avanzada y Antienvejecimiento.</p>
          </div>
          <div className="credential-card">
            <Award className="credential-icon" size={40} />
            <h4>Certificaciones</h4>
            <p>Miembro activo de las principales asociaciones internacionales de Medicina Estética.</p>
          </div>
          <div className="credential-card">
            <Star className="credential-icon" size={40} />
            <h4>Reconocimientos</h4>
            <p>Reconocido por su excelencia técnica y trato humano, destacando en armonización facial.</p>
          </div>
        </div>
      </section>
    {/* Instagram Videos Section */}
      <section className="about-instagram">
        <div className="container">
          <div className="instagram-header">
            <InstagramIcon size={48} className="instagram-icon-main" />
            <h2>Conoce más en Instagram</h2>
            <p>Descubre casos reales, testimonios y el día a día en nuestro consultorio.</p>
          </div>
          <div className="instagram-video-grid">
            {[
              'https://www.instagram.com/p/DVRWe42ERvW/',
              'https://www.instagram.com/p/DX7axcJxdXM/',
              'https://www.instagram.com/p/DYDu0VxjYfP/'
            ].map((url, i) => (
              <div key={i} className="instagram-embed-card">
                <iframe 
                  src={`${url}embed/`}
                  width="100%"
                  height="540"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', backgroundColor: 'white' }}
                ></iframe>
              </div>
            ))}
          </div>
          <div className="instagram-action text-center">
            <a 
              href="https://www.instagram.com/dr.yesidmoreno?igsh=cTdmdHJ1dzc5b3Zr&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Seguir a @dr.yesidmoreno
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
