import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PersonalInfo() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Informazioni Personali</h5>
              {/* Inserire qui il modulo per modificare le informazioni personali */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
