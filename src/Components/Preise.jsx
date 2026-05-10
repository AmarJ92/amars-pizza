import React from 'react'

const Preise = () => {
  return (
    <div id="preise" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Preise</p>
        <h1 className="primary-heading">Fairness und Qualität harmonieren!</h1>
        <p className="primary-text">
          Meine Devise: Ein Pizza Catering muss nicht teuer sein – bei mir ist köstliches Pizzavergnügen mit hochwertigen Zutaten für jedermann erschwinglich!
        </p>
      </div>
      <div className="testimonial-section-bottom" style={{ alignItems: 'flex-start' }}>
        <div style={{ width: '100%' }}>
          <p>
            Ich berechne eine Pauschale pro Pizza in Höhe von 15€.
            <br />
            Darin enthalten sind:
          </p>
          <ul>
            <li>eine beliebige Pizza aus der Pizzakarte</li>
            <li>Servicepauschale</li>
            <li>Fahrtkosten</li>
            <li>Reinigungskosten</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Preise