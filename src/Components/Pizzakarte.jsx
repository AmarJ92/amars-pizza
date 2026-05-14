import React from 'react'
import PizzaImage from "../Assets/me3.png"

const Pizzakarte = () => {
  return (
    <div id="pizzakarte" className="about-section-container">
      <div className="about-section-image-container">
        <img src={PizzaImage} alt="Pizza by Nico Leissner" />
        <p className="photo-credit">Photo made by: <a href="https://www.instagram.com/nico.leissner/" target="_blank" rel="noopener noreferrer">@nico.leissner</a></p>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Pizzakarte</p>
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