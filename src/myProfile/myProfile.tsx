import React from 'react'; // Ensure React is imported
import { Row, Col, Card, Placeholder } from "react-bootstrap";


import AppNavbar from "../components/Navbar"; // Import the navbar component
import "./myProfile.css"; // Your custom styles
import "../index.css"; // Any global styles



const MyProfile: React.FC = () => {
    return (
        <>
            
            <div className="myProfile-page" style={{  }}>
                <h1 className="text-center mb-4"> Min side </h1>
                
                {}
                <Row className="d-flex align-items-stretch">
                <Col md={6} className="d-flex">
                    <Card className="mb-4 flex-fill">
                    <Card.Body>
                        <Card.Title>Kontoopplysninger</Card.Title>
                        <div className="profile-info">
                        <Card.Text className="profile-details">
                            <strong>Medlemsnummer: </strong> 14222 <br />
                            <strong>Brukernavn: </strong> Ben Dover <br />
                            <strong>E-post: </strong> elling.gladsoe@outlook.com <br />
                            <strong>Passord: </strong> **********  
                            <a href="passwordChange#" className="passwordLink"> Endre passord </a> <br />              
                            <strong>Medlemskap: </strong> Bø Discgolf   <br />   
                            <a href="medlemskap#" className="passwordLink"> Administrer medlemskap </a> <br />    
                        </Card.Text>                       
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="d-flex">
                            <Card className="mb-4 flex-fill">
                              <Card.Body>
                                <Card.Title>Min statistikk</Card.Title>
                                <strong>Runder spilt: </strong> 10 <br />
                                <strong>Gjennomsnittlig kast per hull: </strong> 3.4 <br />
                                <strong>Beste score: </strong> 41 <br />
                                <button type="button" className="buttonMore"> Les mer. </button>
                              </Card.Body>
                            </Card>
                          </Col>
                        
                </Row>

                <Row className="d-flex align-items-stretch">
                <Col md={6} className="d-flex">
                    <Card className="mb-4 flex-fill">
                    <Card.Body>
                        <Card.Title>Mine aktiviteter</Card.Title>
                        <div className="profile-info">
                        <Card.Text className="profile-details">
                            <strong>Banevurdering: </strong> Grivihaugen #2322, Gullbringskogen #2324 <br />
                            <strong>Deltakelser: </strong> Notodden-turnering 15.Januar, Klubbmøte 20.Januar
                              <br /> 
                            
                            
                            <button type="button" className="buttonMore"> Les mer. </button>
                            <br />  
                        </Card.Text>                       
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex">
                    <Card className="mb-4 flex-fill">
                    <Card.Body>
                        <Card.Title>Sosialt</Card.Title>
                        <div className="profile-info">
                        <Card.Text className="profile-details">
                            <strong>Venner: </strong> JavaRoy, spirti1, plym, kianospotato, sigridng <br />
                            <strong> Legg til venn  </strong> 
                            <input placeholder="Søk..." className="placeholderFriend"></input>
                            <button type="button" className="addFriend"> Send forespørsel </button>

                            
                            
                             
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