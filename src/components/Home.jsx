import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBackgroundDesktop from "../assets/img/home-backgraound-desktop.png";
import HomeImage from "../assets/img/home-image.png";

function Home() {
  return (
    <>
      <img
        src={HomeBackgroundDesktop}
        className="img-fluid background-image-desktop"
        alt="Paesaggio Montagna"
      />
      <div className="container-fluid d-flex main-container-1">
        <div className="container mt-5">
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
    </>
  );
}

export default Home;
