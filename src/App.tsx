/**
 * @author Richard
 * Definerer hovedfunksjonaliteten for index.html
 * 
 * @returns {JSX.Element} Returnerer et JSX-element som representerer index
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import ClubPage from "./clubPage/clubPage";

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-center">Velkommen til React med Bootstrap!</h1>
      <h2 className="text-center">Teller: {count}</h2>
      <button className="btn btn-primary" onClick={incrementCounter}>
        Øk teller
      </button>
    </div>
  );
};

const App: React.FC = () => {
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
    <Router>
      <div>
        <AppNavbar links={navLinks} />
        <div className="container" style={{paddingTop : "30px"}}>
          <Routes>
            {/* Define HomePage route */}
            <Route path="/" element={<HomePage />} />
            {/* Define ClubPage route */}
            <Route path="/lag" element={<ClubPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
