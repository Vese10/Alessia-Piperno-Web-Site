// UserAccount.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../modules/AuthContext";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "../modules/PersonalInfo";
import ChangePassword from "../modules/ChangePassword";
import MyTrips from "../modules/MyTrips";
import AddTrip from "../modules/AddTrip";
import ManageTrips from "../modules/ManageTrips";

function UserAccount({ setCurrentPage }) {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const [section, setSection] = useState("personalInfo");

  const role = sessionStorage.getItem("role");

  const handleLogout = () => {
    logout();
    setCurrentPage("login");
  };

  const renderSection = () => {
    if (role === "admin") {
      if (section === "myTrips") {
        return <ManageTrips />;
      } else if (section === "addTrip") {
        return <AddTrip />;
      }
    }

    switch (section) {
      case "personalInfo":
        return <PersonalInfo />;
      case "changePassword":
        return <ChangePassword />;
      case "myTrips":
        return <MyTrips />;
      case "manageTrips":
        return <ManageTrips />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <section className="useraccount">
      <div className="container-fluid p-0">
        <div className="text-white text-center py-3 private-area">
          <h1>{t("useraccount.title")}</h1>
        </div>
        <nav className="nav nav-pills nav-fill bg-dark-subtle p-4">
          <button
            className={`nav-link nav-link-account text-black ${
              section === "personalInfo" ? "selected" : ""
            }`}
            onClick={() => setSection("personalInfo")}
          >
            {t("useraccount.info")}
          </button>
          <button
            className={`nav-link nav-link-account text-black ${
              section === "changePassword" ? "selected" : ""
            }`}
            onClick={() => setSection("changePassword")}
          >
            {t("useraccount.password")}
          </button>
          {role === "admin" ? (
            <>
              <button
                className={`nav-link nav-link-account text-black ${
                  section === "manageTrips" ? "selected" : ""
                }`}
                onClick={() => setSection("manageTrips")}
              >
                {t("useraccount.manageTrips")}
              </button>
              <button
                className={`nav-link nav-link-account text-black ${
                  section === "addTrip" ? "selected" : ""
                }`}
                onClick={() => setSection("addTrip")}
              >
                Aggiungi Viaggio
              </button>
            </>
          ) : (
            <button
              className={`nav-link nav-link-account text-black ${
                section === "myTrips" ? "selected" : ""
              }`}
              onClick={() => setSection("myTrips")}
            >
              {t("useraccount.trips")}
            </button>
          )}
          <button
            className="nav-link nav-link-account text-black"
            onClick={handleLogout}
          >
            {t("useraccount.logout")}
          </button>
        </nav>

        <div className="mt-4">{renderSection()}</div>
      </div>
    </section>
  );
}

export default UserAccount;
