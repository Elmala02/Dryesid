import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María Alejandra C.',
      text: 'El Dr. Yesid superó todas mis expectativas. La naturalidad del resultado es increíble, nadie nota que me hice algo, pero todos me dicen que me veo descansada y radiante.',
      procedure: 'Armonización Facial'
    },
    {
      id: 2,
      name: 'Carlos V.',
      text: 'Buscaba un profesional ético y el Dr. Moreno me inspiró confianza desde el primer minuto. Me explicó todo con detalle y los resultados fueron exactamente lo que me prometió.',
      procedure: 'Rejuvenecimiento Láser'
    },
    {
      id: 3,
      name: 'Laura M.',
      text: 'Tenía mucho miedo a los cambios drásticos. El doctor entendió perfectamente mi estilo y logró un perfil nasal soñado sin cirugía. 100% recomendado.',
      procedure: 'Rinomodelación'
    }
  ];

  return (
    <div className="testimonials-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Resultados y Testimonios</h1>
          <p>Experiencias reales de pacientes que confiaron en nosotros.</p>
        </div>
      </section>

      {/* Casos Clínicos */}
      <section className="clinical-cases container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>Casos de Éxito Reales</h2>
        <div className="cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div className="case-item">
            <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '1rem' }}>Caso Clínico 1: Armonización Facial</h3>
            <BeforeAfterSlider
              beforeImage="/images/cambio1-before.png"
              afterImage="/images/cambio1-after.png"
            />
          </div>
          <div className="case-item">
            <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '1rem' }}>Caso Clínico 2: Definición Estética</h3>
            <BeforeAfterSlider
              beforeImage="/images/cambio2-before.png"
              afterImage="/images/cambio2-after.png"
            />
          </div>
        </div>
      </section>

      <section className="testimonials-section container">
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <MessageSquareQuote size={40} className="quote-icon" />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <h4>{t.name}</h4>
                <span>{t.procedure}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="disclaimer-banner">
          <p>
            * Todos los casos de antes y después presentados corresponden a pacientes reales tratados por el Dr. Yesid Moreno en Aesthetic Evolution. Los resultados individuales pueden variar según cada paciente.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
