import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Heart, Star } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import './Home.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    subtitle: 'Medicina Estética de Lujo',
    title: 'Descubre tu mejor versión',
    body: 'Tratamientos estéticos avanzados que realzan tu belleza natural con precisión médica y elegancia sin igual.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop',
    subtitle: 'Armonización Facial',
    title: 'Belleza que te pertenece',
    body: 'Cada procedimiento es diseñado a medida para respetar y potenciar tus rasgos únicos.',
  },
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'Ciencia & Arte',
    title: 'Resultados que inspiran confianza',
    body: 'Tecnología de vanguardia combinada con el arte de la medicina estética de alto nivel.',
  },
];

const features = [
  { icon: <Award size={32} />, title: 'Experiencia Certificada', desc: 'Años de trayectoria avalan resultados excepcionales y seguros en cada procedimiento.' },
  { icon: <ShieldCheck size={32} />, title: 'Protocolos Rigurosos', desc: 'Estándares médicos de alto nivel para garantizar tu seguridad y bienestar en todo momento.' },
  { icon: <Heart size={32} />, title: 'Atención Personalizada', desc: 'Tratamientos diseñados específicamente para ti, respetando tu esencia y objetivos.' },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">

      {/* ─── Hero Slider ─── */}
      <section className="hero-section">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === activeSlide ? 'active' : ''}`}
               style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="hero-overlay" />
          </div>
        ))}
        <div className="container hero-content animate-fade-in">
          <p className="hero-subtitle">{slides[activeSlide].subtitle}</p>
          <h1>{slides[activeSlide].title}</h1>
          <p className="hero-body">{slides[activeSlide].body}</p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn-primary">Agendar Cita</Link>
            <Link to="/procedimientos" className="btn-outline hero-btn-outline">Ver Procedimientos</Link>
          </div>
        </div>
        {/* Slide Dots */}
        <div className="slide-dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)} />
          ))}
        </div>
      </section>

      {/* ─── Feature Cards ─── */}
      <section className="features-section">
        <div className="container features-container">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass-panel">
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About Brief ─── */}
      <section className="home-about">
        <div className="container home-about-grid">
          <div className="home-about-img">
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" alt="Dr. Yesid Moreno" />
            <div className="about-img-badge">
              <Star fill="#C6A56A" size={14} />
              <span>Especialista Certificado</span>
            </div>
          </div>
          <div className="home-about-text">
            <p className="section-eyebrow">Por qué elegirnos</p>
            <h2>Resultados que <em>hablan por ti</em></h2>
            <p>En el consultorio del Dr. Yesid Moreno creemos que la medicina estética es un arte que debe respetar tu esencia. Combinamos tecnología de última generación con una visión clínica refinada para ofrecer resultados naturales, seguros y duraderos.</p>
            <ul className="about-checks">
              <li><span className="check-dot" />Impacto visible desde la primera sesión</li>
              <li><span className="check-dot" />Belleza que te acompaña por más tiempo</li>
              <li><span className="check-dot" />Tratamientos seguros con rápida recuperación</li>
              <li><span className="check-dot" />Resaltamos tu rostro con precisión estética</li>
            </ul>
            <Link to="/sobre-el-doctor" className="btn-outline">Conocer al Doctor</Link>
          </div>
        </div>
      </section>

      {/* ─── Before / After ─── */}
      <section className="before-after-section">
        <div className="container">
          <div className="section-title">
            <p>Casos de éxito</p>
            <h2>Antes &amp; Después</h2>
          </div>
          <p className="ba-instruction">Arrastra el control central para comparar el resultado</p>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1974&auto=format&fit=crop"
          />
          <p className="ba-disclaimer">* Imágenes con fines ilustrativos. Los casos clínicos reales están disponibles en consulta previa autorización del paciente.</p>
        </div>
      </section>

      {/* ─── Super Promos Preview ─── */}
      <section className="promos-preview">
        <div className="container">
          <div className="section-title">
            <p>Ofertas exclusivas</p>
            <h2>Super Promos</h2>
          </div>
          <div className="promos-preview-grid">
            {[
              { title: 'Jawline Power', price: '3,200,000', tag: 'Más vendido' },
              { title: 'Hydra Glow',   price: '2,200,000', tag: 'Favorito' },
              { title: 'Red Carpet',   price: '3,900,000', tag: 'Premium' },
            ].map((p, i) => (
              <div key={i} className="promo-preview-card">
                {p.tag && <span className="promo-tag">{p.tag}</span>}
                <h3>{p.title}</h3>
                <p className="promo-price-preview">${p.price} COP</p>
                <Link to="/promociones" className="btn-outline">Ver Detalles</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/promociones" className="btn-primary">Ver Todas las Promos</Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Preview ─── */}
      <section className="testimonials-preview">
        <div className="container">
          <div className="section-title">
            <p>Opiniones reales</p>
            <h2>Lo que dicen nuestros pacientes</h2>
          </div>
          <div className="testimonials-preview-grid">
            {[
              { name: 'María Alejandra C.', text: 'El resultado fue absolutamente natural. Todos me dicen que luzco más radiante, pero nadie nota que me realicé algo. ¡Increíble!', proc: 'Armonización Facial' },
              { name: 'Laura M.', text: 'Tenía miedo a cambios drásticos. El doctor entendió mi estilo y logró un resultado soñado sin cirugía.', proc: 'Rinomodelación' },
              { name: 'Carlos V.', text: 'Profesionalismo y confianza desde el primer minuto. Los resultados fueron exactamente lo prometido.', proc: 'Rejuvenecimiento' },
            ].map((t, i) => (
              <div key={i} className="testimonial-preview-card glass-panel">
                <div className="stars">{'★'.repeat(5)}</div>
                <p>"{t.text}"</p>
                <div className="t-author">
                  <strong>{t.name}</strong>
                  <span>{t.proc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WhatsApp FAB — derecha ─── */}
      <a href="https://wa.me/573224467275" target="_blank" rel="noopener noreferrer"
         className="whatsapp-fab">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Home;
