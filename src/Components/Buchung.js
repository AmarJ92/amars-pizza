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
              <li>Steckdose (230V)</li>
              <li>Tisch/Küchenzeile mind. 1m Breit und mind. 90cm hoch</li>
              <li>Optional: Kühlschrank</li>
              <li>Optional: Parkmöglichkeit direkt am Pizzastand</li>
            </ul>,
        },
        {
            image: Zwei,
            title: "Kontaktiere mich über...",
            text: <ul>
            <li>Email</li>
            <li>Instagram</li>
            <li>Handy</li>
            <li>Siehe unten für mehr...</li>
          </ul>,
        },
        {
            image: Drei,
            title: "Es kann losgehen!",
            text: "Nachdem alle Einzelheiten wie Pizzasorten, Datum oder auch Location abgestimmt sind, kann die Party starten!",
        },
    ]

  return (
    <div id="buchung" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Buchung</p>
        <h1 className="primary-heading">Kontaktiere mich..</h1>
        <p className="primary-text">
            Lass uns gemeinsam durch die Schritte gehen
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
