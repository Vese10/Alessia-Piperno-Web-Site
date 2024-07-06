import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FreelancerBackgroundDesktop from "../assets/img/freelancer-background-desktop.png"

function Freelancer() {
  return(
    <>
      <img
        src={FreelancerBackgroundDesktop}
        className="img-fluid home-background-image"
        alt="Paesaggio Montagna"
      />
      <div className="container-fluid d-flex home">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center bg-white p-4 home-text">
            <p className="home-title">FREELANCER</p>
            <p className="home-description">
            Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività Presentazione attività 
            </p>
          </div>
          <div className="col-lg-5"></div>
        </div>
      </div>
    </>
  )
}

export default Freelancer