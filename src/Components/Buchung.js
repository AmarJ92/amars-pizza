import React from 'react'
import Eins from "../assets/1.png"
import Zwei from "../assets/2.png"
import Drei from "../assets/3.png"

const Buchung = () => {

    const workInfoData = [
        {
            image: Eins,
            title: "Vorraussetzungen",
            text: <ul>
              <li>Steckdose (230V, 3KW) - Direktanschluss (ohne Kabeltrommel)</li>
              <li>Tisch/Küchenzeile mind. 2 m breit und 90-100 cm hoch</li>
              <li>Nice-to-have: Kühlschrank</li>
              <li>Nice-to-have: Parkmöglichkeit direkt am Pizzastand</li>
              <li>Bei Regen: Partyzelt</li>
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
            text: "Nachdem alle Einzelheiten geklärt sind, kann die Pizza-Party starten!",

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
