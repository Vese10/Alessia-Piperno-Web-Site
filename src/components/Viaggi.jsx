// Viaggi.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TripCard from "../include/trip-card";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Viaggi({ setLanguage }) {
  const { t, i18n } = useTranslation();
  const [trips, setTrips] = useState([]);

  const addTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  return (
    <>
      <section className="d-flex flex-column viaggi-page">
        <div className="d-flex justify-content-between m-4 trips">
          {trips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
        <AddTrip onAddTrip={addTrip} />
      </section>
    </>
  );
}

export default Viaggi;