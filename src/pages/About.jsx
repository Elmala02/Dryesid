import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';
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
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" alt="Dr. Yesid Moreno en consulta" />
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
    </div>
  );
};

export default About;
