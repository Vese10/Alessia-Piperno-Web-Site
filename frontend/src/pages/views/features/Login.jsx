// src/components/Login.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../components/AuthContext";
import "../../../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ setCurrentPage }) {
  const { t } = useTranslation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await fetch(
        "https://alessia-piperno-web-site.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);
        sessionStorage.setItem("token", data.token);
        login(data.role);
        setCurrentPage("useraccount");
      } else {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        setErrorMessage("Email or password incorrect");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Server error");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 bg-white p-4 rounded-top-4">
                <p className="container-title mb-0">{t("login.title-1")}</p>
                <p className="container-description">{t("login.text-1")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 mb-4 d-flex flex-column bg-white p-4 login-old">
                <p className="container-title">{t("login.title-2")}</p>
                <p className="container-description">{t("login.text-2")}</p>
                {errorMessage && (
                  <p className="error-message text-danger">{errorMessage}</p>
                )}
                <form className="d-flex flex-column" onSubmit={handleSubmit}>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="email" className="form-label">
                      {t("login.username-label")}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={t("login.username-input")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="password" className="form-label">
                      {t("login.password-label")}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder={t("login.password-input")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary single-page-btn"
                  >
                    {t("login.btn-1")}
                  </button>
                </form>
              </div>
              <div className="col-lg-6 col-12 mb-4 d-flex flex-column bg-white p-4 login-new">
                <p className="container-title">{t("login.title-3")}</p>
                <p className="container-description">{t("login.text-3")}</p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={() => handleNavClick("signup")}
                >
                  {t("login.btn-2")}
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
