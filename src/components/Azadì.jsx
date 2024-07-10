import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookImage from "../assets/img/book-cover.jpg";
import MondadoriLogo from "../assets/img/mondadori-logo.png";
import CoopLogo from "../assets/img/coop-logo.png";
import AmazonLogo from "../assets/img/amazon-logo.png";
import IBSLogo from "../assets/img/ibs-logo.png";
import FeltrinelliLogo from "../assets/img/feltrinelli-logo.png";

function Azadì() {
  return (
    <>
      <section className="azadì">
        <div className="container-fluid d-flex align-intems-center justify-content-center">
          <div className="row azadì-row">
            <div className="col-lg-4 d-flex align-items-center justify-content-center left-azadì">
              <img src={BookImage} alt="Home" className="azadì-image"></img>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center p-5 center-azadì">
              <p className="container-title azadì-title">AZADI'</p>
              <p className="container-description azadì-description">
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro Descrizione approfondita libro
                Descrizione approfondita libro{" "}
              </p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center right-azadì">
              <p className="container-title text-white">
                Acquista il libro qui:
              </p>
              <img
                src={MondadoriLogo}
                alt="Mondadori Logo"
                className="img-fluid store-image"
              ></img>
              <div className="d-flex p-4 align-items-center justify-content-center">
                <img
                  src={CoopLogo}
                  alt="Coop Logo"
                  className="col-lg-6 p-4 img-fluid store-image"
                ></img>
                <img
                  src={AmazonLogo}
                  alt="Amazon Logo"
                  className="col-lg-6 p-4 img-fluid store-image"
                ></img>
              </div>
              <div className="d-flex p-4 align-items-center justify-content-center">
                <img
                  src={IBSLogo}
                  alt="IBS Logo"
                  className="col-lg-6 p-4 img-fluid store-image"
                ></img>
                <img
                  src={FeltrinelliLogo}
                  alt="Feltrinelli Logo"
                  className="col-lg-6 p-4 img-fluid store-image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Azadì;
