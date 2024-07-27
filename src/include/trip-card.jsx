import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TripCard({ setLanguage }) {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <section className="trip-card">
        <div className="single-card">
          <div className="d-flex flex-column m-4 p-1 trip-destination">
            <p className="continent m-2 text-white">Asia</p>
            <p className="country m-2 text-white">Indonesia</p>
          </div>
          <div className="d-flex justify-content-between m-4 p-1 trip-info">
            <p className="trip-description m-2 text-white">Descrizione breve</p>
            <p className="trip-price m-2 text-white">Prezzo $</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TripCard;
