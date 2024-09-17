import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import sendEmail from "../../../components/SendMail";
import "../../../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBackgroundDesktop from "../../../assets/img/home-background-desktop.png";
import HomeImage from "../../../assets/img/home-image.png";
import AzadìBackgroundDesktop from "../../../assets/img/azadì-background-desktop.png";
import AzadìImage from "../../../assets/img/azadì-image.png";
import FreelancerBackgroundDesktop from "../../../assets/img/freelancer-background-desktop.png";
import TripsBackgroundDesktop from "../../../assets/img/viaggi-background-desktop.png";
import TripsImage from "../../../assets/img/viaggi-image.png";
import ContactsBackgroundDesktop from "../../../assets/img/contatti-background-desktop.png";

function Home({ setCurrentPage, setLanguage }) {
  const { t, i18n } = useTranslation();
  const [buttonText, setButtonText] = useState(t("home.btn-contacts"));

  const handleSendEmail = (e) => {
    sendEmail(e, setButtonText, t);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Helmet>
        <title>Alessia Piperno - Home</title>
      </Helmet>
      <section className="home">
        <img
          src={HomeBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Mountain Landscape"
        />
        <div className="container-fluid d-flex main-container-1 landing-page">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                <img
                  src={HomeImage}
                  alt="Home"
                  className="img-fluid rounded-circle inside-image"
                />
              </div>
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">{t("home.title")}</p>
                <p className="container-description">{t("home.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="azadì-home">
        <img
          src={AzadìBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Mountain Landscape"
        />
        <div className="container-fluid d-flex main-container-2">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                <img
                  src={AzadìImage}
                  alt="Home"
                  className="img-fluid rounded-circle inside-image"
                />
              </div>
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">{t("home.title-azadì")}</p>
                <p className="container-description">
                  {t("home.description-azadì")}
                </p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={() => handleNavClick("azadì")}
                >
                  {t("home.btn-azadì")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="freelancer-home">
        <img
          src={FreelancerBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Mountain Landscape"
        />
        <div className="container-fluid d-flex main-container-1">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">{t("home.title-freelancer")}</p>
                <p className="container-description">
                  {t("home.description-freelancer")}
                </p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={() => handleNavClick("freelancer")}
                >
                  {t("home.btn-freelancer")}
                </button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trips-home">
        <img
          src={TripsBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Mountain Landscape"
        />
        <div className="container-fluid d-flex main-container-2">
          <div className="container-fluid mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                <img
                  src={TripsImage}
                  alt="Home"
                  className="img-fluid rounded-circle inside-image"
                />
              </div>
              <div className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 container-text">
                <p className="container-title">{t("home.title-travel")}</p>
                <p className="container-description">
                  {t("home.description-travel")}
                </p>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                  onClick={() => handleNavClick("trips")}
                >
                  {t("home.btn-travel")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contatti-home">
        <img
          src={ContactsBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Mountain landscape"
        />
        <div className="container-fluid d-flex main-container-1">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 d-flex flex-column justify-content-center bg-white p-4 form-left">
                <h1 className="text-center text-md-left container-title">
                  {t("home.title-contacts")}
                </h1>
                <p className="text-center text-md-left container-description">
                  {t("home.description-contacts")}
                </p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4 bg-white p-2 form-right">
                <form onSubmit={handleSendEmail}>
                  <div className="form-group p-2">
                    <label htmlFor="nome" className="label-text">
                      {t("home.name-label")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="user_name"
                      placeholder={t("home.name-input")}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="cognome" className="label-text">
                      {t("home.surname-label")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cognome"
                      name="user_surname"
                      placeholder={t("home.surname-input")}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="email" className="label-text">
                      {t("home.email-label")}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="user_email"
                      placeholder={t("home.email-input")}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="telefono" className="label-text">
                      {t("home.tel-label")}
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="user_phone"
                      placeholder={t("home.tel-input")}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="messagge" className="label-text">
                      {t("home.message-label")}
                    </label>
                    <textarea
                      type="message"
                      className="form-control"
                      id="messaggio"
                      name="user_message"
                      placeholder={t("home.message-input")}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-1 single-page-btn-contacts"
                    >
                      {buttonText}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
