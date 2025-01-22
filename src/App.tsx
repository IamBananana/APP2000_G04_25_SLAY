/**
 * @author Richard
 * Definerer hovedfunksjonaliteten for index.html
 * 
 * @returns {JSX.Element} Returnerer et JSX-element som representerer index
 */

import React, { useState } from "react";
import AppNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Importer bildene 
import stockGolf from './assets/stockGolf.jfif';
import stockGolf2 from './assets/stockGolf2.jfif';
import stockGolf3 from './assets/stockGolf3.jfif';

const App: React.FC = () => {
   // Definerer lenker som skal være i navbaren på de forskjellige sidene
  // Import images
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
      <div className="main-container">
        <h1>TeeTime</h1>
        <div id="carouselWoo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselWoo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselWoo" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselWoo" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={stockGolf} className="d-block carousel-image" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={stockGolf2} className="d-block carousel-image" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={stockGolf3} className="d-block carousel-image" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselWoo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselWoo" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="ye">
          <h2>Velkommen til TeeTime
          </h2>
            <p>
            TeeTime er en nettside for deg som liker golf. Her kan du finne informasjon om golfbaner, <br>
            </br>bestille starttider, og delta i turneringer. Vi tilbyr også en rekke artikler og tips for å 
            forbedre ditt spill. Bli med i vårt fellesskap og del din lidenskap for golf med andre entusiaster.
            </p>
        </div>
    </div>
  );
};

export default App;
