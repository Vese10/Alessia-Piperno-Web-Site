import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import "./i18n";
import { AuthProvider } from "./modules/AuthContext";
import Navbar from "./include/navbar";
import Home from "./components/Home";
import Azadì from "./components/Azadì";
import Freelancer from "./components/Freelancer";
import Viaggi from "./components/Viaggi";
import Contatti from "./components/Contatti";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserAccount from "./components/UserAccount";
import Footer from "./include/footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [language, setLanguage] = useState("it");
  const history = useHistory();

  useEffect(() => {
    // Funzione di gestione per l'evento beforeunload
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    // Funzione di gestione per la conferma di ricaricamento
    const handleUnload = () => {

      localStorage.removeItem("token");

      history.push("/login");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
    };
  }, [history]);

  const renderPage = () => {
    switch (currentPage) {
      case "azadì":
        return <Azadì setLanguage={setLanguage} />;
      case "freelancer":
        return <Freelancer setLanguage={setLanguage} />;
      case "viaggi":
        return <Viaggi setLanguage={setLanguage} />;
      case "contatti":
        return <Contatti setLanguage={setLanguage} />;
      case "login":
        return (
          <Login setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
      case "signup":
        return <SignUp setCurrentPage={setCurrentPage} />;
      case "useraccount":
        return (
          <UserAccount
            setCurrentPage={setCurrentPage}
            setLanguage={setLanguage}
          />
        );
      default:
        return (
          <Home setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
    }
  };

  return (
    <>
      <AuthProvider>
        <Navbar
          setCurrentPage={setCurrentPage}
          setLanguage={setLanguage}
        ></Navbar>
        {renderPage()}
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
