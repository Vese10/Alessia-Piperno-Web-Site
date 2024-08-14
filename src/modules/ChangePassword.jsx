import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ChangePassword() {
  const { t } = useTranslation();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== repeatPassword) {
      setErrorMessage(t('changePassword.error-1'));
      return;
    }

    // Controlla se la password è lunga almeno 6 caratteri
    if (newPassword.length < 6) {
      setErrorMessage(t('changePassword.error-2'));
      return;
    }

    try {
      const token = sessionStorage.getItem("token"); // Assumi che il token sia salvato in localStorage
      const response = await axios.put(
        "https://alessia-piperno-web-site.onrender.com/change-password",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setErrorMessage(""); // Resetta il messaggio di errore
      setSuccessMessage(t('changePassword.success'));
      setOldPassword("");
      setNewPassword("");
      setRepeatPassword("");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Mostra il messaggio per 3 secondi
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  if (successMessage) {
    return (
      <section className="signup">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-4 pb-5 signup-container">
                <p className="container-title mb-0 text-white">{successMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center m-4">{t('changePassword.title')}</h5>
              <form className="signup-form-right">
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="oldPassword" className="form-label m-2">
                    {t('changePassword.old-password-label')}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    name="oldPassword"
                    placeholder={t('changePassword.old-password-input')}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="newPassword" className="form-label m-2">
                    {t('changePassword.new-password-label')}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    placeholder={t('changePassword.new-password-input')}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="repeatPassword" className="form-label m-2">
                    {t('changePassword.repeat-password-label')}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder={t('changePassword.repeat-password-input')}
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={handleChangePassword}
                >
                  {t('changePassword.btn')}
                </button>
              </form>
              {errorMessage && !successMessage && (
                <p className="mt-3 text-center text-danger">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;