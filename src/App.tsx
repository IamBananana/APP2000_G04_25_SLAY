/**
 * @author Richard
 * Definerer hovedfunksjonaliteten for index.html
 * 
 * @returns {JSX.Element} Returnerer et JSX-element som representerer index
 */

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
//import { Router } from "react-router-dom";

//Denne navningen er fra chatGPT, men forklarer oppsettet under bedre.
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login/login";
import Home from "./home/home";
import Spill from "./spill/spill";


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
    { name: "Registrer", href: "/registrer" },
  ];

  return (
    
    <>
      <AppNavbar links={navLinks} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/spill" element={<Spill />} />
        </Routes>
    </>
    
  );
};

export default App;