// trip-card.jsx
import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TripCard({ trip }) {
  const isLoggedIn = !!localStorage.getItem("token");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleJoinTrip = async () => {
    try {
      const response = await fetch(
        `https://alessia-piperno-web-site.onrender.com/trips/${trip._id}/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setSuccessMessage("Iscrizione al viaggio avvenuta con successo!");
      } else {
        const errorResponse = await response.json();
        setErrorMessage(
          `Errore durante l'iscrizione: ${errorResponse.message}`
        );
      }
    } catch (error) {
      console.error("Errore durante l'iscrizione al viaggio:", error);
      setErrorMessage("Errore durante l'iscrizione al viaggio.");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{trip.continente}</h5>
        <p className="card-text">{trip.description}</p>
        <p className="card-text">
          Data: {new Date(trip.date).toLocaleDateString()}
        </p>
        <p className="card-text">Prezzo: {trip.price}€</p>
        <p className="card-text">Partecipanti: {trip.maxParticipants}</p>
        {isLoggedIn && <button onClick={handleJoinTrip}>Iscriviti</button>}
        {successMessage && (
          <p className="text-success mt-3">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="error-message text-danger mt-3">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default TripCard;
