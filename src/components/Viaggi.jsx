import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TripCard from "../include/trip-card";

function Viaggi() {
  return (
    <>
      <section className="d-flex flex-column viaggi-page">
        <div className="d-flex justify-content-between m-4 trips">
          <TripCard></TripCard>
          <TripCard></TripCard>
        </div>
        <div className="d-flex justify-content-between m-4 trips">
          <TripCard></TripCard>
          <TripCard></TripCard>
        </div>
        <div className="d-flex justify-content-between m-4 trips">
          <TripCard></TripCard>
          <TripCard></TripCard>
        </div>
      </section>
    </>
  );
}

export default Viaggi;
