import React, { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Antes", afterLabel = "Después" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div 
      className="ba-slider-container" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (background) */}
      <div className="ba-image after-image">
        <img src={afterImage} alt="Después" />
        <span className="ba-label label-after">{afterLabel}</span>
      </div>

      {/* Before image (foreground overlay) */}
      <div 
        className="ba-image before-image" 
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt="Antes" />
        <span className="ba-label label-before">{beforeLabel}</span>
      </div>

      {/* Slide Handle */}
      <div 
        className="ba-handle" 
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="ba-handle-line"></div>
        <div className="ba-handle-button">
          <span>&#9664;</span>
          <span>&#9654;</span>
        </div>
        <div className="ba-handle-line"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
