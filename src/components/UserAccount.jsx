// UserAccount.jsx
import React, { useState } from "react";
import { useAuth } from "../modules/AuthContext";
import AddTrip from "./AddTrip"; // Un componente che permette agli amministratori di aggiungere nuovi viaggi

function UserAccount({ setCurrentPage }) {
  const { logout } = useAuth();
  const [section, setSection] = useState("personalInfo");

  const role = localStorage.getItem("role");

  const renderSection = () => {
    if (role === "admin" && section === "addTrip") {
      return <AddTrip />;
    }

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
        <nav className="nav nav-pills nav-fill bg-dark-subtle p-4">
          <button className="nav-link" onClick={() => setSection("personalInfo")}>Informazioni Personali</button>
          <button className="nav-link" onClick={() => setSection("changePassword")}>Cambia Password</button>
          <button className="nav-link" onClick={() => setSection("myTrips")}>I Miei Viaggi</button>
          {role === "admin" && (
            <button className="nav-link" onClick={() => setSection("addTrip")}>Aggiungi Viaggio</button>
          )}
          <button className="nav-link" onClick={logout}>Logout</button>
        </nav>
        <div className="mt-4">{renderSection()}</div>
      </div>
    </section>
  );
}

export default UserAccount;