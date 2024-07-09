import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBackgroundDesktop from '../assets/img/login-background-desktop.png'

function Login() {
  return (
    <>
      <section className="login">
        <img
          src={LoginBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Machu Pichu"
        />
        <div className="container-fluid d-flex main-container-2">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
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
                <button type="button" className="btn btn-primary single-page-btn">
                  ACQUISTA
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