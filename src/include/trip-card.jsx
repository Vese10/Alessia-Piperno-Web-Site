// TripCard.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TripCard({ trip }) {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{trip.title}</h5>
        <p className="card-text">{trip.description}</p>
        <p className="card-text">Data: {trip.date}</p>
        <p className="card-text">Prezzo: {trip.price}€</p>
        <p className="card-text">Partecipanti: {trip.maxParticipants}</p>
      </div>
    </div>
  );
}

export default TripCard;