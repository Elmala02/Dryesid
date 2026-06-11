import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../components/CartContext';
import './Products.css';

const treatments = [
  { id: 1, title: 'Reparación Premium', price: 4500000, category: 'Facial', desc: 'Protocolo completo de reparación cutánea con tecnología de última generación. Resultados visibles desde la primera sesión.' },
  { id: 2, title: 'Red Carpet',        price: 3900000, category: 'Facial', desc: 'Tratamiento express de alto impacto para lucir radiante en eventos especiales. Hidratación + luminosidad intensiva.' },
  { id: 3, title: 'Stop Time',         price: 3800000, category: 'Antiedad', desc: 'Protocolo antiedad integral que combina bio-estimulación y neuromoduladores para una apariencia juvenil duradera.' },
  { id: 4, title: 'Hydra Glow',        price: 2200000, category: 'Hidratación', desc: 'Hidratación profunda con ácido hialurónico puro para piel plump, luminosa y revitalizada.' },
  { id: 5, title: 'Jawline Power',     price: 3200000, category: 'Armonización', desc: 'Definición y proyección del ángulo mandibular con rellenos de última generación para un perfil escultural.' },
  { id: 6, title: 'Frescura 360°',     price: 700000,  category: 'Básico', desc: 'Limpieza facial profunda + Peeling enzimático para renovar por completo la textura de tu piel.' },
  { id: 7, title: 'Sonrisa en Armonía',price: 1600000, category: 'Facial', desc: 'Corrección de sonrisa gingival y armonización de labios para una sonrisa equilibrada y seductora.' },
  { id: 8, title: 'Antiage Supreme',   price: 9000000, category: 'Premium', desc: 'El protocolo antiaging más completo: lifting con hilos, bioestimulación y rejuvenecimiento integral.' },
  { id: 9, title: 'Él & Ella Premium', price: 2400000, category: 'Couples', desc: 'Tratamiento exclusivo para parejas con protocolo personalizado para él y ella. Ideal como regalo.' },
  { id: 10, title: 'Full Glam',        price: 3500000, category: 'Completo', desc: 'Transformación total: armonización facial + retoque labial + toxina botulínica + hidratación profunda.' },
];

const categoryColors = {
  Facial: '#6D1F2A',
  Antiedad: '#4A0E17',
  Hidratación: '#C6A56A',
  Armonización: '#8A2B3A',
  Básico: '#333333',
  Premium: '#D4AF37',
  Couples: '#6D1F2A',
  Completo: '#4A0E17',
};

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="products-page animate-fade-in">
      {/* Header */}
      <section className="products-hero">
        <div className="products-hero-overlay" />
        <div className="container products-hero-content">
          <p className="section-eyebrow">Tratamientos exclusivos</p>
          <h1>Super Promos</h1>
          <p>Selecciona tus tratamientos y agéndalos directamente por WhatsApp</p>
        </div>
      </section>

      {/* Grid */}
      <section className="products-grid-section container">
        <div className="products-grid">
          {treatments.map((t) => (
            <div key={t.id} className="treatment-card">
              <div className="treatment-category-badge"
                   style={{ backgroundColor: categoryColors[t.category] || '#6D1F2A' }}>
                {t.category}
              </div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <div className="treatment-footer">
                <div className="treatment-price">${t.price.toLocaleString()} COP</div>
                <button className="add-to-cart-btn" onClick={() => addToCart(t)}>
                  <ShoppingBag size={16} />
                  Añadir
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="products-cta-strip">
        <div className="container">
          <h2>¿Tienes dudas sobre qué tratamiento es para ti?</h2>
          <p>Agenda una valoración gratuita con el Dr. Yesid Moreno y recibe una recomendación personalizada.</p>
          <Link to="/contacto" className="btn-gold">Solicitar Valoración Gratuita</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
