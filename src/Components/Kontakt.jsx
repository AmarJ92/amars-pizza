import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  timeWindowStart: '',
  timeWindowEnd: '',
  location: '',
  postalCode: '',
  guestCount: '',
  pizzaQuantity: '',
  eventType: '',
  additionalInfo: '',
  allergies: '',
  offerWanted: false,
  marinara: '',
  margherita: '',
  salami: '',
  sucuk: '',
  tonno: '',
  veggie: '',
  nutella: '',
  servings: '6 Slices',
  powerAvailable: true,
  tableAvailable: true,
  fridgeAvailable: true,
  parkingAvailable: true,
  outdoor: true,
  tentIfRain: '',
  sinkAvailable: true,
  platesProvided: true,
  contentConsent: true,
  paymentMethod: 'Rechnung'
};

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailJsConfigured = Boolean(emailServiceId && emailTemplateId && emailPublicKey);

function yesNo(value) {
  return value === true || value === 'true' ? 'Ja' : 'Nein';
}

function buildEmailMessage(data) {
  return `Neue Catering-Anfrage\n\nName: ${data.name || '-'}\nEmail: ${data.email || '-'}\nTelefon: ${data.phone || '-'}\nDatum: ${data.eventDate || '-'}\nGewünschtes Zeitfenster: ${data.timeWindowStart || '-'} - ${data.timeWindowEnd || '-'}\nAnzahl Gäste: ${data.guestCount || '-'}\nOrt/Stadt: ${data.location || '-'}\nPostleitzahl: ${data.postalCode || '-'}\nZahlungsart: ${data.paymentMethod || '-'}\n\nGesamtanzahl Pizzen: ${data.pizzaQuantity || '-'}\n` +
    `Marinara: ${data.marinara || '0'}\n` +
    `Margherita: ${data.margherita || '0'}\n` +
    `Salami: ${data.salami || '0'}\n` +
    `Sucuk: ${data.sucuk || '0'}\n` +
    `Tonno: ${data.tonno || '0'}\n` +
    `Veggie: ${data.veggie || '0'}\n` +
    `Nutella: ${data.nutella || '0'}\n\n` +
    `Ausgabe: ${data.servings || '-'}\n` +
    `Allergien/Unverträglichkeiten: ${data.allergies || 'Keine angegeben'}\n` +
    `Steckdose (230V): ${yesNo(data.powerAvailable)}\n` +
    `Tisch/Küchenzeile: ${yesNo(data.tableAvailable)}\n` +
    `Kühlschrank: ${yesNo(data.fridgeAvailable)}\n` +
    `Parkmöglichkeiten: ${yesNo(data.parkingAvailable)}\n` +
    `Event draußen: ${yesNo(data.outdoor)}\n` +
    `Überdacht bei Regen: ${data.tentIfRain || 'Nicht angegeben'}\n` +
    `Waschbecken: ${yesNo(data.sinkAvailable)}\n` +
    `Teller gestellt: ${yesNo(data.platesProvided)}\n` +
    `Content für Instagram erlaubt: ${yesNo(data.contentConsent)}\n` +
    `Angebot gewünscht: ${yesNo(data.offerWanted)}\n\n` +
    `Zusätzliche Informationen:\n${data.additionalInfo || 'Keine zusätzlichen Informationen.'}`;
}

