import React from 'react'
import PizzaImage from "../Assets/pizza.09da7eba21aa924e6b25.png"

const Pizzakarte = () => {
  return (
    <div id="pizzakarte" className="about-section-container">
      <div className="about-section-image-container">
        <img src={PizzaImage} alt="Pizza" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Pizzakarte</p>
        <br />
        <ol>
          <li>
            <h2 className="primary-heading">Marinara</h2>
            <p className="primary-text">Tomatensoße, Knoblauch, Oregano, frisches Basilikum</p>
          </li>
          <li>
            <h2 className="primary-heading">Margherita</h2>
            <p className="primary-text">Tomatensoße, Mozzarella, Parmesan, frisches Basilikum</p>
          </li>
          <li>
            <h2 className="primary-heading">Salami</h2>
            <p className="primary-text">Tomatensoße, Mozzarella, Rindersalami</p>
          </li>
          <li>
            <h2 className="primary-heading">Sucuk</h2>
            <p className="primary-text">Tomatensoße, Mozzarella, Sucuk, Jalapenos</p>
          </li>
          <li>
            <h2 className="primary-heading">Tonno</h2>
            <p className="primary-text">Tomatensoße, Mozzarella, Parmesan, Thunfisch, Zwiebel</p>
          </li>
          <li>
            <h2 className="primary-heading">Veggie</h2>
            <p className="primary-text">Tomatensoße, Mozzarella, Parmesan, gebratene Gemüsevariation aus Paprika, Aubergine und Champignons</p>
          </li>
          <li>
            <h2 className="primary-heading">Nutella</h2>
            <p className="primary-text">Nutella, Haselnüsse, Sahne</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Pizzakarte