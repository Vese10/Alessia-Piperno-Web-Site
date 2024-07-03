import { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../assets/img/home.png";
import Azadì from "../assets/img/azadì.png";
import Freelancer from "../assets/img/freelancer.png";
import Viaggi from "../assets/img/viaggi.png";
import Contatti from "../assets/img/contatti.png";
import Login from "../assets/img/login.png";
import Lingua from "../assets/img/lingua.png";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="btn btn-custom d-lg-none d-flex flex-column">
              <span className="travel-adventure">TRAVEL.</span><span className="travel-adventure">ADVENTURE.</span>FREEDOM
            </a>
            <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
              <div className="d-flex left-section">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <img src={Home} className="nav-img"></img>
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <img src={Azadì} className="nav-img"></img>
                    <a className="nav-link" href="<?=$path?>#azadì">
                      Azadì!
                    </a>
                  </li>
                  <li className="nav-item">
                    <img src={Freelancer} className="nav-img"></img>
                    <a className="nav-link" href="<?=$path?>#freelancer">
                      Freelancer
                    </a>
                  </li>
                  <li className="nav-item">
                    <img src={Viaggi} className="nav-img"></img>
                    <a className="nav-link" href="<?=$path?>#viaggi">
                      Viaggi
                    </a>
                  </li>
                  <li className="nav-item">
                    <img src={Contatti} className="nav-img"></img>
                    <a className="nav-link" href="<?=$path?>#contatti">
                      Contatti
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo">
                <a className="nav-link" href="<?=$path?>#logo">
                  <span className="travel-adventure">TRAVEL.ADVENTURE.</span>
                  FREEDOM
                </a>
              </div>
              <div className="d-flex right-section">
                <li className="nav-item">
                  <img src={Login} className="nav-img"></img>
                  <a className="nav-link" href="<?=$path?>#login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <img src={Lingua} className="nav-img"></img>
                  <a className="nav-link" href="<?=$path?>#lingua">
                    Lingua
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
