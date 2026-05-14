require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.SERVER_PORT || 3000;
const EMAIL_TO = process.env.EMAIL_TO || 'Amar.Javid@web.de';
const EMAIL_FROM = process.env.EMAIL_FROM || process.env.SMTP_USER || 'no-reply@amars-pizza.de';

// Check if SMTP is configured
const isSmtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: isSmtpConfigured ? {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  } : undefined
});

function yesNo(value) {
  return value === true || value === 'true' ? 'Ja' : 'Nein';
}

function buildEmailBody(data) {
  return `Neue Pizza-Anfrage von Amar's Pizza Website:

Name: ${data.name || '-'}
Email: ${data.email || '-'}
Telefon: ${data.phone || '-'}
Veranstaltungsdatum: ${data.eventDate || '-'}
Uhrzeit: ${data.time || '-'}
Ort/Stadt: ${data.location || '-'}
Zahlungsart: ${data.paymentMethod || '-'}

Gesamtanzahl Pizzas: ${data.pizzaQuantity || '-'}

Pizzasorten:
- Marinara: ${data.marinara || '0'}
- Margherita: ${data.margherita || '0'}
- Salami: ${data.salami || '0'}
- Sucuk: ${data.sucuk || '0'}
- Tonno: ${data.tonno || '0'}
- Veggie: ${data.veggie || '0'}

Ausgabe: ${data.servings || '-'}

Steckdose (230V) vorhanden: ${yesNo(data.powerAvailable)}
Tisch-/Küchenzeile vorhanden: ${yesNo(data.tableAvailable)}
Kühlschrank vorhanden: ${yesNo(data.fridgeAvailable)}
Parkmöglichkeiten vorhanden: ${yesNo(data.parkingAvailable)}
Event draußen: ${yesNo(data.outdoor)}
Zelt bei Regen: ${data.tentIfRain || 'Nicht angegeben'}
Waschbecken vorhanden: ${yesNo(data.sinkAvailable)}
Teller gestellt: ${yesNo(data.platesProvided)}
Content für Instagram erlaubt: ${yesNo(data.contentConsent)}

Zusätzliche Informationen:
${data.additionalInfo || '-'}

Angebot gewünscht: ${yesNo(data.offerWanted)}
`;
}

app.post('/api/send-email', async (req, res) => {
  const data = req.body;

  if (!data || !data.name || !data.email || !data.phone) {
    return res.status(400).json({ error: 'Name, Email und Telefon sind erforderlich.' });
  }

  if (!isSmtpConfigured) {
    console.log('SMTP nicht konfiguriert - Testmodus aktiviert');
    console.log('E-Mail-Inhalt:', buildEmailBody(data));
    return res.json({
      ok: true,
      message: 'Testmodus: E-Mail wurde nicht gesendet, aber die Daten wurden verarbeitet. Konfiguriere SMTP in .env für echten Versand.',
      testMode: true
    });
  }

  const mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: 'Neue Pizza-Catering Anfrage',
    text: buildEmailBody(data)
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ ok: true, message: 'Email erfolgreich gesendet.' });
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    return res.status(500).json({ error: 'Fehler beim Senden der Email.', detail: error.message });
  }
});

app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: 'Interner Serverfehler. Bitte versuche es später erneut.' });
});

app.listen(PORT, () => {
  console.log(`E-Mail-Service läuft auf http://localhost:${PORT}`);
  if (!isSmtpConfigured) {
    console.log('⚠️  SMTP nicht konfiguriert - läuft im Testmodus');
    console.log('Erstelle eine .env-Datei mit SMTP-Konfiguration für echten E-Mail-Versand');
  } else {
    console.log('✅ SMTP konfiguriert - E-Mail-Versand aktiv');
  }
});
