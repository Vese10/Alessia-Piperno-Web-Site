// Trips.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import TripCard from "../../../components/trip-card";
import "../../../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Trips({ setCurrentPage }) {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteTrip = (tripId) => {
    setTrips(trips.filter((trip) => trip._id !== tripId));
  };

  const handleEditTrip = (trip) => {
    sessionStorage.setItem("editTrip", JSON.stringify(trip));
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(
          "https://alessia-piperno-web-site.onrender.com/trips",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setTrips(data);
        setLoading(false);
      } catch (error) {
        console.error(t("trips.error"), error);
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <>
      <Helmet>
        <title>Alessia Piperno - Trips</title>
      </Helmet>
      <section className="container-fluid p-5 trips-page">
        {loading ? (
          <div className="d-flex text-center align-items-center justify-content-center flex-column">
            <div className="spinner-border" role="status"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="row">
            {trips.map((trip, index) => (
              <div key={index} className="col-md-6 mb-4 trip-cont">
                <TripCard
                  trip={trip}
                  onDelete={handleDeleteTrip}
                  onEdit={handleEditTrip}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Trips;
