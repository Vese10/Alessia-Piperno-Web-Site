import { useState, useEffect } from "react";
import "./App.css";
import "./i18n";
import { AuthProvider, useAuth } from "./modules/AuthContext";
import Navbar from "./include/navbar";
import Home from "./components/Home";
import Azadì from "./components/Azadì";
import Freelancer from "./components/Freelancer";
import Trips from "./components/Trips";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserAccount from "./components/UserAccount";
import AddTrip from "./modules/AddTrip";
import Footer from "./include/footer";

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState("home");
  const [language, setLanguage] = useState("it");

  useEffect(() => {
    if (isAuthenticated) {
      setCurrentPage("useraccount");
    } else {
      setCurrentPage("home");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
      case "azadì":
        return (
          <Azadì setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
      case "freelancer":
        return (
          <Freelancer
            setCurrentPage={setCurrentPage}
            setLanguage={setLanguage}
          />
        );
      case "trips":
        return (
          <Trips setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
      case "contacts":
        return (
          <Contacts setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
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
      case "addtrip":
        return (
          <AddTrip setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
      default:
        return (
          <Home setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
        );
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
      {renderPage()}
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
