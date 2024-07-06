import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ViaggiBackgroundDesktop from "../assets/img/viaggi-background-desktop.png";
import ViaggiImage from "../assets/img/viaggi-image.png";

function Viaggi() {
  return (
    <>
      <img
        src={ViaggiBackgroundDesktop}
        className="img-fluid background-image-desktop"
        alt="Paesaggio Montagna"
      />
      <div className="container-fluid d-flex main-container-2">
        <div className="container mt-5">
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
              <button type="button" className="btn btn-primary single-page-btn">
                SCOPRI
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viaggi;
