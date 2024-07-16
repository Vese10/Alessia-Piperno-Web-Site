import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from '../modules/AuthContext';
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UserAccount({ setCurrentPage }) {
  const { t, i18n } = useTranslation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setCurrentPage("login"); // Naviga alla pagina iniziale o di login
  };

  return (
    <>
      <section className="useraccount">
        <p>{t('useraccount.logout-text')}</p>
        <button className="btn btn-primary" onClick={handleLogout}>
          {t('useraccount.logout-button')}
        </button>
      </section>
    </>
  );
}

export default UserAccount;