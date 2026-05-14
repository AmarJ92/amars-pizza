import React from 'react'
import { FaInstagram, FaTiktok, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Buchung = () => {

    const workInfoData = [
        {
            icon: '⚡',
            title: "Vorraussetzungen",
            text: <ul style={{ textAlign: 'left' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span role="img" aria-label="Steckdose">🔌</span>
                Steckdose (230V, 3KW) - Direktanschluss (ohne Kabeltrommel)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span role="img" aria-label="Tisch">🪑</span>
                Tisch/Küchenzeile mind. 2 m breit und 90-100 cm hoch
              </li>
            </ul>,
        },
        {
            icon: '📱',
            title: "Kontaktiere mich via...",
            text: <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
            <li><a href="https://www.instagram.com/amars_pizza/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Instagram</a></li>
            <li><a href="https://www.tiktok.com/@amar.javid?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"><FaTiktok style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> TikTok</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61570978888884" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Facebook</a></li>
            <li><a href="mailto:info@amars-pizza.de"><FaEnvelope style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Email</a></li>
            <li><a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> WhatsApp</a></li>
            <li style={{ marginTop: '1rem', fontWeight: '600' }}>Oder nutze das Anfrage-Formular weiter unten auf der Seite.</li>
          </ul>,
        },
        {
            icon: '🎉',
            title: "Es kann losgehen!",
            text: "Nachdem alle Einzelheiten geklärt sind, kann die Pizza-Party starten! Deine Gäste werden es lieben!",

        },
    ]

  return (
    <div id="buchung" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Buchung</p>
        <h1 className="primary-heading">Kontaktiere mich...</h1>
        <p className="primary-text">
            Lass uns gemeinsam die Schritte durchgehen
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
            <div key={index} className="work-section-info">
                <div className="info-boxes-img-container">
                    <span style={{ fontSize: '3rem' }}>{data.icon}</span>
                </div>
                <h2>{data.title}</h2>
                {typeof data.text === 'string' ? <p>{data.text}</p> : <div>{data.text}</div>}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Buchung