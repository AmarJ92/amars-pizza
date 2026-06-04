import React, { useState, useEffect } from 'react';
import '../Styles/FloatingPizza.css';

function FloatingPizza() {
  const [wobble, setWobble] = useState(0);
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Subtile Wackelbewegung basierend auf Scroll-Position
      setWobble((window.scrollY / 50) % 360);
      
      // Kleine Drehung für zusätzlichen Effekt
      setTilt(Math.sin(window.scrollY / 100) * 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="floating-pizza"
      style={{
        transform: `rotate(${wobble}deg) skewY(${tilt}deg)`,
      }}
    >
      <div className="pizza-emoji">🍕</div>
      <div className="pizza-sparkles">✨</div>
    </div>
  );
}

export default FloatingPizza;
