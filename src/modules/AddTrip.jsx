// AddTrip.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddTrip() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    price: "",
    maxParticipants: "",
  });

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
        alert("Viaggio aggiunto con successo");
      } else {
        alert("Errore durante l'aggiunta del viaggio");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center m-4">
                {t("personalInfo.title")}
              </h5>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Titolo"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Descrizione"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Prezzo"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="maxParticipants"
                  placeholder="Numero massimo di partecipanti"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Aggiungi Viaggio</button>
              </form>
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
