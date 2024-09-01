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
            Buche dein Pizza Catering für deine Feier! Egal, ob...
          </h1>
          <div className="primary-text">
            <ul>
              <p>Festival</p>
              <p>Geburtstage</p>
              <p>Firmenfeiern</p>
              <p>Partys</p>
              <p>Familienfeste</p>
              <p>... oder überall sonst, wo eine köstliche Pizza nicht fehlen darf!</p>
            </ul>
            <p className='primary-text'>
              Hey! Ich bin Amar und heiße dich auf meiner Seite herzlich willkommen!
              <br />
              Eines Tages hatte ich Lust auf eine richtig gute italienische Pizza, jedoch wollte ich sie selbst zubereiten.
              Dass ich irgendwann mal nicht nur für mich, sondern auch für andere Pizza backe, davon habe ich nur geträumt
              - aber Träume sollten verwirklicht werden.
              <br />
              <br />
              Heute backe ich mit großer Leidenschaft neapoletanische Pizza und möchte diese Kunst mit Euch teilen.
              <br />
              <br />
              Ich freue mich auf Eure Anfragen!
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
