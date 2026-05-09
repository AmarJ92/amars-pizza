import React from 'react'

const Buchung = () => {

    const workInfoData = [
        {
            icon: '⚡',
            title: "Vorraussetzungen",
            text: <ul style={{ textAlign: 'left' }}>
              <li>Steckdose (230V, 3KW) - Direktanschluss (ohne Kabeltrommel)</li>
              <li>Tisch/Küchenzeile mind. 2 m breit und 90-100 cm hoch</li>
              <li>Nice-to-have: Kühlschrank</li>
              <li>Nice-to-have: Parkmöglichkeit direkt am Pizzastand</li>
              <li>Bei Regen: Partyzelt</li>
            </ul>,
        },
        {
            icon: '📱',
            title: "Kontaktiere mich via...",
            text: <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
            <li><a href="https://www.instagram.com/amars_pizza/" target="_blank" rel="noopener noreferrer">📷 Instagram</a></li>
            <li><a href="https://www.tiktok.com/@amar.javid?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">🎵 TikTok</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61570978888884" target="_blank" rel="noopener noreferrer">👍 Facebook</a></li>
            <li><a href="mailto:info@amars-pizza.de">✉️ Email</a></li>
            <li><a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
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
                <p>{data.text}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Buchung