import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Contacto y Agendamiento</h1>
          <p>Estamos aquí para resolver tus dudas y acompañarte en tu transformación.</p>
        </div>
      </section>

      <section className="contact-section container">
        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <p>Visítanos en nuestra clínica o contáctanos por nuestros canales digitales.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Calle Falsa 123, Edificio Médico, Cons. 405<br/>Bogotá, Colombia</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Phone /></div>
                <div>
                  <h4>Teléfono / WhatsApp</h4>
                  <p>+57 300 123 4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p>contacto@dryesidmoreno.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Clock /></div>
                <div>
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br/>Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-container">
            <h2>Envíanos un Mensaje</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" placeholder="Tu nombre" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input type="tel" id="phone" placeholder="Tu número de contacto" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Servicio de Interés</label>
                <select id="service">
                  <option value="">Selecciona una opción</option>
                  <option value="armonizacion">Armonización Facial</option>
                  <option value="rejuvenecimiento">Rejuvenecimiento Láser</option>
                  <option value="corporal">Tratamientos Corporales</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows="4" placeholder="¿En qué te podemos ayudar?" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">
                Enviar Mensaje <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
