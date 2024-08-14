// Viaggi.jsx
import React, { useState, useEffect } from "react";
import TripCard from "../include/trip-card";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Viaggi({ setLanguage }) {
  const [trips, setTrips] = useState([]);

  const handleDeleteTrip = (tripId) => {
    setTrips(trips.filter(trip => trip._id !== tripId));
  };

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
    <section className="container-fluid p-5 viaggi-page">
      <div className="row">
        {trips.map((trip, index) => (
          <div key={index} className="col-md-6 mb-4">
            <TripCard trip={trip} onDelete={handleDeleteTrip}/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Viaggi;