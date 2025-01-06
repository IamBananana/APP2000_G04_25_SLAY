/**
 * @author Richard
 * Definerer hovedfunksjonaliteten for index.html
 * 
 * @returns {JSX.Element} Returnerer et JSX-element som representerer index
 */

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register/register';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

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
    <Router>
      <AppNavbar links={navLinks} />
      <div className="container" style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={
            <div>
              <h1 className="text-center">Velkommen til React med Bootstrap!</h1>
              <h2 className="text-center">Teller: {count}</h2>
              <button className="btn btn-primary" onClick={incrementCounter}>
                Øk teller
              </button>
            </div>
          } />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;