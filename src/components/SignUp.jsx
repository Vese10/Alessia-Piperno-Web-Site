import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpBackgroundDesktop from "../assets/img/signup-background-desktop.png";

function SignUp() {
  return (
    <>
      <section className="signup">
        <img
          src={SignUpBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Machu Pichu"
        />
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-top-4 pb-5  signup-container">
                <p className="container-title mb-0 text-white">
                  Registrati come nuovo cliente
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-4 d-flex flex-column bg-white p-4 pb-5 rounded-bottom-4  signup-container">
                <form className="d-flex justify-content-around signup-form">
                  <div className="signup-form-left">
                    <p className="container-title text-white">
                      Informazioni personali:
                    </p>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="nome" className="form-label m-2 text-white">
                        Nome*:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        placeholder="Inserisci nome"
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="cognome" className="form-label m-2 text-white">
                        Cognome*:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cognome"
                        placeholder="Inserisci cognome"
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="email" className="form-label m-2 text-white">
                        Email*:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Inserisci email"
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="password" className="form-label m-2 text-white">
                        Telefono:
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        placeholder="Inserisci telefono"
                      />
                    </div>
                  </div>

                  <div className="signup-form-right">
                    <p className="container-title text-white">Credenziali:</p>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="email" className="form-label m-2 text-white">
                        Password*:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Inserisci password"
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="password" className="form-label m-2 text-white">
                        Ripeti Password*:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="repeat-password"
                        placeholder="Ripeti password"
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="privacy"
                        required
                      />
                      <label
                        htmlFor="privacy"
                        className="form-check-label ms-2 text-white"
                      >
                        Accetto le condizioni della{" "}
                        <a href="#" target="_blank" className="privacy">
                          Privacy
                        </a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn signup-page-btn"
                    >
                      Crea Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
