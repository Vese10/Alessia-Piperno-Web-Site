import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ChangePassword() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center m-4">Modifica Password</h5>
              <form className="signup-form-right">
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="password"
                    className="form-label m-2 text-white"
                  >
                    Vecchia Password*:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Inserisci vecchia password"
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="password"
                    className="form-label m-2 text-white"
                  >
                    Nuova Password*:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Scegli nuova password"
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="repeat-password"
                    className="form-label m-2 text-white"
                  >
                    Ripeti Nuova Password*:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Ripeti nuova password"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary single-page-btn"
                >
                  Conferma
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
