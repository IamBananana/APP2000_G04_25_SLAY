import React from "react";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Importer bildene 
import stockGolf from './assets/stockGolf.jfif';
import stockGolf2 from './assets/stockGolf2.jfif';
import stockGolf3 from './assets/stockGolf3.jfif';
//import { Router } from "react-router-dom";

//Denne navningen er fra chatGPT, men forklarer oppsettet under bedre.
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login/login";
import Home from "./home/home";
import Spill from "./spill/spill";
import Register from "./register/register";
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
        <AppNavbar links={navLinks} />
        <Routes>
          {/* Definerer ruten for Register-siden */}
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spill" element={<Spill />} />
        </Routes>
      </>
  );
};

export default App;
