import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Amar's Pizza. Alle Rechte vorbehalten.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/amars_pizza/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@amar.javid?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" title="TikTok"><FaTiktok /></a>
          <a href="https://www.facebook.com/profile.php?id=61570978888884" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
          <a href="mailto:info@amars-pizza.de" title="Email"><FaEnvelope /></a>
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp /></a>
        </div>
        <div id="impressum" className="footer-section">
          <h2>Impressum</h2>
          <p>Amar Javid<br />Galvanistraße 29<br />60486 Frankfurt</p>
        </div>
        <div id="datenschutz" className="footer-section">
          <h2>Datenschutz</h2>
          <p>Diese Website verwendet das Kontaktformular für direkte Anfragen. Deine Daten werden nur zur Bearbeitung deiner Anfrage gespeichert und nicht ohne Einwilligung weitergegeben.</p>
          <p>Mehr Informationen zum Datenschutz erhältst du auf Anfrage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;