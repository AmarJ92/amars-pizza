// Cookie Manager - GDPR-konform
class CookieManager {
  constructor() {
    this.CONSENT_COOKIE_NAME = 'amar-pizza-consent';
    this.CONSENT_VERSION = '1.0';
  }

  /**
   * Setzt einen Cookie
   */
  setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
  }

  /**
   * Liest einen Cookie
   */
  getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null;
  }

  /**
   * Löscht einen Cookie
   */
  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

  /**
   * Speichert Cookie-Zustimmungen
   */
  saveConsent(consents) {
    const consentData = {
      version: this.CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      essential: true, // Immer true
      analytics: consents.analytics || false,
      marketing: consents.marketing || false,
      preferences: consents.preferences || false,
    };
    this.setCookie(
      this.CONSENT_COOKIE_NAME,
      JSON.stringify(consentData),
      365
    );
  }

  /**
   * Liest gespeicherte Zustimmungen
   */
  getConsent() {
    const consent = this.getCookie(this.CONSENT_COOKIE_NAME);
    if (!consent) return null;
    
    try {
      return JSON.parse(consent);
    } catch (e) {
      return null;
    }
  }

  /**
   * Prüft, ob Benutzer bereits Zustimmung gegeben hat
   */
  hasConsented() {
    return this.getConsent() !== null;
  }

  /**
   * Initialisiert Google Analytics, wenn erlaubt
   */
  initAnalytics(googleAnalyticsId) {
    const consent = this.getConsent();
    
    if (consent && consent.analytics) {
      // Google Analytics Script
      window.dataLayer = window.dataLayer || [];
      
      function gtag() {
        dataLayer.push(arguments);
      }
      
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);

      // Lade Google Analytics Script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);
      
      window.gtag = gtag;
    }
  }

  /**
   * Speichert Benutzervorlieben
   */
  setPreference(key, value) {
    const consent = this.getConsent();
    if (consent && consent.preferences) {
      this.setCookie(`pref-${key}`, JSON.stringify(value), 365);
    }
  }

  /**
   * Liest Benutzervorlieben
   */
  getPreference(key) {
    const pref = this.getCookie(`pref-${key}`);
    if (!pref) return null;
    
    try {
      return JSON.parse(pref);
    } catch (e) {
      return null;
    }
  }
}

export default new CookieManager();
