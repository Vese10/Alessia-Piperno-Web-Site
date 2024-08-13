// TripCard.jsx
import React from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TripCard({ trip }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{trip.title}</h5>
        <p className="card-text">{trip.description}</p>
        <p className="card-text">Data: {new Date(trip.date).toLocaleDateString()}</p>
        <p className="card-text">Prezzo: {trip.price}€</p>
        <p className="card-text">Partecipanti: {trip.maxParticipants}</p>
        <button>Iscriviti</button>  
      </div>
    </div>
  );
}

export default TripCard;