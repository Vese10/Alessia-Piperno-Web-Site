// Viaggi.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TripCard from "../include/trip-card";
import AddTrip from "../modules/AddTrip";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Viaggi({ setLanguage }) {
  const { t, i18n } = useTranslation();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("https://alessia-piperno-web-site.onrender.com/trips");
        const data = await response.json();
        if (Array.isArray(data)) {
          setTrips(data); // Imposta trips solo se data è un array
        } else {
          setTrips([]); // In caso di errore, imposta trips come array vuoto
        }
      } catch (error) {
        console.error("Errore nel caricamento dei viaggi:", error);
        setTrips([]); // Gestisci l'errore impostando trips come array vuoto
      }
    };
  
    fetchTrips();
  }, []);

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