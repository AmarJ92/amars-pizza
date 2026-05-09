import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Amar's Pizza. Alle Rechte vorbehalten.</p>
        <div className="footer-links">
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/amars_pizza/" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
          <a href="https://www.tiktok.com/@amar.javid?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" title="TikTok">🎵</a>
          <a href="https://www.facebook.com/profile.php?id=61570978888884" target="_blank" rel="noopener noreferrer" title="Facebook">👍</a>
          <a href="mailto:info@amars-pizza.de" title="Email">✉️</a>
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp">💬</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;