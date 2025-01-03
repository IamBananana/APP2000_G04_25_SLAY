/**
 * @author Richard
 * Definerer hovedfunksjonaliteten for index.html
 * 
 * @returns {JSX.Element} Returnerer et JSX-element som representerer index
 */

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';

const App: React.FC = () => {
  // State for å holde styr på telleren
  const [count, setCount] = useState<number>(0);

  // Funksjon for å håndtere knappetrykk
  const incrementCounter = () => {
    setCount(count + 1);
  };

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
    <div>
      <AppNavbar links={navLinks} />
      <div className="container" style={{ paddingTop: '70px' }}>
        <h1 className="text-center">Velkommen til React med Bootstrap!</h1>
        <h2 className="text-center">Teller: {count}</h2>
        <button className="btn btn-primary" onClick={incrementCounter}>
          Øk teller
        </button>
      </div>
    </div>
  );
};

export default App;