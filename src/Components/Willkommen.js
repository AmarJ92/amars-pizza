import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import MyPicture from "../Assets/me2.png"

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
            Buch dein Pizza Catering für deine Feier! Ob...
          </h1>
          <div className="primary-text">
            <ul>
              <p>Festival</p>
              <p>Geburtstag</p>
              <p>Firmenfeier</p>
              <p>Partys</p>
              <p>...überall, wo eine köstliche Pizza gebraucht wird</p>
            </ul>
            <p className='primary-text'>
              Hey! Ich bin Amar und heiße dich auf meiner Seite herzlich Willkommen!
              <br />
              Eines Tages hatte ich Lust auf eine richtig gute italienische Pizza, jedoch wollte ich sie selbst zubereiten.
              Dass ich irgendwann mal nicht nur für mich, sondern auch für andere Pizza backe, davon habe ich nur geträumt.
              Das Unvorhersehbare hat eben seinen eigenen Zeitplan und Träume sollten verwirklicht werden.
              <br />
              <br />
              Heute backe ich mit großer Leidenschaft neapoletanische Pizza und möchte diese Kunst mit euch teilen.
              <br />
              <br />
              Ich freue mich auf eure Anfragen!
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={MyPicture} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Willkommen