const Kontakt = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const statusRef = useRef(null);

  useEffect(() => {
    if (status.message && statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [status.message]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let nextValue = value;

    if (type === 'checkbox') {
      nextValue = checked;
    } else if (type === 'radio') {
      if (value === 'true') nextValue = true;
      else if (value === 'false') nextValue = false;
    }

    const updatedFormData = {
      ...formData,
      [name]: nextValue
    };

    // Berechne die Gesamtanzahl der Pizzen automatisch
    const pizzaFields = ['marinara', 'margherita', 'salami', 'sucuk', 'tonno', 'veggie', 'nutella'];
    if (pizzaFields.includes(name)) {
      const totalPizzas = pizzaFields.reduce((sum, field) => {
        const val = parseInt(updatedFormData[field] || 0, 10);
        return sum + (isNaN(val) ? 0 : val);
      }, 0);
      updatedFormData.pizzaQuantity = totalPizzas.toString();
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ type: 'error', message: 'Bitte fülle Name, Email und Telefon aus.' });
      return;
    }

    const totalPizzas = parseInt(formData.pizzaQuantity || 0, 10);
    if (totalPizzas < 12) {
      setStatus({ type: 'error', message: 'Mindestbestellmenge beträgt 12 Pizzen.' });
      return;
    }
    if (totalPizzas > 100) {
      setStatus({ type: 'error', message: 'Maximalbestellmenge beträgt 100 Pizzen.' });
      return;
    }

    if (!emailJsConfigured) {
      setStatus({
        type: 'error',
        message: 'EmailJS ist nicht konfiguriert. Bitte prüfe die VITE_EMAILJS_* Werte in deiner .env-Datei.'
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      event_date: formData.eventDate,
      time_window_start: formData.timeWindowStart,
      time_window_end: formData.timeWindowEnd,
      guest_count: formData.guestCount,
      location: formData.location,
      postal_code: formData.postalCode,
      payment_method: formData.paymentMethod,
      pizza_quantity: formData.pizzaQuantity,
      marinara: formData.marinara || '0',
      margherita: formData.margherita || '0',
      salami: formData.salami || '0',
      sucuk: formData.sucuk || '0',
      tonno: formData.tonno || '0',
      veggie: formData.veggie || '0',
      nutella: formData.nutella || '0',
      servings: formData.servings,
      allergies: formData.allergies || 'Keine angegeben',
      power_available: yesNo(formData.powerAvailable),
      table_available: yesNo(formData.tableAvailable),
      fridge_available: yesNo(formData.fridgeAvailable),
      parking_available: yesNo(formData.parkingAvailable),
      outdoor: yesNo(formData.outdoor),
      tent_if_rain: formData.tentIfRain || 'Nicht angegeben',
      sink_available: yesNo(formData.sinkAvailable),
      plates_provided: yesNo(formData.platesProvided),
      content_consent: yesNo(formData.contentConsent),
      offer_wanted: yesNo(formData.offerWanted),
      additional_info: formData.additionalInfo || 'Keine zusätzlichen Informationen.',
      message: buildEmailMessage(formData)
    };

    try {
      await emailjs.send(emailServiceId, emailTemplateId, templateParams, emailPublicKey);
      setStatus({ type: 'success', message: 'Deine Anfrage wurde gesendet. Ich melde mich bald bei dir.' });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({ type: 'error', message: error.text || error.message || 'Beim Versand der Anfrage ist ein Fehler aufgetreten.' });
    } finally {
      setLoading(false);
    }
  };

  const pizzaTotal = parseInt(formData.pizzaQuantity || '0', 10);
  const pizzaQuantityError = pizzaTotal > 0 && pizzaTotal < 12
    ? 'Mindestbestellmenge beträgt 12 Pizzen.'
    : pizzaTotal > 100
      ? 'Maximalbestellmenge beträgt 100 Pizzen.'
      : '';

  return (
    <div id="kontakt" className="contact-form-wrapper">
      <h1 className="primary-heading">Anfrage-Formular</h1>
      <p className="primary-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Fülle das Formular aus und ich werde mich so schnell wie möglich bei dir melden.
      </p>

      {status.message && (
        <div          ref={statusRef}          style={{
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
        <div className="form-row">
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
        </div>

        <div className="form-row">
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
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="timeWindowStart">* Gewünschtes Zeitfenster - Von</label>
            <input
              type="time"
              id="timeWindowStart"
              name="timeWindowStart"
              value={formData.timeWindowStart}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeWindowEnd">* Gewünschtes Zeitfenster - Bis</label>
            <input
              type="time"
              id="timeWindowEnd"
              name="timeWindowEnd"
              value={formData.timeWindowEnd}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-row">
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
            <label htmlFor="postalCode">* Postleitzahl</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="z.B. 60311"
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guestCount">* Anzahl der Gäste</label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              required
              min="1"
              placeholder="z.B. 25"
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
        </div>

        <div className="form-group">
          <label htmlFor="pizzaQuantity">Gesamtanzahl der Pizzen (wird automatisch berechnet)</label>
          <input
            type="number"
            id="pizzaQuantity"
            name="pizzaQuantity"
            value={formData.pizzaQuantity}
            onChange={handleChange}
            required
            min="1"
            placeholder="wird automatisch berechnet"
            disabled={loading}
            readOnly
          />
          {pizzaQuantityError && (
            <p style={{ color: '#ce2b37', marginTop: '0.5rem' }}>
              {pizzaQuantityError}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Anzahl pro Pizza-Sorte</label>
          <div className="pizza-count-grid">
            <label htmlFor="marinara">
              Marinara
              <input
                type="number"
                id="marinara"
                name="marinara"
                value={formData.marinara}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
            <label htmlFor="margherita">
              Margherita
              <input
                type="number"
                id="margherita"
                name="margherita"
                value={formData.margherita}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
            <label htmlFor="salami">
              Salami
              <input
                type="number"
                id="salami"
                name="salami"
                value={formData.salami}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
            <label htmlFor="sucuk">
              Sucuk
              <input
                type="number"
                id="sucuk"
                name="sucuk"
                value={formData.sucuk}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
            <label htmlFor="tonno">
              Tonno
              <input
                type="number"
                id="tonno"
                name="tonno"
                value={formData.tonno}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
            <label htmlFor="veggie">
              Veggie
              <input
                type="number"
                id="veggie"
                name="veggie"
                value={formData.veggie}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
            <label htmlFor="nutella">
              Nutella
              <input
                type="number"
                id="nutella"
                name="nutella"
                value={formData.nutella}
                onChange={handleChange}
                min="0"
                placeholder="0"
                disabled={loading}
              />
            </label>
          </div>
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
            <option value="4 Slices">4 Slices</option>
            <option value="6 Slices">6 Slices</option>
            <option value="Ganz">Ganz</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="allergies">Allergien / Unverträglichkeiten</label>
          <textarea
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="z.B. Glutenunverträglichkeit, Nussallergie, etc."
            rows="3"
            disabled={loading}
          />
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
            <label htmlFor="tentIfRain">Überdacht bei Regen?</label>
            <input
              type="text"
              id="tentIfRain"
              name="tentIfRain"
              value={formData.tentIfRain}
              onChange={handleChange}
              placeholder="z.B. Zelt, Garage, Carport, überdachte Terrasse"
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

        <div className="form-group">
          <label htmlFor="additionalInfo">Sonstige Informationen</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Was soll ich sonst noch wissen?"
            rows="5"
            disabled={loading}
          />
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

