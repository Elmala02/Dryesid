import React, { useState, useRef, useEffect } from 'react';
import { Gift, X } from 'lucide-react';
import './LuckyWheel.css';

const LuckyWheel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState(null);
  const [hasSpun, setHasSpun] = useState(() => {
    return localStorage.getItem('dryesid-has-spun') === 'true';
  });
  const canvasRef = useRef(null);

  const prizes = [
    { text: '10% Desc. Hydra Glow', color: '#6D1F2A' },
    { text: 'Valoración Gratis', color: '#C6A56A' },
    { text: '5% Desc. Botox', color: '#4A0E17' },
    { text: 'Kit Cuidado Facial', color: '#D6B782' },
    { text: '15% Desc. Peeling', color: '#6D1F2A' },
    { text: 'Sigue Participando', color: '#333333' }
  ];

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cw = canvas.width;
    const ch = canvas.height;
    const cx = cw / 2;
    const cy = ch / 2;
    const r = Math.min(cx, cy) - 10;

    ctx.clearRect(0, 0, cw, ch);

    // Draw slices
    const arc = (2 * Math.PI) / prizes.length;
    prizes.forEach((p, i) => {
      const angle = i * arc;
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, angle, angle + arc);
      ctx.lineTo(cx, cy);
      ctx.fill();

      // Golden border around slices
      ctx.strokeStyle = '#C6A56A';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Text
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.translate(cx, cy);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.font = 'bold 12px Montserrat';
      ctx.fillText(p.text, r - 30, 5);
      ctx.restore();
    });

    // Center gold cap
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#C6A56A';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

    // Center logo text or star
    ctx.fillStyle = '#6D1F2A';
    ctx.font = 'bold 20px Cormorant Garamond';
    ctx.textAlign = 'center';
    ctx.fillText('Dr.Y', cx, cy + 6);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(drawWheel, 100);
    }
  }, [isOpen]);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    let degree = 0;
    const spinTime = 4000;
    const startSpeed = 20 + Math.random() * 10;
    let speed = startSpeed;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= spinTime) {
        setIsSpinning(false);
        // Calculate result
        // Normalize degree
        const finalDeg = (degree % 360);
        // Canvas rotates clockwise, the top marker is at 270 deg (or Math.PI * 1.5)
        // Adjust calculated index accordingly
        const arcSize = 360 / prizes.length;
        // Marker is at top (270 deg). Subtract finalDeg from 270 to find which slice landed there
        let winningIndex = Math.floor((270 - finalDeg + 360) % 360 / arcSize);
        if (winningIndex < 0) winningIndex = 0;
        
        const finalPrize = prizes[winningIndex];
        setPrize(finalPrize);
        setHasSpun(true);
        localStorage.setItem('dryesid-has-spun', 'true');
        return;
      }

      // Smooth deceleration
      speed = startSpeed * (1 - elapsed / spinTime);
      degree += speed;
      canvas.style.transform = `rotate(${degree}deg)`;

      requestAnimationFrame(animate);
    };

    animate();
  };

  const handleClaim = () => {
    if (!prize) return;
    const msg = `Hola Dr. Yesid Moreno! Giré la ruleta en su web y gané el premio: "${prize.text}". Quisiera agendar mi valoración.`;
    window.open(`https://wa.me/573237690957?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Button */}
      {!hasSpun && (
        <button className="lucky-wheel-fab" onClick={() => setIsOpen(true)}>
          <Gift size={24} />
          <span>¡Gira y Gana!</span>
        </button>
      )}

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="lucky-wheel-modal-overlay">
          <div className="lucky-wheel-modal glass-panel-dark animate-fade-in">
            <button className="close-wheel-btn" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>

            {!prize ? (
              <div className="wheel-game-view">
                <h2>Prueba Tu Suerte</h2>
                <p>Gira la ruleta y gana un premio exclusivo para resaltar tu belleza.</p>
                
                <div className="wheel-canvas-container">
                  <div className="wheel-marker">▼</div>
                  <canvas ref={canvasRef} width={320} height={320} className="wheel-canvas" />
                </div>

                <button 
                  className="btn-gold spin-btn" 
                  onClick={spinWheel} 
                  disabled={isSpinning || hasSpun}
                >
                  {isSpinning ? 'Girando...' : '¡Girar Ahora!'}
                </button>
              </div>
            ) : (
              <div className="wheel-success-view">
                <Gift size={64} className="prize-gift-icon" />
                <h2>¡Felicitaciones!</h2>
                <p>Has ganado el siguiente premio:</p>
                <div className="winning-prize-text">{prize.text}</div>
                {prize.text !== 'Sigue Participando' ? (
                  <>
                    <p className="prize-instruction">Haz clic abajo para agendar tu cita y redimir tu premio por WhatsApp.</p>
                    <button className="btn-gold claim-btn" onClick={handleClaim}>
                      Reclamar Premio
                    </button>
                  </>
                ) : (
                  <button className="btn-outline close-btn-gold" onClick={() => setIsOpen(false)}>
                    Cerrar
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LuckyWheel;
