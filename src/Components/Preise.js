import React from 'react'
import ProfilePic from "../Assets/me.png"

const Preise = () => {
  return (
    <div id="preise" className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Preise</p>
            <h1 className="primary-heading">Fairness und Qualität harmonieren!</h1>
            <p className="primary-text">
                Meine Devise: Ein Pizza Catering muss nicht teuer sein – bei mir ist köstliches Pizzavergnügen für jedermann erschwinglich!
            </p>    
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Ich berechne eine Pauschale pro Pizza in Höhe von 10€. 
                <br></br>
                Darin enthalten sind:
                <br></br>
                <br></br>
                <ul>
                    <li>eine beliebige Pizza aus der Pizzakarte</li>
                    <li>Auf- und Abbaukosten</li>
                    <li>Fahrtkosten</li>
                    <li>Reinigungskosten</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default Preise
