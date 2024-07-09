import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBackgroundDesktop from "../assets/img/login-background-desktop.png";

function Login({ setCurrentPage }) {

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="login">
        <img
          src={LoginBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Machu Pichu"
        />
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 bg-white p-4 rounded-top-4 pb-5">
                <p className="container-title mb-0">Accesso Clienti:</p>
                <p className="container-description">
                  Accedi al tuo account oppure creane uno nuovo.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 mb-4 d-flex flex-column bg-white p-4 login-old pb-5">
                <p className="container-title">Clienti Registrati</p>
                <p className="container-description">
                  Se ti sei già registrato, accedi con le tue credenziali.
                </p>
                <form className="d-flex flex-column">
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="email" className="form-label">
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
                    <label htmlFor="password" className="form-label">
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
                  <button
                    type="submit"
                    className="btn btn-primary single-page-btn"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="col-lg-6 col-12 mb-4 d-flex flex-column bg-white p-4 login-new">
                <p className="container-title">Nuovi Clienti</p>
                <p className="container-description">
                  Se non hai ancora un account, clicca sul pulsante sottostante
                  per registrarti.
                </p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={() => handleNavClick("signup")}
                >
                  Registrati
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
