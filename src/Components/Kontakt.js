import React, { useState } from 'react';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    time: '',
    location: '',
    pizzaQuantity: '',
    eventType: '',
    additionalInfo: '',
    offerWanted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email subject and body
    const emailBody = `
Neue Pizza-Anfrage von Amar's Pizza Website:

Name: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Veranstaltungsdatum: ${formData.eventDate}
Uhrzeit: ${formData.time}
Ort/Stadt: ${formData.location}
Anzahl Pizzas: ${formData.pizzaQuantity}
Art der Veranstaltung: ${formData.eventType}

Zusätzliche Informationen:
${formData.additionalInfo}

Angebot gewünscht: ${formData.offerWanted ? 'Ja' : 'Nein'}
    `;

    // Send email via email client
    window.location.href = `mailto:info@amars-pizza.de?subject=Neue%20Pizza-Catering%20Anfrage&body=${encodeURIComponent(emailBody)}`;

    // Reset form
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        time: '',
        location: '',
        pizzaQuantity: '',
        eventType: '',
        additionalInfo: '',
        offerWanted: false
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="kontakt" className="contact-form-wrapper">
      <h1 className="primary-heading">Sende mir eine Anfrage!</h1>
      <p className="primary-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Fülle das Formular aus und ich werde mich so schnell wie möglich bei dir melden.
      </p>

      {submitted && (
        <div style={{
          backgroundColor: '#009246',
          color: 'white',
          padding: '1rem',
          borderRadius: '5px',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          ✓ Danke für deine Anfrage! Ich werde mich bald bei dir melden.
        </div>
      )}

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">* Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Dein Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">* Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="deine@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">* Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+49 123 456789"
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventDate">* Veranstaltungsdatum</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">* Uhrzeit</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">* Ort/Stadt (Rhein-Main Gebiet)</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="z.B. Frankfurt, Mainz, Wiesbaden"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pizzaQuantity">* Anzahl der Pizzas (Min. 12, Max. 100)</label>
          <input
            type="number"
            id="pizzaQuantity"
            name="pizzaQuantity"
            value={formData.pizzaQuantity}
            onChange={handleChange}
            required
            min="12"
            max="100"
            placeholder="z.B. 20"
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventType">* Art der Veranstaltung</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">-- Bitte auswählen --</option>
            <option value="Geburtstag">Geburtstag</option>
            <option value="Hochzeit">Hochzeit</option>
            <option value="Firmenfeier">Firmenfeier</option>
            <option value="Kita-/Schulfest">Kita-/Schulfest</option>
            <option value="Sommerfest">Sommerfest</option>
            <option value="Festival / Markt">Festival / Markt</option>
            <option value="Gartenparty">Gartenparty</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Zusätzliche Informationen</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Besondere Wünsche, Allergien, Pizza-Vorlieben oder weitere Fragen..."
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="offerWanted"
              checked={formData.offerWanted}
              onChange={handleChange}
            />
            Ich möchte ein formales Angebot erhalten
          </label>
        </div>

        <button type="submit" className="form-button">
          Anfrage absenden
        </button>
      </form>
    </div>
  );
};

export default Kontakt;

