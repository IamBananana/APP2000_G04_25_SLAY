import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import supabase from '../db'; // Import Supabase from the db.ts file
import "./myProfile.css"; // Your custom styles
import "../index.css"; // Any global styles

interface Bruker {
  BrukerID: number;
  BrukerNavn: string;
  Epost: string;
  Passord: string;
}

const MyProfile: React.FC = () => {
  const [userData, setUserData] = useState<Bruker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [connectionError, setConnectionError] = useState<string | null>(null); // To hold connection errors

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("bruker").select("*").limit(1); // Test basic connection

      if (error) {
        console.error("Error connecting to Supabase:", error);
        setConnectionError("Failed to connect to Supabase.");
      } else {
        console.log("Supabase connection test successful:", data);
        setConnectionError(null); // Reset error if connection is successful
      }
    };

    testConnection();

    // Fetch user data from localStorage
    const fetchUserData = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUserData(JSON.parse(storedUser)); // Hent brukerinformasjon fra localStorage
      }
      setLoading(false); // Set loading to false after the data is fetched
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="myProfile-page">
        <h1 className="text-center mb-4">Min side</h1>

        {/* Display connection status */}
        {connectionError ? (
          <p>{connectionError}</p> // Show connection error message
        ) : loading ? (
          <p>Loading profile...</p> // Display loading message until data is fetched
        ) : (
          <Row className="d-flex align-items-stretch">
            {/* Account Information Card */}
            <Col md={6} className="d-flex">
              <Card className="mb-4 flex-fill">
                <Card.Body>
                  <Card.Title>Kontoopplysninger</Card.Title>
                  <div className="profile-info">
                    <Card.Text className="profile-details">
                      <strong>Medlemsnummer: </strong> {userData?.BrukerID} <br />
                      <strong>Brukernavn: </strong> {userData?.BrukerNavn} <br />
                      <strong>E-post: </strong> {userData?.Epost} <br />
                      <strong>Passord: </strong> **********  
                      <a href="passwordChange#" className="passwordLink"> Endre passord </a> <br />
                      <strong>Medlemskap: </strong> Bø Discgolf <br />
                      <a href="medlemskap#" className="passwordLink"> Administrer medlemskap </a> <br />
                    </Card.Text>                       
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Statistics Card */}
            <Col md={6} className="d-flex">
              <Card className="mb-4 flex-fill">
                <Card.Body>
                  <Card.Title>Min statistikk</Card.Title>
                  <strong>Runder spilt: </strong> 10 <br />
                  <strong>Gjennomsnittlig kast per hull: </strong> 3.4 <br />
                  <strong>Beste score: </strong> 41 <br />
                  <Button variant="link">Les mer.</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        <Row className="d-flex align-items-stretch">
          {/* Activities Card */}
          <Col md={6} className="d-flex">
            <Card className="mb-4 flex-fill">
              <Card.Body>
                <Card.Title>Mine aktiviteter</Card.Title>
                <div className="profile-info">
                  <Card.Text className="profile-details">
                    <strong>Banevurdering: </strong> Grivihaugen #2322, Gullbringskogen #2324 <br />
                    <strong>Deltakelser: </strong> Notodden-turnering 15.Januar, Klubbmøte 20.Januar <br />
                    <Button variant="link">Les mer.</Button>  
                  </Card.Text>                       
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Social Card */}
          <Col md={6} className="d-flex">
            <Card className="mb-4 flex-fill">
              <Card.Body>
                <Card.Title>Sosialt</Card.Title>
                <div className="profile-info">
                  <Card.Text className="profile-details">
                    <strong>Venner: </strong> JavaRoy, spirti1, plym, kianospotato, sigridng <br />
                    <strong>Legg til venn: </strong> 
                    <input placeholder="Søk..." className="placeholderFriend" />
                    <Button variant="primary" className="addFriend">Send forespørsel</Button>
                  </Card.Text>                       
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MyProfile;
