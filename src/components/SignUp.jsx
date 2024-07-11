import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpBackgroundDesktop from "../assets/img/signup-background-desktop.png";

function SignUp() {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

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
        setSuccessMessage("Registrazione avvenuta con successo, effettua il login");
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
        setErrorMessage("Utente già registrato");
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
                <p className="container-title mb-0 success-message">{successMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="signup">
      <img
        src={SignUpBackgroundDesktop}
        className="img-fluid background-image-desktop"
        alt="Paesaggio Machu Pichu"
      />
      <div className="container-fluid standard-container justify-content-start">
        <div className="container mt-5">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 text-center bg-white p-4 rounded-top-4 pb-5 signup-container">
              <p className="container-title mb-0 text-white">Registrati come nuovo cliente</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4 d-flex flex-column bg-white p-4 pb-5 rounded-bottom-4 signup-container">
              {errorMessage && (
                <p className="error-message text-danger">{errorMessage}</p>
              )}
              <form className="d-flex justify-content-around signup-form" onSubmit={handleSubmit}>
                <div className="signup-form-left">
                  <p className="container-title text-white">Informazioni personali:</p>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="nome" className="form-label m-2 text-white">Nome*:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="name"
                      placeholder="Inserisci nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="cognome" className="form-label m-2 text-white">Cognome*:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cognome"
                      name="surname"
                      placeholder="Inserisci cognome"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="email" className="form-label m-2 text-white">Email*:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Inserisci email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="telefono" className="form-label m-2 text-white">Telefono:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="phone"
                      placeholder="Inserisci telefono"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="signup-form-right">
                  <p className="container-title text-white">Credenziali:</p>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="password" className="form-label m-2 text-white">Password*:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Inserisci password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="repeat-password" className="form-label m-2 text-white">Ripeti Password*:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Ripeti password"
                      value={formData.repeatPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="privacy"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="privacy" className="form-check-label ms-2 text-white">
                      Accetto le condizioni della{" "}
                      <a href="#" target="_blank" className="privacy-check">Privacy</a>
                    </label>
                  </div>
                  <button type="submit" className="btn signup-page-btn">Crea Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;