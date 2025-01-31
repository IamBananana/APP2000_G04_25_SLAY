import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Spill from "./spill/spill";
import Register from "./register/register";
import Login from "./login/login";
import ClubPage from "./clubPage/clubPage";
import MyProfile from "./myProfile/myProfile";
import Kontakt from "./kontakt/kontakt";
import OmOss from "./omOss/omOss";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Opprett en enkel 404-siden komponent
const NotFound: React.FC = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>404 - Page not found</h2>
      <p>Beklager, siden du leter etter finnes ikke.</p>
    </div>
  );
};

const App: React.FC = () => {
  // Simulere innloggingsstatus, kan byttes ut med ekte autentisering
  const isUserLoggedIn = false; // Denne bør hentes fra state eller context

  // Definer navigasjonslenker med dynamisk visning
  const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/omOss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Spill", href: "/spill" },
    { name: "Mitt lag", href: "/lag" },
    { name: "Min side", href: "/minSide" },
    { name: "Login", href: "/login", show: !isUserLoggedIn }, // Vis kun hvis ikke innlogget
    { name: "Registrer", href: "/register", show: !isUserLoggedIn }, // Vis kun hvis ikke innlogget
  ];

  return (
    <>
      {/* Passer de synlige linkene til AppNavbar */}
      <AppNavbar links={navLinks.filter(link => link.show !== false)} />
      
      <div className="main-content">
        {/* Definer hovedrutene */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spill" element={<Spill />} />
          <Route path="/lag" element={<ClubPage />} />
          <Route path="/minSide" element={<MyProfile />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/omOss" element={<OmOss />} />
          
          {/* Fallback-rute for ikke-gjenkjente ruter */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      <Footer />
    </>
  );
};

export default App;
