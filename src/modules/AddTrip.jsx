// AddTrip.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddTrip({ onAddTrip }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    price: "",
    maxParticipants: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://alessia-piperno-web-site.onrender.com/trips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const newTrip = await response.json();
        onAddTrip(newTrip);
        setSuccessMessage("Viaggio aggiunto con successo");
        setFormData({
          title: "",
          description: "",
          date: "",
          price: "",
          maxParticipants: "",
        });
      } else {
        setErrorMessage("Errore durante l'aggiunta del viaggio");
      }
    } catch (error) {
      console.error("Errore:", error);
      setErrorMessage("Errore durante l'aggiunta del viaggio");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center m-4">
                Dettagli Nuovo Viaggio
              </h5>
              
              <form
                className="signup-form"
                onSubmit={handleSubmit}
              >
                {/* Campi per l'inserimento dei dati */}
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="continente" className="form-label m-2 text-black">
                    Continente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="continente"
                    name="continente"
                    placeholder="Aggiungi continente"
                    value={formData.continente}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="description" className="form-label m-2 text-black">
                    Descrizione
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Aggiungi descrizione"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="date" className="form-label m-2 text-black">
                    Data
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="price" className="form-label m-2 text-black">
                    Prezzo
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Prezzo"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="maxParticipants" className="form-label m-2 text-black">
                    Partecipanti
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="maxParticipants"
                    name="maxParticipants"
                    placeholder="Numero massimo di partecipanti"
                    value={formData.maxParticipants}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary single-page-btn">
                  Aggiungi Viaggio
                </button>
              </form>
              {successMessage && (
                <p className="text-success mt-3">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="error-message text-danger mt-3">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTrip;