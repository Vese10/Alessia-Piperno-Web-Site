import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PersonalInfo() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    privacyAccepted: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetta il messaggio di errore

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccessMessage("Informazioni personali aggiornate con successo");
        setFormData({
          name: '',
          surname: '',
          email: '',
          phone: '',
          password: '',
          repeatPassword: '',
          privacyAccepted: false,
        });
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); // Mostra il messaggio per 3 secondi
      } else if (response.status === 409) {
        setErrorMessage("L'email inserita è già presente sui nostri sistemi");
      } else {
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (successMessage) {
    return (
      <section className="signup">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-top-4 pb-5 signup-container">
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
              <h5 className="card-title text-center m-4">
                Informazioni Personali
              </h5>
              <form
                className="d-flex justify-content-around signup-form"
                onSubmit={handleSubmit}
              >
                <div className="signup-form-left">
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="nome" className="form-label m-2 text-black">
                      Nome:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="name"
                      placeholder={t("signup.name-input")}
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label
                      htmlFor="cognome"
                      className="form-label m-2 text-black"
                    >
                      Cognome:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cognome"
                      name="surname"
                      placeholder={t("signup.surname-input")}
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label
                      htmlFor="email"
                      className="form-label m-2 text-black"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder={t("signup.email-input")}
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label
                      htmlFor="telefono"
                      className="form-label m-2 text-black"
                    >
                      Telefono:
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="phone"
                      placeholder={t("signup.tel-input")}
                    />
                  </div>
                  <button type="submit" className="btn signup-page-btn">
                  Aggiorna Informazioni
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
