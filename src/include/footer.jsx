import { useState } from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstaLogo from "../assets/img/instagram-logo.webp";

function Footer() {
  return (
    <>
      <footer className="container-fluid d-flex align-items-center justify-content-between footer">
        <div className="d-flex align-items-center left-footer">
          <p className="footer-info">© 2024 Alessia Piperno. All rights reserved</p>
          <a href="https://www.instagram.com/travel.adventure.freedom/" target="_blank" rel="noopener noreferrer">
            <img src={InstaLogo} className="instagram" alt="Instagram logo"></img>
          </a>
        </div>
        <div className="right-footer">
          <a href="/privacy-policy" className="privacy">Privacy policy</a>
          <a href="/cookie-policy" className="cookie">Cookie policy</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
