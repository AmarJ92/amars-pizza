import './App.css';
import Willkommen from './Components/Willkommen';
import Pizzakarte from './Components/Pizzakarte';
import Buchung from './Components/Buchung';
import Preise from './Components/Preise';
import Sonstiges from './Components/Sonstiges';
import Footer from './Components/Footer';
import { Element } from 'react-scroll';

function App() {

  return (
    <div className="App">
      <Willkommen />
      <Element name="pizzakarte">
        <Pizzakarte />
      </Element>
      <Element name="buchung">
      <Buchung />
      </Element>
      <Element name="preise">
        <Preise />
      </Element>
      <Element name="sonstiges">
        <Sonstiges />
      </Element>
      <Footer />
    </div>
  );
}

export default App;