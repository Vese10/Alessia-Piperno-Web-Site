// TripCard.jsx
import React from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TripCard({ trip }) {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{trip.continente}</h5>
        <p className="card-text">{trip.description}</p>
        <p className="card-text">Data: {new Date(trip.date).toLocaleDateString()}</p>
        <p className="card-text">Prezzo: {trip.price}€</p>
        <p className="card-text">Partecipanti: {trip.maxParticipants}</p>
        {isLoggedIn && (
          <button>Iscriviti</button>
        )}  
      </div>
    </div>
  );
}

export default TripCard;