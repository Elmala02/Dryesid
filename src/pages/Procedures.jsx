import React from 'react';
import { Link } from 'react-router-dom';
import './Procedures.css';

const Procedures = () => {
  const regularProcedures = [
    { id: 1, title: 'Botox 1 zona', price: '$600.000', desc: 'Suaviza las líneas de expresión y recupera una mirada descansada con resultados naturales y precisos.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Botox 2 zonas', price: '$900.000', desc: 'Rejuvenece tu tercio superior atenuando arrugas en frente y entrecejo para una apariencia fresca y radiante.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Botox 3 zonas', price: '$1.200.000', desc: 'El tratamiento ideal para borrar el cansancio de tu rostro. Frente, entrecejo y patas de gallo impecables.', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Botox Full Face', price: '$1.500.000', desc: 'Efecto lifting sin cirugía. Relaja los músculos faciales estratégicamente para un rejuvenecimiento global y armónico.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Arrugas del labio superior', price: '$650.000 – $950.000', desc: 'Atenuamos las molestas líneas peribucales (código de barras) para que el contorno de tu boca luzca terso y rejuvenecido.', img: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, title: 'Surcos nasogenianos', price: '$850.000', desc: 'Relleno sutil con ácido hialurónico para suavizar las líneas de la sonrisa y devolver la juventud a tu rostro.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80' },
    { id: 7, title: 'Ojeras', price: '$900.000', desc: 'Ilumina tu mirada al instante. Relleno especializado que elimina el aspecto de cansancio y las sombras bajo los ojos.', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80' },
    { id: 8, title: 'Perfilado y aumento de labios', price: '$900.000', desc: 'Labios jugosos, simétricos y definidos. Diseñamos la sonrisa de tus sueños con la técnica perfecta para ti.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80' },
    { id: 9, title: 'Mentón', price: '$1.000.000', desc: 'Proyección y equilibrio. Define tu óvalo facial y mejora tu perfil con una armonización de mentón sin cirugía.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80' },
    { id: 10, title: 'Rinomodelación', price: '$1.000.000 – $1.300.000', desc: 'Corrige imperfecciones y respinga tu nariz en minutos. Una alternativa segura al bisturí con resultados inmediatos.', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80' },
    { id: 11, title: 'Pómulos', price: '$1.100.000', desc: 'Devuelve el volumen perdido y logra un efecto tensor natural que resaltará tu estructura ósea de forma elegante.', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80' },
    { id: 12, title: 'Armonización facial', price: 'Desde $3.200.000', desc: 'La obra maestra de la estética. Un abordaje integral 360° para esculpir, equilibrar y potenciar tu belleza única.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="procedures-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Nuestros Procedimientos</h1>
          <p>Descubre nuestros tratamientos de medicina estética diseñados para resaltar tu belleza natural con resultados excepcionales.</p>
        </div>
      </section>

      {/* Procedimientos Regulares Section */}
      <section className="procedures-grid-section container">
        <div className="procedures-grid">
          {regularProcedures.map(proc => (
            <div key={proc.id} className="procedure-card">
              <div className="procedure-image-container">
                <img src={proc.img} alt={proc.title} className="procedure-image" />
              </div>
              <div className="procedure-content">
                <h3>{proc.title}</h3>
                <p className="procedure-desc" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{proc.desc}</p>
                <div className="procedure-price">{proc.price}</div>
                <Link to="/contacto" className="btn-outline-lux">Agendar Cita</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Procedures;
