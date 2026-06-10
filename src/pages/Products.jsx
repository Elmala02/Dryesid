import React from 'react';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const promotions = [
    {
      id: 1,
      title: 'Pack Glow Facial',
      description: 'Limpieza facial profunda + Hidratación intensiva + Peeling ligero.',
      price: 'Consulta el precio especial',
      featured: true
    },
    {
      id: 2,
      title: 'Rejuvenecimiento Total',
      description: 'Armonización facial con ácido hialurónico (3 jeringas) + Toxina botulínica tercio superior.',
      price: '15% de descuento',
      featured: false
    },
    {
      id: 3,
      title: 'Moldeo Corporal Express',
      description: 'Paquete de 10 sesiones de aparatología avanzada para reducción de medidas.',
      price: 'Incluye valoración nutricional',
      featured: false
    }
  ];

  return (
    <div className="products-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Promociones y Paquetes Especiales</h1>
          <p>Descubre nuestras opciones exclusivas diseñadas para ti.</p>
        </div>
      </section>

      <section className="promotions-section container">
        <div className="promotions-grid">
          {promotions.map(promo => (
            <div key={promo.id} className={`promo-card ${promo.featured ? 'featured' : ''}`}>
              {promo.featured && <div className="promo-badge">Más Popular</div>}
              <Tag className="promo-icon" size={32} />
              <h3>{promo.title}</h3>
              <p className="promo-desc">{promo.description}</p>
              <div className="promo-price">{promo.price}</div>
              <Link to="/contacto" className="btn-primary">Reservar Promo</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
