import { useState } from "react";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBackgroundDesktop from "../assets/img/login-background-desktop.png";

function Login({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetta il messaggio di errore
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setCurrentPage("home"); // Naviga al componente home in caso di successo
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className="login">
        <img
          src={LoginBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Machu Pichu"
        />
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 bg-white p-4 rounded-top-4 pb-5">
                <p className="container-title mb-0">Accesso Clienti:</p>
                <p className="container-description">
                  Accedi al tuo account oppure creane uno nuovo.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 mb-4 d-flex flex-column bg-white p-4 login-old pb-5">
                <p className="container-title">Clienti Registrati</p>
                <p className="container-description">
                  Se ti sei già registrato, accedi con le tue credenziali.
                </p>
                {errorMessage && (
                  <p className="error-message text-danger">{errorMessage}</p>
                )}
                <form className="d-flex flex-column" onSubmit={handleSubmit}>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="email" className="form-label">
                      Email*:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Inserisci email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="password" className="form-label">
                      Password*:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Inserisci password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary single-page-btn"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="col-lg-6 col-12 mb-4 d-flex flex-column bg-white p-4 login-new">
                <p className="container-title">Nuovi Clienti</p>
                <p className="container-description">
                  Se non hai ancora un account, clicca sul pulsante sottostante
                  per registrarti.
                </p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={() => handleNavClick("home")}
                >
                  Registrati
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;