import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function sendEmail(e, setButtonText, t) {
  e.preventDefault();
  setButtonText(t("home.btn-contacts-try"));

  emailjs
    .sendForm(
      "service_likb8ht",
      "template_0m6aymw",
      e.target,
      "tMJ6iLYRPLiPo_2pi"
    )
    .then(
      (result) => {
        console.log(result.text);
        setButtonText(t("home.btn-contacts-ok"));
        e.target.reset();
        setTimeout(() => setButtonText(t("home.btn-contacts")), 3000);
      },
      (error) => {
        console.log(error.text);
        setButtonText(t("home.btn-contacts-ko"));
        setTimeout(() => setButtonText(t("home.btn-contacts")), 3000);
      }
    );
}

export default sendEmail;
