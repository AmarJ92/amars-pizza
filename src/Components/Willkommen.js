import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import MyPicture from "../Assets/me3.png"

const Willkommen = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Buche dein Pizza-Catering – für jeden Anlass, der nach Genuss ruft!
          </h1>
          <div className="primary-text">
            <ul>
              <p>Geburtstage</p>
              <p>Hochzeiten</p>
              <p>Firmenfeiern</p>
              <p>Kita- und Schulfeste</p>
              <p>Sommerfeste</p>
              <p>Festivals & Märkte</p>
              <p>Private Gartenpartys</p>
              <p>... oder einfach, weil Pizza immer passt!</p>
            </ul>
            <p className='primary-text'>
              Hey! Ich bin Amar und freue mich riesig, dass du hier bist.
              <br />
              Alles begann mit dem Wunsch nach einer richtig guten italienischen Pizza – selbst gemacht, mit Herz und Leidenschaft.
              Was einst nur ein Traum war, wurde zur Realität: Heute teile ich meine Begeisterung für neapolitanische Pizza auf Events in ganz Frankfurt und Umgebung.
              <br />
              <br />
              Mit meinem mobilen Pizzaofen bringe ich echtes Streetfood-Feeling direkt zu euch – live gebacken, frisch belegt und ein echter Hingucker auf jeder Feier.
              <br />
              <br />
              Lass uns gemeinsam ein Event schaffen, das in Erinnerung bleibt – mit knusprigem Rand, geschmolzenem Käse und ganz viel Amore.
              <br />
              <br />
              Ich freue mich auf deine Anfrage!
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={MyPicture} alt="" />
          <figcaption>Photo made by <a href="https://www.instagram.com/nico.leissner/">nico.leisner</a></figcaption>
        </div>
      </div>
    </div>
  )
}

export default Willkommen
