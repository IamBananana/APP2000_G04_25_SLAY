import { useState } from "react";

import stockGolf from '../assets/stockGolf.jfif';
import stockGolf2 from '../assets/stockGolf2.jfif';
import stockGolf3 from '../assets/stockGolf3.jfif';

export default function Home() {
    return (
      <div className="main-container">
        <h1>TeeTime</h1>
        <div id="carouselWoo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselWoo"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
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
        <div className="ye">
          <h2>Velkommen til TeeTime</h2>
          <p>
            TeeTime er en nettside for deg som liker golf. Her kan du finne informasjon om golfbaner, <br />
            bestille starttider, og delta i turneringer. Vi tilbyr også en rekke artikler og tips for å forbedre ditt spill. Bli med i
            vårt fellesskap og del din lidenskap for golf med andre entusiaster.
          </p>
        </div>
      </div>
    );
}