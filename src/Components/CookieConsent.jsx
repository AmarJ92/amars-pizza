import React, { useState, useEffect } from 'react';
import cookieManager from '../Utils/cookieManager';
import '../Styles/CookieConsent.css';

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consents, setConsents] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Prüfe, ob Benutzer bereits Zustimmung gegeben hat
    if (!cookieManager.hasConsented()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    cookieManager.saveConsent(fullConsent);
    setShowBanner(false);
    setShowDetails(false);
    
    // Aktiviere Analytics
    cookieManager.initAnalytics(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    cookieManager.saveConsent(minimalConsent);
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleSavePreferences = () => {
    cookieManager.saveConsent(consents);
    setShowBanner(false);
    setShowDetails(false);
    
    // Aktiviere Analytics wenn ausgewählt
    if (consents.analytics) {
      cookieManager.initAnalytics(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
    }
  };

  const handleConsentChange = (type) => {
    if (type !== 'essential') {
      setConsents({
        ...consents,
        [type]: !consents[type],
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent-banner">
        {!showDetails ? (
          <>
            <div className="cookie-content">
              <h3>🍪 Cookies & Datenschutz</h3>
              <p>
                Wir nutzen Cookies, um dein Erlebnis auf unserer Website zu verbessern.
                Einige sind notwendig, andere helfen uns die Website zu optimieren.
              </p>
            </div>
            <div className="cookie-actions">
              <button 
                className="btn btn-primary"
                onClick={handleAcceptAll}
              >
                Alle akzeptieren
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleRejectAll}
              >
                Nur essenzielle
              </button>
              <button 
                className="btn btn-tertiary"
                onClick={() => setShowDetails(true)}
              >
                Einstellungen
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-details">
              <h3>🍪 Cookie-Einstellungen</h3>
              
              <div className="cookie-category">
                <div className="category-header">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={consents.essential}
                    disabled
                    title="Diese Cookies sind notwendig für die Website"
                  />
                  <label htmlFor="essential">
                    <strong>Essenzielle Cookies</strong>
                    <span className="required-badge">Erforderlich</span>
                  </label>
                </div>
                <p className="category-description">
                  Diese Cookies sind notwendig für die Funktionalität der Website
                  (z.B. Formulare, Buchungen, Sicherheit).
                </p>
              </div>

              <div className="cookie-category">
                <div className="category-header">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={consents.analytics}
                    onChange={() => handleConsentChange('analytics')}
                  />
                  <label htmlFor="analytics">
                    <strong>Analyse & Statistik</strong>
                  </label>
                </div>
                <p className="category-description">
                  Helfen uns zu verstehen, wie du unsere Website nutzt, damit wir diese verbessern können.
                </p>
              </div>

              <div className="cookie-category">
                <div className="category-header">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={consents.marketing}
                    onChange={() => handleConsentChange('marketing')}
                  />
                  <label htmlFor="marketing">
                    <strong>Marketing & Werbung</strong>
                  </label>
                </div>
                <p className="category-description">
                  Ermöglichen personalisierte Werbeanzeigen auf anderen Plattformen.
                </p>
              </div>

              <div className="cookie-category">
                <div className="category-header">
                  <input
                    type="checkbox"
                    id="preferences"
                    checked={consents.preferences}
                    onChange={() => handleConsentChange('preferences')}
                  />
                  <label htmlFor="preferences">
                    <strong>Benutzervorlieben</strong>
                  </label>
                </div>
                <p className="category-description">
                  Speichern deine Einstellungen (z.B. Spracheinstellung, Design-Präferenz).
                </p>
              </div>

              <p className="privacy-link">
                Weitere Informationen findest du in unserer <a href="#datenschutz">Datenschutzerklärung</a>.
              </p>
            </div>

            <div className="cookie-actions details-actions">
              <button 
                className="btn btn-secondary"
                onClick={handleRejectAll}
              >
                Alle ablehnen
              </button>
              <button 
                className="btn btn-tertiary"
                onClick={() => setShowDetails(false)}
              >
                Zurück
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleSavePreferences}
              >
                Speichern & Schließen
              </button>
            </div>
          </>
        )}
      </div>
      <div className="cookie-consent-overlay" onClick={handleRejectAll}></div>
    </div>
  );
}

export default CookieConsent;
