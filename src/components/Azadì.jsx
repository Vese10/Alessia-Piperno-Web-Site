import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookImage from "../assets/img/book-cover.jpg";
import MondadoriLogo from "../assets/img/mondadori-logo.png";
import CoopLogo from "../assets/img/coop-logo.png";
import AmazonLogo from "../assets/img/amazon-logo.png";
import IBSLogo from "../assets/img/ibs-logo.png";
import FeltrinelliLogo from "../assets/img/feltrinelli-logo.png";

function Azadì({ setLanguage }) {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <section className="azadì">
        <div className="container-fluid d-flex align-intems-center justify-content-center">
          <div className="row azadì-row">
            <div className="col-lg-4 d-flex align-items-center justify-content-center left-azadì">
              <img src={BookImage} alt="Home" className="azadì-image"></img>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center p-5 center-azadì">
              <p className="container-title azadì-title">{t('azadì.title-azadì')}</p>
              <p className="container-description azadì-description">{t('azadì.description-azadì')}
              </p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center right-azadì">
              <p className="container-title text-white">
              {t('azadì.buy-azadì')}
              </p>
              <a
                className="store-link"
                href="https://www.mondadoristore.it/Azadi-diario-viaggio-Alessia-Piperno/eai978880477763/?sessionToken=2lyrzP0JQW6tkxuW9dh5OvvVBUSYz6ym"
                target="_blank"
                rel="nooper"
              >
                <img
                  src={MondadoriLogo}
                  alt="Mondadori Logo"
                  className="img-fluid store-image"
                ></img>
              </a>
              <div className="d-flex p-4 align-items-center justify-content-center">
                <a
                  className="col-lg-6 p-5 store-link"
                  href="https://www.librerie.coop/libri/9788804777632-azadi-alessia-piperno-libri-mondadori/?tduid=b22274c379e5bf793924ca57d883049d"
                  target="_blank"
                  rel="nooper"
                >
                  <img
                    src={CoopLogo}
                    alt="Coop Logo"
                    className="img-fluid store-image"
                  ></img>
                </a>
                <a
                  className="col-lg-6 p-5 store-link"
                  href="https://www.amazon.it/azadi-alessia-piperno/dp/880477763X/?tag=librimondadori-21"
                  target="_blank"
                  rel="nooper"
                >
                  <img
                    src={AmazonLogo}
                    alt="Amazon Logo"
                    className="img-fluid store-image"
                  ></img>
                </a>
              </div>
              <div className="d-flex p-4 align-items-center justify-content-center">
                <a
                  className="col-lg-6 p-5 store-link"
                  href="https://www.ibs.it/azadi-libro-alessia-piperno/e/9788804777632?gad_source=1&gclid=CjwKCAjw4ri0BhAvEiwA8oo6F7bKPAV8C5pJXWnILjipRG9g2jiDjIQIWicwWzknPH-sZzz1W8pXQRoCy3MQAvD_BwE"
                  target="_blank"
                  rel="nooper"
                >
                  <img
                    src={IBSLogo}
                    alt="IBS Logo"
                    className="img-fluid store-image"
                  ></img>
                </a>
                <a
                  className="col-lg-6 p-5 store-link"
                  href="https://www.lafeltrinelli.it/azadi-libro-alessia-piperno/e/9788804777632?utm_source=tradedoubler&utm_medium=cpa&utm_campaign=2993006&utm_content=affiliazione&tduid=b22274c379e5bf793924ca57d883049d"
                  target="_blank"
                  rel="nooper"
                >
                  <img
                    src={FeltrinelliLogo}
                    alt="Feltrinelli Logo"
                    className="img-fluid store-image"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Azadì;
