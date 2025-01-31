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

const App: React.FC = () => {
  const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/omOss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Spill", href: "/spill" },
    { name: "Mitt lag", href: "/lag" },
    { name: "Min side", href: "/minSide" },
    { name: "Login", href: "/login" },
    { name: "Registrer", href: "/register" },
  ];

  return (
    <>
      <AppNavbar links={navLinks} />
      <div className="main-content">
        <Routes>
          {/* Definer hovedrutene */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spill" element={<Spill />} />
          <Route path="/lag" element={<ClubPage />} />
          <Route path="/minSide" element={<MyProfile />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/omOss" element={<OmOss />} />

          {/* Fallback-rute for ikke-gjenkjente ruter */}
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
