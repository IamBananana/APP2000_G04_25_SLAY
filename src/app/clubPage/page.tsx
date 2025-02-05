"use client"
import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./ClubPage.css";
import Image from "next/image"
import disc from "@/public/assets/BøDisc.png";

const ClubPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=59.4092&lon=9.0584&appid=7893fe54603a7772584fad62c71e97a1&units=metric&lang=no"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      {/* Navbar */}
      {/*<AppNavbar
        links={[
          { name: "Hjem", href: "/" },
          { name: "Mitt lag", href: "/lag" },
          { name: "Om oss", href: "/omOss" },
        ]}
      /> */}

      {/* Main Content */}
      <div className="club-page" style={{  }}>
        <h1 className="text-center mb-4">Min klubb</h1>

        {}
        <Row className="d-flex align-items-stretch">
          <Col md={6} className="d-flex">
            <Card className="mb-4 flex-fill">
              <Card.Body>
                <Card.Title>Klubbinformasjon</Card.Title>
                <div className="club-info">
                  <Card.Text className="club-details">
                    <strong>Navn:</strong> Bø Discgolf <br />
                    <strong>Sted:</strong> Bø, Telemark, Norge <br />
                    <strong>Medlemmer:</strong> 70 <br />
                    <br />
                    Den største discgolfklubben i Telemark. <br />
                    <button type="button" className="buttonMore"> Les mer. </button>
                  </Card.Text>
                  <Image
                    src={disc}
                    alt="Club Logo"
                    className="club-logo"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="d-flex">
            <Card className="mb-4 flex-fill">
              <Card.Body>
                <Card.Title>Kommende Aktiviteter</Card.Title>
                <ul>
                  <li>Turnering Campus Bø: 25. januar</li>
                  <li>Treningsdag: 1. februar</li>
                  <li>Medlemsmøte: 8. februar</li>
                  <li>Åpningen av Breisåsskogen: 5. mars</li>
                </ul>
                <button type="button" className="buttonMore"> Les mer. </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Col md={12} className="mt-4">
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Våre Baner</Card.Title>
              <div className="courses">
                <div className="course">
                  <h5>Gullbringskogen</h5>
                  <p>
                    <strong>Adresse:</strong> Campus Bø, Bø <br />
                    <strong>Hull:</strong> 18 <br />
                    <strong>Vanskelighetsgrad:</strong> Middels  <br />
                    <strong>Beskrivelse:</strong> En utfordrende bane for både
                    nybegynnere og erfarne spillere, omgitt av fin natur.
                    <br />
                    <strong>Værprognose:</strong>{" "}
                    {weatherData ? (
                      `${weatherData.main.temp}°C, ${weatherData.weather[0].description}`
                    ) : error ? (
                      <span>{error}</span>
                    ) : (
                      <span>Laster...</span>
                    )}
                    <br />
                    <strong>Beste score: </strong> 42 kast av Ben Dover <br />
                         
                    <button type="button" className="buttonMore"> Les mer. </button>
                      
                  </p>
                </div>
                <div className="course">
                  <h5>Grivihaugen</h5>
                  <p>
                    <strong>Adresse:</strong> Grivibakken 2, Bø <br />
                    <strong>Hull:</strong> 9 <br />
                    <strong>Vanskelighetsgrad:</strong> Lett <br />
                    <strong>Beskrivelse:</strong> Perfekt for nybegynnere og korte
                    treningsøkter. <br />
                    <strong>Værprognose:</strong>{" "}
                    {weatherData ? (
                      `${weatherData.main.temp}°C, ${weatherData.weather[0].description}`
                    ) : error ? (
                      <span>{error}</span>
                    ) : (
                      <span>Laster...</span>
                    )}
                    <br />
                    <strong>Beste score: </strong> 17 kast av DiscgolfMaster123 <br />
                    <button type="button" className="buttonMore"> Les mer. </button>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Følg oss på sosiale medier</Card.Title>
                <div className="social-media">
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Image
                      src="./src/assets/tiktok.png"
                      alt="TikTok"
                      className="social-icon"
                    />
                    
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Image
                      src="./src/assets/instagram.png"
                      alt="Instagram"
                      className="social-icon"
                    />
                    
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p className ="mail"> Konktakt oss: bø.discgolf@outlook.com</p>
      </div>
    </>
  );
};

export default ClubPage;
