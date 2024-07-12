import { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContattiPageBackgroundDesktop from "../assets/img/contatti-page-background-desktop.png";

function Contatti() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_likb8ht",
        "template_0m6aymw",
        e.target,
        "tMJ6iLYRPLiPo_2pi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Messaggio inviato con successo!");
        },
        (error) => {
          console.log(error.text);
          alert("Errore nell'invio del messaggio. Riprovare.");
        }
      );
  };

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
                <form onSubmit={sendEmail}>
                  <div className="form-group p-2">
                    <label htmlFor="nome" className="label-text">
                      Nome*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="user_name"
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
                      name="user_surname"
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
                      name="user_email"
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
                      name="user_phone"
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
                      name="user_message"
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
