import { useState } from "react";
import "../assets/css/azadì.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AzadìImage from "../assets/img/azadì-image.png";

function Azadì() {
  return (
    <>
      <section className="azadì">
        <div className="container-fluid d-flex align-items-center azadì-container">
          <div className="container-fluid mt-5">
            <div className="row azadì-row">
              <div className="col-lg-4 col-12">
                <img
                  src={AzadìImage}
                  alt="Home"
                  className="img-fluid rounded-circle azadì-image"
                />
              </div>
              <div className="col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center">
                <div className="azadì-title">AZADI'</div>
                <div className="azadì-text">
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
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <img
                  src={AzadìImage}
                  alt="Home"
                  className="img-fluid rounded-circle azadì-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Azadì;
