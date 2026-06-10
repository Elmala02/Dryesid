import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Syringe, Scissors } from 'lucide-react';
import './Procedures.css';

const Procedures = () => {
  const proceduresList = [
    {
      id: 1,
      title: 'Armonización Facial',
      category: 'Facial',
      description: 'Equilibrio y proporción de los rasgos faciales utilizando ácido hialurónico y toxina botulínica para resaltar tu belleza natural sin perder tu esencia.',
      icon: <Sparkles size={32} />
    },
    {
      id: 2,
      title: 'Rejuvenecimiento Láser',
      category: 'Facial',
      description: 'Tratamientos avanzados para mejorar la textura, el tono de la piel, y reducir manchas, cicatrices y líneas finas de expresión.',
      icon: <Sparkles size={32} />
    },
    {
      id: 3,
      title: 'Rinomodelación sin Cirugía',
      category: 'Facial',
      description: 'Corrección de imperfecciones en el perfil nasal mediante la aplicación de ácido hialurónico de alta densidad, resultados inmediatos.',
      icon: <Syringe size={32} />
    },
    {
      id: 4,
      title: 'Tratamientos Corporales',
      category: 'Corporal',
      description: 'Tecnología de punta para la reducción de medidas, tratamiento de celulitis, flacidez y moldeamiento del contorno corporal.',
      icon: <Scissors size={32} />
    },
    {
      id: 5,
      title: 'Hilos Tensores',
      category: 'Facial y Corporal',
      description: 'Lifting no quirúrgico para reposicionar tejidos y estimular la producción de colágeno, logrando un efecto tensor duradero.',
      icon: <Syringe size={32} />
    },
    {
      id: 6,
      title: 'Bioestimulación Capilar',
      category: 'Capilar',
      description: 'Fortalecimiento del folículo piloso para detener la caída del cabello y promover un crecimiento fuerte y saludable.',
      icon: <Sparkles size={32} />
    }
  ];

  return (
    <div className="procedures-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Nuestros Procedimientos</h1>
          <p>Tecnología avanzada y técnicas de vanguardia para tu bienestar.</p>
        </div>
      </section>

      <section className="procedures-grid-section container">
        <div className="procedures-grid">
          {proceduresList.map(proc => (
            <div key={proc.id} className="procedure-card">
              <div className="procedure-icon">
                {proc.icon}
              </div>
              <div className="procedure-category">{proc.category}</div>
              <h3>{proc.title}</h3>
              <p>{proc.description}</p>
              <Link to="/contacto" className="btn-outline">Agendar Valoración</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Procedures;
