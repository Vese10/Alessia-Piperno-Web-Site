// MyTrips.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ManageTrips() {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(
          "https://alessia-piperno-web-site.onrender.com/trips",
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTrips(data);
        } else {
          setErrorMessage(t("usertrips.fetchError"));
        }
      } catch (error) {
        console.error("Error in retrieving trips:", error);
        setErrorMessage(t("usertrips.fetchError"));
      }
    };

    fetchTrips();
  }, [t]);

  return (
    <>
      <Helmet>
        <title>Alessia Piperno - MyTrips</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> {t("usertrips.trips")}</h5>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <ul className="list-group">
                  {trips.length > 0 ? (
                    trips.map((trip) => (
                      <li key={trip._id} className="list-group-item">
                        <h5>{trip.nation}</h5>
                        <p>{trip.description}</p>
                        <p>
                          {t("usertrips.date")}:{" "}
                          {new Date(trip.date).toLocaleDateString()}
                        </p>
                        <p>
                          {t("usertrips.duration")}: {trip.duration}
                        </p>
                        <p>
                          {t("usertrips.price")}: {trip.price}€
                        </p>
                        <p>
                          {t("usertrips.participants")}:{" "}
                          {trip.participants.length}/{trip.maxParticipants}
                        </p>
                        <h6>{t("usertrips.participantsList")}:</h6>
                        <ul>
                          {trip.participants.map((user) => (
                            <li key={user._id}>
                              {user.name} {user.surname}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))
                  ) : (
                    <p>{t("usertrips.noTrips")}</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageTrips;
