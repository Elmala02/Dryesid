import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
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
            * Los resultados pueden variar de un paciente a otro. Todas las imágenes de casos de éxito clínico
            antes/después se encuentran disponibles en consulta física para garantizar la privacidad y cumplimiento
            normativo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
