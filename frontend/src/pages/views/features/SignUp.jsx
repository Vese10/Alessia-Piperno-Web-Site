import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "../../../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpBackgroundDesktop from "../../../assets/img/signup-background-desktop.png";

function SignUp({ setCurrentPage }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    privacyAccepted: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    if (formData.password !== formData.repeatPassword) {
      setErrorMessage(t("signup.different-pass"));
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage(t("signup.short-pass"));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://alessia-piperno-web-site.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSuccessMessage(t("signup.signup-ok"));
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          password: "",
          repeatPassword: "",
          privacyAccepted: false,
        });
        setTimeout(() => {
          setSuccessMessage("");
          setCurrentPage("login");
        }, 3000);
      } else if (response.status === 409) {
        setErrorMessage(t("signup.user-exists"));
      } else {
        console.error("Error creating user:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  if (successMessage) {
    return (
      <section className="signup">
        {loading ? (
          <div className="d-flex text-center align-items-center justify-content-center flex-column">
            <div className="spinner-border" role="status"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="container-fluid standard-container justify-content-start">
            <div className="container mt-5">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-12 text-center bg-white p-4 rounded-4 signup-container">
                  <p className="container-title mb-0 text-white">
                    {successMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Alessia Piperno - SignUp</title>
      </Helmet>
      <section className="signup">
        <img
          src={SignUpBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Machu Pichu Landscape"
        />
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 pb-0 rounded-top-4 signup-container">
                <p className="container-title mb-0 text-white">
                  {t("signup.title")}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-4 d-flex flex-column bg-white p-4 pt-1 rounded-bottom-4 signup-container">
                <form
                  className="d-flex justify-content-around signup-form"
                  onSubmit={handleSubmit}
                >
                  <div className="signup-form-left">
                    <p className="container-title fs-4 text-white ">
                      {t("signup.title-1")}
                    </p>
                    <div className="mb-3 d-flex align-items-center">
                      <label
                        htmlFor="nome"
                        className="form-label m-2 text-white"
                      >
                        {t("signup.name-label")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="name"
                        placeholder={t("signup.name-input")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label
                        htmlFor="cognome"
                        className="form-label m-2 text-white"
                      >
                        {t("signup.surname-label")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cognome"
                        name="surname"
                        placeholder={t("signup.surname-input")}
                        value={formData.surname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label
                        htmlFor="email"
                        className="form-label m-2 text-white"
                      >
                        {t("signup.email-label")}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder={t("signup.email-input")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label
                        htmlFor="telefono"
                        className="form-label m-2 text-white"
                      >
                        {t("signup.tel-label")}
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        name="phone"
                        placeholder={t("signup.tel-input")}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="signup-form-right">
                    <p className="container-title fs-4 text-white">
                      {t("signup.title-2")}
                    </p>
                    <div className="mb-3 d-flex align-items-center">
                      <label
                        htmlFor="password"
                        className="form-label m-2 text-white"
                      >
                        {t("signup.password-label")}
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder={t("signup.password-input")}
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label
                        htmlFor="repeat-password"
                        className="form-label m-2 text-white"
                      >
                        {t("signup.repeat-pass-label")}
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="repeatPassword"
                        name="repeatPassword"
                        placeholder={t("signup.repeat-pass-input")}
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
                      <label
                        htmlFor="privacy"
                        className="form-check-label ms-2 text-white"
                      >
                        {t("signup.checkbox-text")}
                        <a href="#" target="_blank" className="privacy-check">
                          {t("signup.checkbox-privacy")}
                        </a>
                      </label>
                    </div>
                    <button type="submit" className="btn signup-page-btn">
                      {t("signup.btn")}
                    </button>
                    {errorMessage && (
                      <p className="error-message text-danger">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
