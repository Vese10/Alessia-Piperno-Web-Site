import { useState, useEffect } from "react";
import "./App.css";
import "./i18n";
import { AuthProvider, useAuth } from "./components/AuthContext";
import Navbar from "./components/navbar";
import Home from "./pages/views/features/Home";
import Azadì from "./pages/views/features/Azadì";
import Freelancer from "./pages/views/features/Freelancer";
import Trips from "./pages/views/features/Trips";
import Contacts from "./pages/views/features/Contacts";
import Login from "./pages/views/features/Login";
import SignUp from "./pages/views/features/SignUp";
import UserAccount from "./pages/views/features/UserAccount";
import AddTrip from "./components/AddTrip";
import Footer from "./components/footer";

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
