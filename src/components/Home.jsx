import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBackgroundDesktop from "../assets/img/home-backgraound-desktop.png";
import HomeImage from "../assets/img/home-image.png";
import AzadìBackgroundDesktop from "../assets/img/azadì-background-desktop.png";
import AzadìImage from "../assets/img/azadì-image.png";
import FreelancerBackgroundDesktop from "../assets/img/freelancer-background-desktop.png";
import ViaggiBackgroundDesktop from "../assets/img/viaggi-background-desktop.png";
import ViaggiImage from "../assets/img/viaggi-image.png";
import ContattiBackgroundDesktop from "../assets/img/contatti-background-desktop.png";

function Home({setCurrentPage}) {

  const handleNavClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <>

      <section className="home">
        <img
          src={HomeBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex main-container-1">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                <img
                  src={HomeImage}
                  alt="Home"
                  className="img-fluid rounded-circle inside-image"
                />
              </div>
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">Alessia Piperno</p>
                <p className="container-description">
                  Presentazione Personale Presentazione Personale Presentazione
                  Personale Presentazione Personale Presentazione Personale
                  Presentazione Personale Presentazione Personale Presentazione
                  Personale Presentazione Personale Presentazione Personale
                  Presentazione Personale Presentazione Personale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="azadì">
        <img
          src={AzadìBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex main-container-2">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                <img
                  src={AzadìImage}
                  alt="Home"
                  className="img-fluid rounded-circle inside-image"
                />
              </div>
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">Azadi!</p>
                <p className="container-description">
                  Descrizione breve libro Descrizione breve libro Descrizione
                  breve libro Descrizione breve libro Descrizione breve libro
                  Descrizione breve libro Descrizione breve libro Descrizione
                  breve libro Descrizione breve libro Descrizione breve libro
                  Descrizione breve libro Descrizione breve libro Descrizione
                  breve libro Descrizione breve libro
                </p>
                <button type="button" className="btn btn-primary single-page-btn" onClick={() => handleNavClick('azadì')}>
                  ACQUISTA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="freelancer">
        <img
          src={FreelancerBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex main-container-1">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">FREELANCER</p>
                <p className="container-description">
                  Presentazione attività Presentazione attività Presentazione
                  attività Presentazione attività Presentazione attività
                  Presentazione attività Presentazione attività Presentazione
                  attività Presentazione attività Presentazione attività
                  Presentazione attività Presentazione attività Presentazione
                  attività Presentazione attività Presentazione attività
                  Presentazione attività
                </p>
                <button type="button" className="btn btn-primary single-page-btn" onClick={() => handleNavClick('freelancer')}>
                  APPROFONDISCI
                </button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="viaggi">
        <img
          src={ViaggiBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex main-container-2">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                <img
                  src={ViaggiImage}
                  alt="Home"
                  className="img-fluid rounded-circle inside-image"
                />
              </div>
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">Viaggi Di Gruppo</p>
                <p className="container-description">
                  Introduzione ai viaggi di gruppo Introduzione ai viaggi di
                  gruppo Introduzione ai viaggi di gruppo Introduzione ai viaggi
                  di gruppo Introduzione ai viaggi di gruppo Introduzione ai
                  viaggi di gruppo Introduzione ai viaggi di gruppo Introduzione
                  ai viaggi di gruppo Introduzione ai viaggi di gruppo
                  Introduzione ai viaggi di gruppo Introduzione ai viaggi di
                  gruppo Introduzione ai viaggi di gruppo
                </p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn" onClick={() => handleNavClick('viaggi')}
                >
                  SCOPRI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contatti">
        <img
          src={ContattiBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex contacts-container">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 d-flex flex-column justify-content-center bg-white p-4 form-left">
                <h1 className="text-center text-md-left container-title">
                  Contattami
                </h1>
                <p className="text-center text-md-left container-description">
                  Per informazioni, proposte o per qualsiasi cosa ti venga in
                  mente, puoi contattarmi qui. Ti risponderò nel più breve tempo
                  possibile. Grazie!
                </p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4 bg-white p-4 form-right">
                <form>
                  <div className="form-group p-2">
                    <label htmlFor="nome" className="label-text">
                      Nome*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Inserisci il nome"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="cognome" className="label-text">
                      Cognome*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cognome"
                      placeholder="Inserisci il cognome"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="email" className="label-text">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Inserisci l'email"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="telefono" className="label-text">
                      Telefono*
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      placeholder="Inserisci il telefono"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="messagge" className="label-text">
                      Messaggio*
                    </label>
                    <textarea
                      type="message"
                      className="form-control"
                      id="messaggio"
                      placeholder="Scrivi il tuo messaggio"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 single-page-btn"
                    >
                      INVIA
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
