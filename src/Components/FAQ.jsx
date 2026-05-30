import React from 'react'

const FAQ = () => {
  return (
    <div id="faq" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">FAQ</p>
        <h1 className="primary-heading">Häufig gestellte Fragen</h1>
      </div>
      <div className="faq-list">
        <div className="faq-item">
          <h2 className="primary-heading">Kommst du mit einem Foodtruck?</h2>
          <p className="primary-text">Nein — mein Setup ist kompakter. Ich komme mit mobilem Pizzaofen, Equipment und jeder Menge Teig. Einen Parkplatz für einen 7,5-Tonner müsst ihr also nicht freihalten.</p>
        </div>
        <div className="faq-item">
          <h2 className="primary-heading">Wie schnell ist eine Pizza fertig?</h2>
          <p className="primary-text">Schneller als die meisten Gäste sich entscheiden können, welche Pizza sie möchten. 🔥</p>
        </div>
        <div className="faq-item">
          <h2 className="primary-heading">Kann ich meine Pizza mit Ananas bestellen?</h2>
          <p className="primary-text">Technisch gesehen ist vieles möglich. Ob ich nachts noch ruhig schlafen kann, ist eine andere Frage. 🍍</p>
        </div>
        <div className="faq-item">
          <h2 className="primary-heading">Was passiert mit übrig gebliebener Pizza?</h2>
          <p className="primary-text">Diese Frage wurde uns noch nie gestellt. Übrig gebliebene Pizza ist bislang nur ein theoretisches Konzept.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
