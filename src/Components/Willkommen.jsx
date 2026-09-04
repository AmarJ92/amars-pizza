import React from 'react'

const eventTypes = [
  { title: 'Geburtstage', icon: '🎂' },
  { title: 'Hochzeiten', icon: '💍' },
  { title: 'Firmenfeiern', icon: '🤝' },
  { title: 'Kita- & Schulfeste', icon: '🎈' },
  { title: 'Sommerfeste', icon: '☀️' },
  { title: 'Festivals & Märkte', icon: '🎪' },
  { title: 'Private Gartenpartys', icon: '🌿' },
  { title: 'Einfach, weil Pizza passt', icon: '🍕' },
]

const Willkommen = () => {
  return (
    <div id="willkommen" className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Buche dein Pizza-Catering – für jeden Anlass, der nach Genuss ruft!
          </h1>
          <div className="event-intro">
            <p className="primary-subheading">Pizza-Momente für jede Feier</p>
            <div className="event-card-grid">
              {eventTypes.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="event-card-overlay">
                    <span className="event-card-icon" aria-hidden="true">{event.icon}</span>
                    <h2>{event.title}</h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="primary-text welcome-copy">
            <p>
              <strong>Hey! Ich bin Amar und freue mich riesig, dass du hier bist.</strong>
              <br />
              Alles begann mit dem Wunsch nach einer richtig guten italienischen Pizza – selbst gemacht, mit Herz und Leidenschaft.
              Was einst nur ein Traum war, wurde zur Realität: Heute teile ich meine Begeisterung für neapolitanische Pizza auf Events in ganz Frankfurt und Umgebung.
              <br />
              <br />
              Mit meinem mobilen Pizzaofen bringe ich den Geschmack Neapels direkt zu euch – frisch belegt, live gebacken und ein Highlight auf jeder Feier.
              <br />
              <br />
              Lass uns gemeinsam ein Event schaffen, das in Erinnerung bleibt – mit knusprigem Rand, geschmolzenem Käse und ganz viel Amore.
              <br />
              <br />
              Ich freue mich auf deine Anfrage!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Willkommen
