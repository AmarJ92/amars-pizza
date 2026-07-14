# Cookie & GDPR Implementation Guide

## 📋 Überblick

Ich habe eine komplette, GDPR-konforme Cookie-Verwaltung für deine Pizza-Website implementiert.

## 🎯 Was wurde implementiert?

### 1. **Cookie Consent Banner** (`CookieConsent.jsx`)
   - GDPR-konforme Cookie-Zustimmung
   - Deutsche Benutzeroberfläche
   - Zwei Modi: Einfach & Detailliert
   - Moderne, responsive Gestaltung

### 2. **Cookie Manager** (`cookieManager.js`)
   - Sichere Cookie-Verwaltung
   - Zustimmungsverwaltung
   - Google Analytics Integration
   - Benutzervorlieben speichern

### 3. **Styling** (`CookieConsent.css`)
   - Modernes Design mit Pizza-Farbe (#ff6b35)
   - Mobile-responsive
   - Smooth Animations

## 🚀 Integration in dein Projekt

### Schritt 1: In App.jsx ist bereits integriert ✅
Der `CookieConsent` Banner wird jetzt auf jeder Seite angezeigt.

### Schritt 2: Google Analytics (Optional)

Wenn du Analytics nutzen möchtest:

1. **Erstelle `.env` Datei im Wurzelverzeichnis:**
   ```
   REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

2. Ersetze `XXXXXXXXXX` mit deiner Google Analytics ID (ab "G-").

3. Der Banner wird Analytics automatisch nur laden, wenn der Benutzer zustimmt.

## 📝 Verwendung in deinen Komponenten

### Cookies setzen:
```javascript
import cookieManager from '../Utils/cookieManager';

// Cookie speichern
cookieManager.setCookie('mein-cookie', 'wert', 30); // 30 Tage

// Benutzervorlieben speichern (nur mit Zustimmung)
cookieManager.setPreference('sprache', 'de');
```

### Cookies lesen:
```javascript
// Cookie auslesen
const wert = cookieManager.getCookie('mein-cookie');

// Benutzervorlieben auslesen
const sprache = cookieManager.getPreference('sprache');

// Zustimmungsstatus prüfen
const consent = cookieManager.getConsent();
if (consent.analytics) {
  // Analytics ist aktiviert
}
```

## 🔐 Sicherheitsfeatures

- ✅ **SameSite=Strict**: Schutz vor CSRF-Angriffen
- ✅ **Versionskontrolle**: Cookies werden neu gesetzt, wenn sich die Policy ändert
- ✅ **Transparenz**: Benutzer sieht genau, was gespeichert wird
- ✅ **Ablauf**: Cookies verfallen nach 365 Tagen

## 📊 Google Analytics Setup (Optional)

Falls du Google Analytics nutzen möchtest:

1. Gehe zu [Google Analytics](https://analytics.google.com/)
2. Erstelle ein neues Property für deine Website
3. Kopiere die Measurement ID (Format: `G-XXXXXXXXXX`)
4. Speichere sie in `.env` als `REACT_APP_GOOGLE_ANALYTICS_ID`

Der Banner wird Analytics nur laden, wenn der Benutzer "Analyse & Statistik" akzeptiert.

## 🌐 Rechtliches

Diese Implementierung erfüllt folgende Anforderungen:

- ✅ GDPR (Datenschutz-Grundverordnung)
- ✅ ePrivacy-Richtlinie (Cookie Law)
- ✅ DSGVO (Deutsches Recht)
- ✅ Transparenzanforderungen

**WICHTIG**: Aktualisiere deine Datenschutzerklärung und Impressum, um die Cookies zu beschreiben!

## 🎨 Anpassung

### Farben ändern
In `CookieConsent.css` findest du alle Farbangaben. Änder einfach:
- `#ff6b35` → deine Primärfarbe
- `#e55a24` → deine Hover-Farbe

### Text ändern
In `CookieConsent.jsx` findest du alle Texte - einfach anpassen.

### Layout ändern
Das CSS ist vollständig modular und kann leicht angepasst werden.

## 📱 Responsiv

Das Banner funktioniert perfekt auf:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🐛 Troubleshooting

### Banner wird nicht angezeigt?
- Löscht die Cookies in eurem Browser: `F12 → Application → Cookies → Domain löschen`
- Oder öffnet die Website in einem privaten Fenster

### Analytics funktioniert nicht?
- Prüft die `.env` Datei und die Analytics ID
- Öffnet die Browser Console (`F12`) und schaut auf Fehler

### Cookie-Daten zurücksetzen?
```javascript
// Im Browser Console:
document.cookie = "amar-pizza-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

## ✨ Was du tun kannst

1. **Testen**: Öffne deine Website und prüf den Cookie Banner
2. **Anpassen**: Änder Farben, Texte und Layout nach Bedarf
3. **Analytics**: Optional - füge deine Google Analytics ID hinzu
4. **Rechtlich**: Aktualisiere Datenschutzerklärung & Impressum

---

**Fragen?** Gib mir Bescheid wenn du etwas anpassen möchtest! 🍕
