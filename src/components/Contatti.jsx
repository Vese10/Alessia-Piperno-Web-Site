import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContattiPageBackgroundDesktop from "../assets/img/contatti-page-background-desktop.png";

function Contatti() {
  return (
    <>
      <section className="contatti">
        <img
          src={ContattiPageBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex contacts-container">
          <div className="container mt-5">
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

export default Contatti;
