import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstaLogo from "../assets/img/instagram-logo.webp";

function Footer({ setLanguage }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <footer className="container-fluid d-flex align-items-center justify-content-between footer">
        <div className="d-flex align-items-center left-footer">
          <p className="footer-info">{t("footer.rights")}</p>
          <a
            href="https://www.instagram.com/travel.adventure.freedom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstaLogo}
              className="instagram"
              alt="Instagram logo"
            ></img>
          </a>
        </div>
        <div className="right-footer">
          <a href="/privacy-policy" className="privacy">
            {t("footer.privacy")}
          </a>
          <a href="/cookie-policy" className="cookie">
            {t("footer.cookie")}
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
