// MyTrips.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyTrips() {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const response = await fetch("https://alessia-piperno-web-site.onrender.com/user/trips", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTrips(data);
        } else {
          setErrorMessage(t('usertrips.fetchError'));
        }
      } catch (error) {
        console.error("Errore nel recupero dei viaggi:", error);
        setErrorMessage(t('usertrips.fetchError'));
      }
    };

    fetchUserTrips();
  }, [t]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('usertrips.title')}</h5>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              <ul className="list-group">
                {trips.length > 0 ? (
                  trips.map((trip) => (
                    <li key={trip._id} className="list-group-item">
                      <h5>{trip.nation}</h5>
                      <p>{trip.description}</p>
                      <p>{t('usertrips.date')}: {new Date(trip.date).toLocaleDateString()}</p>
                      <p>{trip.duration}</p>
                      <p>{t('usertrips.price')}: {trip.price}€</p>
                      <p>{t('usertrips.participants')}: {trip.participants.length}/{trip.maxParticipants}</p>
                    </li>
                  ))
                ) : (
                  <p>{t('usertrips.noTrips')}</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;