import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AzadìBackgroundDesktop from "../assets/img/azadì-background-desktop.png"
import AzadìImage from "../assets/img/azadì-image.png"

function Azadì() {
  return(
    <>
      <img
        src={AzadìBackgroundDesktop}
        className="img-fluid home-background-image"
        alt="Paesaggio Montagna"
      />
      <div className="container-fluid d-flex azadì">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img
              src={AzadìImage}
              alt="Home"
              className="img-fluid rounded-circle home-image"
            />
          </div>
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center bg-white p-4 home-text">
            <p className="home-title">Azadi!</p>
            <p className="home-description">
            Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro Descrizione breve libro 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Azadì