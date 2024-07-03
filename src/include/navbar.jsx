import { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="btn btn-custom d-lg-none">TRAVEL.ADVENTURE.FREEDOM</a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <a className="navbar-toggler-icon"></a>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-home" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#azadì">
                Azadì!
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#freelancer">
                Freelancer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#viaggi">
                Viaggi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#contatti">
                Contatti
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#logo">
                TRAVEL.ADVENTURE.FREEDOM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?=$path?>#lingua">
                Lingua
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
