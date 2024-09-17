// Trips.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TripCard from "../../../components/trip-card";
import "../../../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Trips({ setCurrentPage }) {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);

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
      } catch (error) {
        console.error(t("trips.error"), error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <section className="container-fluid p-5 trips-page">
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
    </section>
  );
}

export default Trips;
