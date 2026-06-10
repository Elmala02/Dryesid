import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Mitos y verdades sobre el Ácido Hialurónico',
      excerpt: 'Descubre todo lo que necesitas saber antes de realizarte un tratamiento con ácido hialurónico. Despejamos las dudas más comunes.',
      date: '10 de Junio, 2026',
      image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Cómo preparar tu piel para el verano',
      excerpt: 'El sol y el calor pueden afectar la salud de tu piel. Conoce nuestros tratamientos recomendados para mantenerla radiante.',
      date: '28 de Mayo, 2026',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Beneficios del Rejuvenecimiento Láser',
      excerpt: 'El láser ha revolucionado la medicina estética. Entiende cómo funciona y por qué es uno de nuestros tratamientos estrella.',
      date: '15 de Mayo, 2026',
      image: 'https://images.unsplash.com/photo-1614859324967-bdfce59c16ed?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="blog-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Blog y Educación</h1>
          <p>Artículos, consejos y novedades sobre medicina estética.</p>
        </div>
      </section>

      <section className="blog-section container">
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to="#" className="blog-link">
                  Leer artículo <ChevronRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
