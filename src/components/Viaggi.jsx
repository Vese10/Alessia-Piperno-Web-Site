import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TripCard from "../include/trip-card";

function Viaggi({ setLanguage }) {
  const { t, i18n } = useTranslation();
  
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
