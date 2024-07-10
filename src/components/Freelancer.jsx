import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FreelancerTopPc from "../assets/img/freelancer-top-pc.png";
import FreelancerTopMobile from "../assets/img/freelancer-top-mobile.png";

function Freelancer() {
  return (
    <>
      <section className="freelancer">
        <div className="container-fluid d-flex flex-column align-intems-center justify-content-center p-0">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex text-center align-items-end freelancer-top">
              <p className="container-title freelancer-title-top p-4 m-0">
                La mia attività da freelancer
              </p>
              <img
                src={FreelancerTopPc}
                className="img-fluid freelancer-image-pc"
                alt="Paesaggio montano"
              ></img>
              <img
                src={FreelancerTopMobile}
                className="img-fluid freelancer-image-mobile"
                alt="Paesaggio montano"
              ></img>
            </div>
            <div className="container-fluid d-flex flex-column justify-content-center p-4">
              <p className="container-title freelancer-title">Titolo 1</p>
              <p className="container-description freelancer-description">
                Approfondimento attività da freelancer Approfondimento attività
                da freelancer Approfondimento attività da freelancer
                Approfondimento attività da freelancer Approfondimento attività
                da freelancer Approfondimento attività da freelancer
                Approfondimento attività da freelancer Approfondimento attività
                da freelancer Approfondimento attività da freelancer
              </p>
            </div>
            <div className="container-fluid d-flex flex-column justify-content-center p-4">
              <p className="container-title freelancer-title">Titolo 2</p>
              <p className="container-description freelancer-description">
                Approfondimento attività da freelancer Approfondimento attività
                da freelancer Approfondimento attività da freelancer
                Approfondimento attività da freelancer Approfondimento attività
                da freelancer Approfondimento attività da freelancer
                Approfondimento attività da freelancer Approfondimento attività
                da freelancer Approfondimento attività da freelancer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Freelancer;
