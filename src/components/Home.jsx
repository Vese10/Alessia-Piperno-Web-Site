import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeImage from "../assets/img/home-image.png"

function Home() {
  return (
    <>
      <section className="container-fluid d-flex home">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img
              src={HomeImage}
              alt="Home"
              className="img-fluid rounded-circle home-image"
            />
          </div>
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center bg-white p-4 home-text">
            <p className="home-title">Alessia Piperno</p>
            <p className="home-description">Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale Presentazione Personale</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
