import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../assets/img/home.png";
import Azadì from "../assets/img/azadì.png";
import Freelancer from "../assets/img/freelancer.png";
import Viaggi from "../assets/img/viaggi.png";
import Contatti from "../assets/img/contatti.png";
import Login from "../assets/img/login.png";
import Lingua from "../assets/img/lingua.png";

import itFlag from "../assets/img/it.png";
import ukFlag from "../assets/img/uk.png";
import esFlag from "../assets/img/es.png";
import frFlag from "../assets/img/fr.png";
import deFlag from "../assets/img/de.png";
import ptFlag from "../assets/img/pt.png";

const languages = [
  { code: "it", name: "Italiano", flag: itFlag },
  { code: "en", name: "English", flag: ukFlag },
  { code: "es", name: "Español", flag: esFlag },
  { code: "fr", name: "Français", flag: frFlag },
  { code: "de", name: "Deutsch", flag: deFlag },
  { code: "pt", name: "Português", flag: ptFlag },
];

function Navbar({ setCurrentPage, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);
  const closeLanguageMenu = () => setLanguageMenuOpen(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    closeMenu();
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
    closeLanguageMenu();
  };

  return (
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
            <span
              className={`navbar-toggler-icon ${menuOpen ? "open" : ""}`}
            ></span>
          </button>
          <a
            className="btn btn-custom d-lg-none d-flex flex-column"
            onClick={() => handleNavClick("home")}
          >
            <span className="travel-adventure">TRAVEL.</span>
            <span className="travel-adventure">ADVENTURE.</span>FREEDOM
          </a>
          <div className="central-item" onClick={toggleLanguageMenu}>
            <img src={Lingua} className="nav-img-lang" alt="Language selector"></img>
            {languageMenuOpen && (
              <div className="dropdown-menu show">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <img
                      src={lang.flag}
                      className="flag-img"
                      alt={`${lang.name} flag`}
                    />{" "}
                    {lang.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <div className="navbar-nav mr-auto w-100">
              <a className="nav-item" onClick={() => handleNavClick("home")}>
                <img src={Home} className="nav-img" alt="Home"></img>
                <p className="nav-link">{t('navbar.home')}</p>
              </a>
              <a className="nav-item" onClick={() => handleNavClick("azadì")}>
                <img src={Azadì} className="nav-img" alt="Azadì"></img>
                <p className="nav-link">{t('navbar.azadì')}</p>
              </a>
              <a
                className="nav-item"
                onClick={() => handleNavClick("freelancer")}
              >
                <img src={Freelancer} className="nav-img" alt="Freelancer"></img>
                <p className="nav-link">{t('navbar.freelancer')}</p>
              </a>
              <a
                className="nav-item"
                onClick={() => handleNavClick("viaggi")}
              >
                <img src={Viaggi} className="nav-img" alt="Viaggi"></img>
                <p className="nav-link">{t('navbar.travel')}</p>
              </a>
              <a
                className="nav-item"
                onClick={() => handleNavClick("contatti")}
              >
                <img src={Contatti} className="nav-img" alt="Contatti"></img>
                <p className="nav-link">{t('navbar.contacts')}</p>
              </a>
              <div className="logo d-none d-lg-flex justify-content-center align-items-center w-100">
                <a
                  className="nav-link travel-adventure"
                  onClick={() => handleNavClick("home")}
                >
                  TRAVEL.ADVENTURE.<span className="freedom">FREEDOM</span>
                </a>
              </div>
              <a className="nav-item" onClick={() => handleNavClick("login")}>
                <img src={Login} className="nav-img" alt="Login"></img>
                <p className="nav-link">{t('navbar.login')}</p>
              </a>
              <div
                className="nav-item dropdown nav-lang"
                onClick={toggleLanguageMenu}
              >
                <img src={Lingua} className="nav-img" alt="Language"></img>
                <p className="nav-link">{t('navbar.languages')}</p>
                {languageMenuOpen && (
                  <div className="dropdown-menu show">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        className="dropdown-item"
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        <img
                          src={lang.flag}
                          className="flag-img"
                          alt={`${lang.name} flag`}
                        />{" "}
                        {lang.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;