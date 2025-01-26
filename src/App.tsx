import React from "react";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


//import { Router } from "react-router-dom";

//Denne navningen er fra chatGPT, men forklarer oppsettet under bedre.
import {Routes, Route} from 'react-router-dom';
import Login from "./login/login";
import Home from "./home/home";
import Spill from "./spill/spill";
import Register from "./register/register";
import ClubPage from "./clubPage/clubPage";
import Footer from "./components/Footer";
import OmOss from "./omOss/omOss";

// import Register from './register/register';

const App: React.FC = () => {
  // Definerer lenker som skal være i navbaren på de forskjellige sidene
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
      <header id="header">
    <AppNavbar links={navLinks} />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spill" element={<Spill />} />
        <Route path="/lag" element={<ClubPage />} />
          <Route path="/omOss" element={<OmOss />} />
      </Routes>
    </div>
      </header>
    <Footer />
  </>
  );
};

export default App;
