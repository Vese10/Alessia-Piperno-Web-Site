import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Freelancer({ setLanguage }) {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <section className="useraccount">
        <div className="container-fluid d-flex flex-column align-intems-center justify-content-center p-0">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex text-center align-items-end freelancer-top">
              <p className="container-title freelancer-title-top p-4 m-0">
              {t('freelancer.title')}
              </p>
            </div>
            <div className="container-fluid d-flex flex-column justify-content-center p-4">
              <p className="container-title freelancer-title">{t('freelancer.title-freelancer-1')}</p>
              <p className="container-description freelancer-description">
              {t('freelancer.description-freelancer-1')}
              </p>
            </div>
            <div className="container-fluid d-flex flex-column justify-content-center p-4">
              <p className="container-title freelancer-title">{t('freelancer.title-freelancer-2')}</p>
              <p className="container-description freelancer-description">
              {t('freelancer.description-freelancer-2')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Freelancer;