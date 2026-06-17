import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const handleCheckout = () => {
    const itemsText = cart
      .map(item => `- ${item.title} (${item.quantity}x) - $${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');
    const msg = `Hola Dr. Yesid Moreno, me gustaría agendar una cita para los siguientes tratamientos:\n\n${itemsText}\n\nTotal estimado: $${cartTotal.toLocaleString()}\n\nPor favor contáctenme para coordinar fecha y hora.`;
    window.open(`https://wa.me/573237690957?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">

          {/* LOGO — izquierda */}
          <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            DR. YESID MORENO
          </Link>

          {/* LINKS — centro (desktop) */}
          <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/sobre-el-doctor" onClick={() => setIsOpen(false)}>Sobre el Doctor</Link>
            <Link to="/procedimientos" onClick={() => setIsOpen(false)}>Procedimientos</Link>
            <Link to="/resultados" onClick={() => setIsOpen(false)}>Resultados</Link>
            <Link to="/promociones" onClick={() => setIsOpen(false)}>Promociones</Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
          </nav>

          {/* ACCIONES — derecha */}
          <div className="navbar-actions">
            {/* Carrito */}
            <button className="cart-trigger-btn" onClick={() => setIsCartOpen(true)} aria-label="Abrir carrito">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* CTA agendar — solo desktop */}
            <Link to="/contacto" className="btn-primary nav-cta" onClick={() => setIsOpen(false)}>
              Agendar Cita
            </Link>

            {/* Hamburger — solo mobile */}
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Cart Drawer ── */}
      <div
        className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      >
        <div className="cart-drawer glass-panel-dark" onClick={e => e.stopPropagation()}>
          <div className="cart-drawer-header">
            <h3>Tu Carrito</h3>
            <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="cart-drawer-items">
            {cart.length === 0 ? (
              <div className="empty-cart-message">
                <ShoppingBag size={48} />
                <p>Tu carrito está vacío</p>
                <Link to="/promociones" className="btn-gold" onClick={() => setIsCartOpen(false)}>
                  Ver Tratamientos
                </Link>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p className="cart-item-price">${item.price.toLocaleString()} COP</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                    </div>
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-drawer-footer">
              <div className="cart-total-row">
                <span>Total Estimado:</span>
                <span className="total-amount">${cartTotal.toLocaleString()} COP</span>
              </div>
              <p className="cart-disclaimer">* El pago y agendamiento final se coordinarán por WhatsApp.</p>
              <button className="btn-gold checkout-btn" onClick={handleCheckout}>
                Agendar por WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
