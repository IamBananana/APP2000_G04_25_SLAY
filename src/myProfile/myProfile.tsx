import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import "../index.css"; // Global styles (including Bootstrap)
import "./myProfile.css"; // Custom styles

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

  useEffect(() => {
    // Fetch user data from localStorage
    const fetchUserData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUserData(JSON.parse(storedUser)); // Fetch user info from localStorage
        }
        setLoading(false); // Set loading to false after the data is fetched
      } catch (error) {
        console.error("Error fetching user data:", error);
        setConnectionError("Kunne ikke laste brukerdata. Vennligst prøv igjen.");
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
      const response = await fetch("http://localhost:5000/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brukerID: userData.BrukerID,
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModalMessage(data.message);
        setTimeout(() => setShowModal(false), 2000);
      } else {
        setModalMessage(data.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setModalMessage("Noe gikk galt. Vennligst prøv igjen.");
    }
  };

  // Handle account deletion
  const handleAccountDelete = async () => {
    if (!userData) return;

    try {
      const response = await fetch("http://localhost:5000/delete-account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brukerID: userData.BrukerID,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.removeItem("user"); // Clear local storage
        window.location.href = "/"; // Redirect to homepage after deletion
      } else {
        setModalMessage(data.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setModalMessage("Noe gikk galt. Vennligst prøv igjen.");
    }
  };

  // Loading or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (connectionError) {
    return <div>{connectionError}</div>;
  }

  if (!userData) {
    return <div>Brukeren er ikke logget inn.</div>;
  }

  return (
    <div className="my-profile-container">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h3>Min Profil</h3>
              <p><strong>Brukernavn:</strong> {userData.BrukerNavn}</p>
              <p><strong>E-post:</strong> {userData.Epost}</p>
              {/* Add more fields if necessary */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Endre Passord
          </Button>
          <Button variant="danger" onClick={() => setShowDeleteModal(true)} className="ml-2">
            Slett Konto
          </Button>
        </Col>
      </Row>

      {/* Modal for updating password */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Endre Passord</Modal.Title>
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
            <Button variant="primary" onClick={handlePasswordUpdate}>
              Oppdater Passord
            </Button>
          </Form>
          {modalMessage && <p>{modalMessage}</p>}
        </Modal.Body>
      </Modal>

      {/* Modal for account deletion */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Er du sikker på at du vil slette kontoen din?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Dette kan ikke angres!</p>
          <Button variant="danger" onClick={handleAccountDelete}>
            Slett Konto
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyProfile;
