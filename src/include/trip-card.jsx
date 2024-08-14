// trip-card.jsx
import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TripCard({ trip, setCurrentPage }) {
  const isLoggedIn = !!sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");
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
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setSuccessMessage("Iscrizione al viaggio avvenuta con successo!");
        setTimeout(() => {
          setSuccessMessage("");
          setCurrentPage("useraccount"); // Cambia la pagina corrente a UserAccount dopo il successo
        }, 3000); // Mostra il messaggio per 3 secondi
      } else {
        const errorResponse = await response.json();
        setErrorMessage(
          `Errore durante l'iscrizione: ${errorResponse.message}`
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 3000); // Mostra il messaggio per 3 secondi
      }
    } catch (error) {
      console.error("Errore durante l'iscrizione al viaggio:", error);
      setErrorMessage("Errore durante l'iscrizione al viaggio.");
    }
  };

  const handleDeleteTrip = async () => {
    try {
      const response = await fetch(
        `https://alessia-piperno-web-site.onrender.com/trips/${trip._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setSuccessMessage("Viaggio eliminato con successo!");
        onDelete(trip._id); // Chiama la funzione onDelete per aggiornare la lista dei viaggi
      } else {
        const errorResponse = await response.json();
        setErrorMessage(
          `Errore durante l'eliminazione del viaggio: ${errorResponse.message}`
        );
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione del viaggio:", error);
      setErrorMessage("Errore durante l'eliminazione del viaggio.");
    }
  };

  if (successMessage) {
    return (
      <section className="signup">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-4 signup-container">
                <p className="container-title mb-0 text-white">
                  {successMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-body d-flex justify-content-between">
          <div className="left-content">
            <p className="card-title m-1">{trip.nation}</p>
            <p className="card-text m-1">{trip.description}</p>
            <p className="card-text m-1">
            {t('trips.date')}: {new Date(trip.date).toLocaleDateString()}
            </p>
          </div>
          <div className="right-content text-end">
            <p className="card-text m-1">{t('trips.price')}: {trip.price}€</p>
            <p className="card-text m-1">
            {t('trips.participants')}: {trip.maxParticipants}
            </p>
          </div>
        </div>
      </div>
      <div className="card-img">
        <p>Ciaooo</p>
      </div>
      {isLoggedIn && (
        <div className="card-footer">
          {role === "admin" ? (
            <button onClick={handleDeleteTrip} className="btn btn-danger">
            {t('trips.btn-delete')}
            </button>
          ) : (
            <button
              onClick={handleJoinTrip}
              className="btn btn-primary single-page-btn m-1"
            >
              {t('trips.btn-subscribe')}
            </button>
          )}
          {successMessage && (
            <p className="text-success mt-3">{successMessage}</p>
          )}
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default TripCard;
