import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../modules/AuthContext";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "../modules/PersonalInfo";
import ChangePassword from "../modules/ChangePassword";
import MyTrips from "../modules/MyTrips";

function UserAccount({ setCurrentPage }) {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const [section, setSection] = useState("personalInfo");

  const handleLogout = () => {
    logout();
    setCurrentPage("login"); // Naviga alla pagina iniziale o di login
  };

  const renderSection = () => {
    switch (section) {
      case "personalInfo":
        return <PersonalInfo />;
      case "changePassword":
        return <ChangePassword />;
      case "myTrips":
        return <MyTrips />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <section className="useraccount">
      <div className="container-fluid p-0">
        <div className="text-white text-center py-3 private-area">
          <h1>{t('useraccount.title')}</h1>
        </div>
        <nav className="nav nav-pills nav-fill bg-dark-subtle p-4">
          <button
            className={`nav-link nav-link-account text-black ${section === "personalInfo" ? "selected" : ""}`}
            onClick={() => setSection("personalInfo")}
          >
            Informazioni Personali
          </button>
          <button
            className={`nav-link nav-link-account text-black ${section === "changePassword" ? "selected" : ""}`}
            onClick={() => setSection("changePassword")}
          >
            Modifica Password
          </button>
          <button
            className={`nav-link nav-link-account text-black ${section === "myTrips" ? "selected" : ""}`}
            onClick={() => setSection("myTrips")}
          >
            I miei viaggi
          </button>
          <button className="nav-link nav-link-account text-black" onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div className="mt-4">{renderSection()}</div>
      </div>
    </section>
  );
}

export default UserAccount;
