import React from 'react'
import Logo from "../Assets/Amar's Pizza_Logo.png"
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                        <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/amars_pizza/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </div>
            </div>
            <div className="footer-section-two">
            <div className="footer-section-columns">
                    <span>Impressum :</span>
                </div>
                <div className="footer-section-columns">
                    <span>VERANTWORTLICH FÜR DEN INHALT DIESER WEBSEITE:</span>
                    <span>Amar's Pizza</span>
                    <span>Amar Javid</span>
                    <span>0157 34312306</span>
                    <span>amar.javid@web.de</span>
                    <span>Meersburgerstraße 15</span>
                    <span>60386 Frankfurt</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
