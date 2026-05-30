import React from 'react';
import Navbar from './Components/Navbar';
import Willkommen from './Components/Willkommen';
import Pizzakarte from './Components/Pizzakarte';
import Preise from './Components/Preise';
import Buchung from './Components/Buchung';
import Sonstiges from './Components/Sonstiges';
import FAQ from './Components/FAQ';
import Kontakt from './Components/Kontakt';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Willkommen />
      <Pizzakarte />
      <Preise />
      <Buchung />
      <Sonstiges />
      <FAQ />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
