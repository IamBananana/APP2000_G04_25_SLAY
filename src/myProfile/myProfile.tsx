import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal, Form, Spinner } from "react-bootstrap";
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
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setConnectionError("Ingen bruker funnet. Logg inn på nytt.");
      setLoading(false);
      return;
    }

    // Fetch user data from Express backend
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/profile?userId=${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setConnectionError("Kunne ikke hente brukerdata.");
      } finally {
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

    try {
      const response = await fetch("/api/user/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userData?.BrukerID,
          currentPassword,
          newPassword,
        }),
      });

      const result = await response.json();
      setModalMessage(result.message);
      setTimeout(() => setShowModal(false), 2000);
    } catch (error: any) {
      console.error("Error updating password:", error);
      setModalMessage(error.message || "Noe gikk galt.");
    }
  };

  // Handle account deletion
  const handleAccountDelete = async () => {
    if (!userData) return;

    try {
      const response = await fetch("/api/user/delete-account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userData.BrukerID }),
      });

      if (response.ok) {
        localStorage.removeItem("userId");
        window.location.href = "/";
      } else {
        const result = await response.json();
        setModalDeleteMessage(result.message || "Noe gikk galt.");
      }
    } catch (error: any) {
      console.error("Error deleting account:", error);
      setModalDeleteMessage(error.message || "Noe gikk galt.");
    }
  };

  return (
    <div className="myProfile-page">
      <h1 className="text-center mb-4">Min side</h1>

      {connectionError ? (
        <p className="text-danger">{connectionError}</p>
      ) : loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Laster profil...</p>
        </div>
      ) : (
        <>
          <Row className="d-flex align-items-stretch">
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
                        onClick={() => setShowModal(true)}
                      >
                        Endre passord
                      </Button>
                      <br />
                      <strong>Medlemskap: </strong> Bø Discgolf <br />
                      <a href="medlemskap#" className="passwordLink">
                        Administrer medlemskap
                      </a>
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

          {/* Passordendringsmodal */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Endre passord</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Gammelt passord</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nytt passord</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <p className="text-danger">{modalMessage}</p>
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

          {/* Slett konto modal */}
          <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Bekreft sletting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Er du sikker på at du vil slette kontoen din? Dette kan ikke angres.
              <p className="text-danger">{modalDeleteMessage}</p>
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
        </>
      )}
    </div>
  );
};

export default MyProfile;
