import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContattiPageBackgroundDesktop from "../assets/img/contatti-page-background-desktop.png";

function Contatti({ setLanguage }) {
  const { t, i18n } = useTranslation();
  const [buttonText, setButtonText] = useState(t('home.btn-contacts'));

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText(t('home.btn-contacts-try'));

    emailjs
      .sendForm(
        "service_likb8ht",
        "template_0m6aymw",
        e.target,
        "tMJ6iLYRPLiPo_2pi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText(t('home.btn-contacts-ok'));
          e.target.reset();
          setTimeout(() => setButtonText(t('home.btn-contacts')), 3000);
        },
        (error) => {
          console.log(error.text);
          setButtonText(t('home.btn-contacts-ko'));
          setTimeout(() => setButtonText(t('home.btn-contacts')), 3000);
        }
      );
  };

  return (
    <>
      <section className="contatti">
        <img
          src={ContattiPageBackgroundDesktop}
          className="img-fluid background-image-desktop"
          alt="Paesaggio Montagna"
        />
        <div className="container-fluid d-flex contacts-container">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 d-flex flex-column justify-content-center bg-white p-4 form-left">
                <h1 className="text-center text-md-left container-title">
                {t('home.title-contacts')}
                </h1>
                <p className="text-center text-md-left container-description">
                {t('home.description-contacts')}
                </p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4 bg-white p-4 form-right">
                <form onSubmit={sendEmail}>
                  <div className="form-group p-2">
                    <label htmlFor="nome" className="label-text">
                    {t('home.name-label')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="user_name"
                      placeholder={t('home.name-input')}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="cognome" className="label-text">
                    {t('home.surname-label')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cognome"
                      name="user_surname"
                      placeholder={t('home.surname-input')}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="email" className="label-text">
                    {t('home.email-label')}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="user_email"
                      placeholder={t('home.email-input')}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="telefono" className="label-text">
                    {t('home.tel-label')}
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="user_phone"
                      placeholder={t('home.tel-input')}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <label htmlFor="messagge" className="label-text">
                    {t('home.message-label')}
                    </label>
                    <textarea
                      type="message"
                      className="form-control"
                      id="messaggio"
                      name="user_message"
                      placeholder={t('home.message-input')}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 single-page-btn"
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

export default Contatti;
