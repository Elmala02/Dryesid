import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../components/CartContext';
import './Products.css';

const promotions = [
  { id: 1, title: 'Descuento Labios', oldPrice: '$900.000', price: 850000, newPriceString: '$850.000', category: 'Promoción', desc: 'Potencia el atractivo de tus labios con una técnica que aporta volumen, hidratación y un perfilado exquisito. ¡Atrévete a sonreír con confianza!', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Descuento Rinomodelación', oldPrice: 'Desde $1.000.000', price: 899000, newPriceString: 'Desde $899.000', category: 'Promoción', desc: 'Consigue el perfil que siempre has deseado en una sola sesión. Resultados naturales y armónicos sin pasar por el quirófano.', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Descuento Botox 1 zona', oldPrice: '$600.000', price: 499000, newPriceString: '$499.000', category: 'Promoción', desc: 'El primer paso hacia un rostro más joven. Elimina esas líneas persistentes y dale a tu piel un aspecto liso y descansado.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Descuento Botox 2 zonas', oldPrice: '$900.000', price: 799000, newPriceString: '$799.000', category: 'Promoción', desc: 'Tratamiento dual para una frente despejada y un entrecejo relajado. La combinación perfecta para suavizar tu expresión.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80' },
  { id: 5, title: 'Descuento Botox Full Face', oldPrice: '$1.500.000', price: 1299000, newPriceString: '$1.299.000', category: 'Promoción', desc: 'Nuestro protocolo estrella antiedad. Un rejuvenecimiento facial completo que suaviza líneas, abre la mirada y tensa la piel.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: 'Combo "Beauty Lips"', price: 1199000, newPriceString: '$1.199.000', category: 'Combo', desc: 'El dúo infalible: labios jugosos y atractivos junto con la aplicación de botox en tu zona preferida para un rostro fresco y radiante.', img: 'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af?auto=format&fit=crop&w=600&q=80' },
  { id: 7, title: 'Combo "Perfil Perfecto"', price: 1699000, newPriceString: '$1.699.000', category: 'Combo', desc: 'La sinergia ideal para tu rostro. Eleva la punta de tu nariz, corrige imperfecciones del perfil y añade el volumen perfecto a tus labios.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80' },
  { id: 8, title: 'Combo "Rejuvenece"', price: 1999000, newPriceString: '$1.999.000', category: 'Combo', desc: 'Despídete de la mirada cansada. Eliminamos el hundimiento de tus ojeras, combinado con Botox Full Face para una frescura total.', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80' },
  { id: 9, title: 'Combo "Armonización Premium"', price: 2699000, newPriceString: '$2.699.000', category: 'Combo', desc: 'Un rediseño magistral de tu rostro. Pómulos proyectados, mentón definido y labios sensuales para un óvalo facial de pasarela.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80' },
  { id: 10, title: 'Plan "Glow Total"', price: 0, newPriceString: 'Gratis con valoración', category: 'Plan', desc: 'El plan de hidratación y juventud definitivo. Piel de porcelana, luminosa y sin arrugas. Incluye Skin Booster, PRP y Botox.', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80' },
  { id: 11, title: 'Plan "Transformación 360°"', price: 0, newPriceString: 'Obsequio incluido', category: 'Plan', desc: 'Déjate en nuestras manos. Un abordaje facial completo donde esculpimos cada ángulo de tu rostro. Te obsequiamos una sesión PRP para potenciar tu piel.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80' },
  { id: 12, title: 'Promo para Parejas', price: 0, newPriceString: 'Consultar Precio', category: 'Parejas', desc: 'Compartir belleza es el mejor regalo. Botox Full Face para ti y un precio muy especial y preferencial para quien te acompañe.', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80' },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="products-page animate-fade-in">
      {/* Header */}
      <section className="products-hero">
        <div className="products-hero-overlay" />
        <div className="container products-hero-content">
          <p className="section-eyebrow">Tratamientos exclusivos</p>
          <h1>Promociones y Combos</h1>
          <p>Aprovecha nuestros descuentos especiales y combos diseñados para resaltar tu belleza al mejor precio.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="promotions-grid-section container">
        <div className="promotions-grid">
          {promotions.map((promo) => (
            <div key={promo.id} className="promo-card">
              <div className="promo-image-container">
                <img src={promo.img} alt={promo.title} className="promo-image" />
                <div className="promo-badge">{promo.category}</div>
              </div>
              <div className="promo-content">
                <h3>{promo.title}</h3>
                {promo.desc && <p className="promo-description">{promo.desc}</p>}
                
                <div className="price-container">
                  {promo.oldPrice && (
                    <span className="old-price">{promo.oldPrice}</span>
                  )}
                  <span className="new-price">{promo.newPriceString}</span>
                </div>
                
                {promo.price > 0 ? (
                  <button className="btn-primary-lux add-cart-btn" onClick={() => addToCart(promo)}>
                    <ShoppingBag size={18} /> Añadir al Carrito
                  </button>
                ) : (
                  <Link to="/contacto" className="btn-outline-lux">Agendar Valoración</Link>
                )}
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
