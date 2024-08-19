// AddTrip.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddTrip() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nation: "",
    description: "",
    date: "",
    duration: "",
    price: "",
    maxParticipants: "",
    imageUrl: "",
    imageFile: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = new FormData();
    formattedData.append("nation", formData.nation);
    formattedData.append("description", formData.description);
    formattedData.append("date", new Date(formData.date).toISOString());
    formattedData.append("duration", formData.duration);
    formattedData.append("price", formData.price);
    formattedData.append("maxParticipants", formData.maxParticipants);

    if (formData.imageFile) {
      formattedData.append("image", formData.imageFile);
    } else if (formData.imageUrl) {
      formattedData.append("image", formData.imageUrl);
    }

    console.log("Dati inviati al backend:", formattedData);

    try {
      const response = await fetch(
        "https://alessia-piperno-web-site.onrender.com/trips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (response.ok) {
        setSuccessMessage(t("addtrips.success"));
        setFormData({
          nation: "",
          description: "",
          date: "",
          duration: "",
          price: "",
          maxParticipants: "",
          imageUrl: "",
          imageFile: null,
        });
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); // Mostra il messaggio per 3 secondi
      } else {
        const errorResponse = await response.json();
        console.error(t("addtrips.error"), errorResponse);
        setErrorMessage(t("addtrips.error"));
      }
    } catch (error) {
      console.error("Errore:", error);
      setErrorMessage(t("addtrips.error"));
    }
  };

  if (successMessage) {
    return (
      <section className="signup">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-4 signup-container">
                <p className="container-title mb-0 text-white">
                  {successMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center m-4">
                {t("addtrips.title")}
              </h5>

              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="nation" className="form-label m-2 text-black">
                    {t("addtrips.nation")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nation"
                    name="nation"
                    placeholder={t("addtrips.nation-input")}
                    value={formData.nation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="description"
                    className="form-label m-2 text-black"
                  >
                    {t("addtrips.description")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder={t("addtrips.description-input")}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="date" className="form-label m-2 text-black">
                    {t("addtrips.date")}
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
                  <label
                    htmlFor="duration"
                    className="form-label m-2 text-black"
                  >
                    {t("addtrips.duration")}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="duration"
                    name="duration"
                    placeholder={t("addtrips.duration-input")}
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="price" className="form-label m-2 text-black">
                    {t("addtrips.price")}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder={t("addtrips.price-input")}
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="maxParticipants"
                    className="form-label m-2 text-black"
                  >
                    {t("addtrips.participants")}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="maxParticipants"
                    name="maxParticipants"
                    placeholder={t("addtrips.participants-input")}
                    value={formData.maxParticipants}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    {t("addtrips.image-url")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageFile" className="form-label">
                    {t("addtrips.image-file")}
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="imageFile"
                    name="imageFile"
                    onChange={handleFileChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary single-page-btn"
                >
                  {t("addtrips.btn-addTrips")}
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
