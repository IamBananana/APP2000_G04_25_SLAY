import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios"; // Import Axios for HTTP requests
import "../index.css"; // Any global styles (including Bootstrap)
import "./myProfile.css"; // Your custom styles

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

  // State for pop-up modals
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [modalDeleteMessage, setModalDeleteMessage] = useState<string>("");

  useEffect(() => {
    // Fetch user data from the Express backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/profile", {
          params: { userId: "1" }, // Replace with actual user ID (e.g., from localStorage)
        });
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setConnectionError("Failed to fetch user data.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle password update
  const handlePasswordUpdate = async () => {
    if (!currentPassword || !newPassword) {
      setModalMessage("Alle felt må fylles ut.");
      return;
    }

    if (userData?.Passord !== currentPassword) {
      setModalMessage("Gammelt passord er feil.");
      return;
    }

    try {
      const response = await axios.post("/api/user/update-password", {
        userId: userData?.BrukerID,
        currentPassword,
        newPassword,
      });
      setModalMessage(response.data.message);
      setTimeout(() => setShowModal(false), 2000);
    } catch (error) {
      console.error("Error updating password:", error);
      setModalMessage("Noe gikk galt. Vennligst prøv igjen.");
    }
  };

  // Handle account deletion
  const handleAccountDelete = async () => {
    if (!userData) return;

    try {
      const response = await axios.delete("/api/user/delete-account", {
        data: { userId: userData.BrukerID },
      });
      localStorage.removeItem("user");
      window.location.href = "/"; // Redirect to homepage after deletion
    } catch (error) {
      console.error("Error deleting account:", error);
      setModalDeleteMessage("Noe gikk galt. Vennligst prøv igjen.");
    }
  };

  return (
    <div className="myProfile-page">
      <h1 className="text-center mb-4">Min side</h1>

      {/* Display connection status */}
      {connectionError ? (
        <p>{connectionError}</p> // Show connection error message
      ) : loading ? (
        <p>Loading profile...</p> // Display loading message until data is fetched
      ) : (
        <>
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
                      <Button
                        variant="link"
                        className="passwordLink"
                        onClick={() => setShowModal(true)} // Open modal
                      >
                        Endre passord
                      </Button>
                      <br />
                      <strong>Medlemskap: </strong> Bø Discgolf <br />
                      <a href="medlemskap#" className="passwordLink">
                        Administrer medlemskap
                      </a>
                      {/* Slett konto placed directly below Administrer medlemskap */}
                      <span
                        className="deleteAccountLink mt-2 d-block"
                        onClick={() => setShowDeleteModal(true)}
                      >
                        Slett konto
                      </span>
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
                  <strong>Hole-in-ones: </strong> 3 <br />
                  <strong>PDGA: </strong> 722 <br />
                  <Button variant="link" className="buttonMore">Les mer.</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>  

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
                      <Button variant="link" className="buttonMore">Les mer.</Button>
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
                      <Button className="addFriend">
                        Send forespørsel
                      </Button>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}

      {/* Modal for changing password */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Endre passord</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="currentPassword">
              <Form.Label>Gammelt passord</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Skriv inn gammelt passord"
              />
            </Form.Group>
            <Form.Group controlId="newPassword" className="mt-3">
              <Form.Label>Nytt passord</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Skriv inn nytt passord"
              />
            </Form.Group>
            {modalMessage && <p className="text-info mt-3">{modalMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Lukk
          </Button>
          <Button variant="primary" onClick={handlePasswordUpdate}>
            Oppdater passord
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for deleting account */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Slett konto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Er du sikker på at du vil slette <strong>{userData?.BrukerNavn}</strong>? All data vil gå tapt.
          </p>
          {modalDeleteMessage && <p className="text-danger">{modalDeleteMessage}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Avbryt
          </Button>
          <Button variant="danger" onClick={handleAccountDelete}>
            Slett konto
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyProfile;
