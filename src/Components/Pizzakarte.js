import React from 'react'
import AboutBackground from "../assets/about-background.png"
import PizzaImage from "../assets/pizza.png"

const Pizzakarte = () => {
  return (
    <div id="pizzakarte" className="about-section-container">
      <div>
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={PizzaImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Pizzakarte</p>
        <br />
        <ol>
          <li className="primary-heading">Marinara</li>
          <h2 className="primary-text">Tomatensoße, Knoblauch, Oregano, frisches Basilikum</h2>
          <br />
          <li className="primary-heading">Margherita</li>
          <h2 className="primary-text">Tomatensoße, Mozzarella, Parmesan, frisches Basilikum</h2>
          <br />
          <li className="primary-heading">Salami</li>
          <h2 className="primary-text">Tomatensoße, Mozzarella, Rindersalami</h2>
          <br />
          <li className="primary-heading">Sucuk</li>
          <h2 className="primary-text">Tomatensoße, Mozzarella, Sucuk, Jalapenos</h2>
          <br />
          <li className="primary-heading">Tonno</li>
          <h2 className="primary-text">Tomatensoße, Mozzarella, Parmesan, Thunfisch, Zwiebel</h2>
          <br />
          <li className="primary-heading">Veggie</li>
          <h2 className="primary-text">Tomatensoße, Mozzarella, Parmesan, gebratene Gemüsevariation aus Paprika, Aubergine und Champions</h2>
          <br />
          <li className="primary-heading">Nutella</li>
          <h2 className="primary-text">Nutella, Haselnüsse, Sahne</h2>
        </ol>
      </div>
    </div>
  )
}

export default Pizzakarte