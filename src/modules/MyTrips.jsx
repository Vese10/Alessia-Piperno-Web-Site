import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyTrips() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('usertrips.title')}</h5>
              <p>
              {t('usertrips.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
