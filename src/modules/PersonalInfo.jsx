import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../assets/css/components.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PersonalInfo() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:3000/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { name, surname, email, phone } = response.data;
        setFormData({ name, surname, email, phone });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetta il messaggio di errore

    // Filtra solo i campi necessari
    const filteredData = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      phone: formData.phone
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put('http://localhost:3000/me', filteredData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage(t('personalInfo.success'));
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Mostra il messaggio per 3 secondi
    } catch (error) {
      console.error('Error updating user info:', error);
      setErrorMessage(t('personalInfo.error'));
    }
  };

  if (successMessage) {
    return (
      <section className="signup">
        <div className="container-fluid standard-container justify-content-start">
          <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-12 text-center bg-white p-4 rounded-4 pb-5 signup-container">
                <p className="container-title mb-0 text-white">{successMessage}</p>
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
                {t('personalInfo.title')}
              </h5>
              <form
                className="d-flex justify-content-around signup-form"
                onSubmit={handleSubmit}
              >
                <div className="signup-form-left">
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="name" className="form-label m-2 text-black">
                    {t('personalInfo.name-label')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label
                      htmlFor="surname"
                      className="form-label m-2 text-black"
                    >
                      {t('personalInfo.surname-label')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label
                      htmlFor="email"
                      className="form-label m-2 text-black"
                    >
                      {t('personalInfo.email-label')}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label
                      htmlFor="phone"
                      className="form-label m-2 text-black"
                    >
                      {t('personalInfo.tel-label')}
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn signup-page-btn">
                  {t('personalInfo.btn')}
                  </button>
                </div>
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

export default PersonalInfo;
