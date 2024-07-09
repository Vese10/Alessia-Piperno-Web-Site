import { useState } from "react";
import "../assets/css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../assets/img/home.png";
import Azadì from "../assets/img/azadì.png";
import Freelancer from "../assets/img/freelancer.png";
import Viaggi from "../assets/img/viaggi.png";
import Contatti from "../assets/img/contatti.png";
import Login from "../assets/img/login.png";
import Lingua from "../assets/img/lingua.png";

function Navbar({setCurrentPage}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    closeMenu();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <button
              className="navbar-toggler ml-auto"
              type="button"
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className={`navbar-toggler-icon ${menuOpen ? 'open' : ''}`}></span>
            </button>
            <a className="btn btn-custom d-lg-none d-flex flex-column" onClick={() => handleNavClick('home')}>
              <span className="travel-adventure">TRAVEL.</span><span className="travel-adventure">ADVENTURE.</span>FREEDOM
            </a>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
              <div className="navbar-nav mr-auto w-100">
                <a className="nav-item" onClick={() => handleNavClick('home')}>
                  <img src={Home} className="nav-img"></img>
                  <p className="nav-link">Home</p>
                </a>
                <a className="nav-item" onClick={() => handleNavClick('azadì')}>
                  <img src={Azadì} className="nav-img"></img>
                  <p className="nav-link">Azadì!</p>
                </a>
                <a className="nav-item" onClick={() => handleNavClick('freelancer')}>
                  <img src={Freelancer} className="nav-img"></img>
                  <p className="nav-link">Freelancer</p>
                </a>
                <a className="nav-item" onClick={() => handleNavClick('viaggi')}>
                  <img src={Viaggi} className="nav-img"></img>
                  <p className="nav-link">Viaggi</p>
                </a>
                <a className="nav-item" onClick={() => handleNavClick('contatti')}>
                  <img src={Contatti} className="nav-img"></img>
                  <p className="nav-link">Contatti</p>
                </a>
                <div className="logo d-none d-lg-flex justify-content-center align-items-center w-100">
                  <a className="nav-link travel-adventure" onClick={() => handleNavClick('home')}>
                    TRAVEL.ADVENTURE.<span className="freedom">FREEDOM</span>
                  </a>
                </div>
                <a className="nav-item" onClick={() => handleNavClick('login')}>
                  <img src={Login} className="nav-img"></img>
                  <p className="nav-link">Login</p>
                </a>
                <a className="nav-item" href="<?=$path?>#lingua" onClick={closeMenu}>
                  <img src={Lingua} className="nav-img"></img>
                  <p className="nav-link">Lingua</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
