import React from 'react'
import Eins from "../Assets/1.png"
import Zwei from "../Assets/2.png"
import Drei from "../Assets/3.png"

const Buchung = () => {

    const workInfoData = [
        {
            image: Eins,
            title: "Vorraussetzungen",
            text: <ul>
              <li>Steckdose (230V, 3KW) - vorzugsweise Direktanschluss (ohne Kabeltrommel)</li>
              <li>Tisch/Küchenzeile mind. 2 m breit und mind. 90 cm hoch</li>
              <li>Optional: Kühlschrank</li>
              <li>Optional: Parkmöglichkeit direkt am Pizzastand</li>
              <li>Abhängig vom Wetter: Partyzelt</li>
            </ul>,
        },
        {
            image: Zwei,
            title: "Kontaktiere mich via...",
            text: <ul>
            <a href="https://www.instagram.com/amars_pizza/">Instagram</a>
            <br/>
            <a>Email</a>
            <br/>
            <a>Whatsapp</a>
          </ul>,
        },
        {
            image: Drei,
            title: "Es kann losgehen!",
            text: "Nachdem alle Einzelheiten geklärt sind, kann die Party starten!",

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
        {workInfoData.map((data) => (
            <div className="work-section-info">
                <div className="info-boxes-img-container">
                    <img src={data.image} alt="" />
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
