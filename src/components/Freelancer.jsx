import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FreelancerBackgroundDesktop from "../assets/img/freelancer-background-desktop.png";

function Freelancer() {
  return (
    <>
      <section className="freelancer">
        <img
          src={FreelancerBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex main-container-1">
          <div className="container mt-5">
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
                <button type="button" className="btn btn-primary single-page-btn">
                  APPROFONDISCI
                </button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Freelancer;
