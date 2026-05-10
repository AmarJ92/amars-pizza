import React, { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  time: '',
  location: '',
  pizzaQuantity: '',
  eventType: '',
  additionalInfo: '',
  offerWanted: false,
  marinara: '',
  margherita: '',
  salami: '',
  sucuk: '',
  tonno: '',
  veggie: '',
  servings: '6 Slices',
  powerAvailable: true,
  tableAvailable: true,
  fridgeAvailable: false,
  parkingAvailable: true,
  outdoor: false,
  tentIfRain: '',
  sinkAvailable: true,
  platesProvided: false,
  contentConsent: false,
  paymentMethod: 'Rechnung'
};

const Kontakt = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let nextValue = value;

    if (type === 'checkbox') {
      nextValue = checked;
    } else if (type === 'radio') {
      if (value === 'true') nextValue = true;
      else if (value === 'false') nextValue = false;
    }

    setFormData({
      ...formData,
      [name]: nextValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ type: 'error', message: 'Bitte fülle Name, Email und Telefon aus.' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Beim Versand der Anfrage ist ein Fehler aufgetreten.');
      }

      setStatus({ type: 'success', message: 'Deine Anfrage wurde gesendet. Ich melde mich bald bei dir.' });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="kontakt" className="contact-form-wrapper">
      <h1 className="primary-heading">Sende mir eine Anfrage!</h1>
      <p className="primary-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Fülle das Formular aus und ich werde mich so schnell wie möglich bei dir melden.
      </p>

      {status.message && (
        <div
          style={{
            backgroundColor: status.type === 'success' ? '#009246' : '#ce2b37',
            color: 'white',
            padding: '1rem',
            borderRadius: '5px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          {status.message}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">* Zahlungsart</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="Rechnung">Rechnung</option>
            <option value="Bar">Bar</option>
            <option value="PayPal">PayPal</option>
            <option value="Andere">Andere</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pizzaQuantity">* Gesamtanzahl der Pizzen</label>
          <input
            type="number"
            id="pizzaQuantity"
            name="pizzaQuantity"
            value={formData.pizzaQuantity}
            onChange={handleChange}
            required
            min="1"
            placeholder="z.B. 35"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Anzahl pro Pizza-Sorte</label>
          <input
            type="number"
            id="marinara"
            name="marinara"
            value={formData.marinara}
            onChange={handleChange}
            min="0"
            placeholder="Marinara"
            disabled={loading}
          />
          <input
            type="number"
            id="margherita"
            name="margherita"
            value={formData.margherita}
            onChange={handleChange}
            min="0"
            placeholder="Margherita"
            disabled={loading}
          />
          <input
            type="number"
            id="salami"
            name="salami"
            value={formData.salami}
            onChange={handleChange}
            min="0"
            placeholder="Salami"
            disabled={loading}
          />
          <input
            type="number"
            id="sucuk"
            name="sucuk"
            value={formData.sucuk}
            onChange={handleChange}
            min="0"
            placeholder="Sucuk"
            disabled={loading}
          />
          <input
            type="number"
            id="tonno"
            name="tonno"
            value={formData.tonno}
            onChange={handleChange}
            min="0"
            placeholder="Tonno"
            disabled={loading}
          />
          <input
            type="number"
            id="veggie"
            name="veggie"
            value={formData.veggie}
            onChange={handleChange}
            min="0"
            placeholder="Veggie"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="servings">Wie sollen die Pizzen ausgegeben werden?</label>
          <select
            id="servings"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="6 Slices">6 Slices</option>
            <option value="8 Slices">8 Slices</option>
            <option value="Ganz">Ganz</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ist eine Steckdose (230V) vorhanden?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="powerAvailable" value="true" checked={formData.powerAvailable === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="powerAvailable" value="false" checked={formData.powerAvailable === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Gibt es eine Tisch-/Küchenzeile (mind. 2 m breit, 90–100 cm hoch)?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="tableAvailable" value="true" checked={formData.tableAvailable === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="tableAvailable" value="false" checked={formData.tableAvailable === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Ist ein Kühlschrank vorhanden?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="fridgeAvailable" value="true" checked={formData.fridgeAvailable === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="fridgeAvailable" value="false" checked={formData.fridgeAvailable === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Gibt es Parkmöglichkeiten?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="parkingAvailable" value="true" checked={formData.parkingAvailable === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="parkingAvailable" value="false" checked={formData.parkingAvailable === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Findet das Event draußen statt?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="outdoor" value="true" checked={formData.outdoor === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="outdoor" value="false" checked={formData.outdoor === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        {formData.outdoor && (
          <div className="form-group">
            <label htmlFor="tentIfRain">Gibt es bei Regen ein Zelt?</label>
            <input
              type="text"
              id="tentIfRain"
              name="tentIfRain"
              value={formData.tentIfRain}
              onChange={handleChange}
              placeholder="z.B. Partyzelt vorhanden"
              disabled={loading}
            />
          </div>
        )}

        <div className="form-group">
          <label>Gibt es ein Waschbecken in der Nähe?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="sinkAvailable" value="true" checked={formData.sinkAvailable === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="sinkAvailable" value="false" checked={formData.sinkAvailable === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Werden Teller gestellt?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="platesProvided" value="true" checked={formData.platesProvided === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="platesProvided" value="false" checked={formData.platesProvided === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Ist Content für Instagram in Ordnung?</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="contentConsent" value="true" checked={formData.contentConsent === true} onChange={handleChange} disabled={loading} />
              Ja
            </label>
            <label>
              <input type="radio" name="contentConsent" value="false" checked={formData.contentConsent === false} onChange={handleChange} disabled={loading} />
              Nein
            </label>
          </div>
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="offerWanted"
              checked={formData.offerWanted}
              onChange={handleChange}
              disabled={loading}
            />
            Ich möchte ein formales Angebot erhalten
          </label>
        </div>

        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Sende Anfrage …' : 'Anfrage absenden'}
        </button>
      </form>
    </div>
  );
};

export default Kontakt;

