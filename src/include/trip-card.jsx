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
        setTimeout(() => {
          setSuccessMessage("");
          setCurrentPage("login"); // Cambia la pagina corrente a Login dopo il successo
        }, 3000); // Mostra il messaggio per 3 secondi
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

  if (successMessage) {
    return (
      <section className="signup">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-4 signup-container">
                <p className="container-title mb-0 text-white">{successMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-title">{trip.continente}</p>
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
