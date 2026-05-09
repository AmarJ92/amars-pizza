import React from 'react';
import Navbar from './Components/Navbar';
import Willkommen from './Components/Willkommen';
import Pizzakarte from './Components/Pizzakarte';
import Preise from './Components/Preise';
import Buchung from './Components/Buchung';
import Sonstiges from './Components/Sonstiges';
import Footer from './Components/Footer';
import './App.css'; // Assuming there is a CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <Willkommen />
      <Pizzakarte />
      <Preise />
      <Buchung />
      <Sonstiges />
      <Footer />
    </div>
  );
}

export default App;