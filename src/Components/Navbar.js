import { Link } from 'react-scroll';
import Logo from "../Assets/Amar's Pizza_Logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
         <a href="">Willkommen</a>
         <Link
          href=""
          activeClass="active"
          to="pizzakarte"
          spy={true}
          smooth={true}
          duration={500}
        >Pizzakarte</Link>
        <Link
          href=""
          activeClass="active"
          to="buchung"
          spy={true}
          smooth={true}
          duration={500}
        >Buchung</Link>
        <Link
          href=""
          activeClass="active"
          to="preise"
          spy={true}
          smooth={true}
          duration={500}
        >Preise</Link>
        <Link
          href=""
          activeClass="active"
          to="sonstiges"
          spy={true}
          smooth={true}
          duration={500}
        >Sonstiges</Link>
      </div>
    </nav>
  );
};

export default Navbar
