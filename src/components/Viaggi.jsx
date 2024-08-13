// Viaggi.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TripCard from "../include/trip-card";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Viaggi({ setLanguage }) {
  const { t, i18n } = useTranslation();
  const [trips, setTrips] = useState([]);

  // Funzione per caricare i viaggi dal backend
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("https://alessia-piperno-web-site.onrender.com/trips", {
          method: "GET",
        });
        const data = await response.json();
        setTrips(data); // Imposta i viaggi nel tuo stato
      } catch (error) {
        console.error("Errore nel caricamento dei viaggi:", error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <section className="d-flex flex-column viaggi-page">
      <div className="d-flex justify-content-between m-4 trips">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </section>
  );
}

export default Viaggi;