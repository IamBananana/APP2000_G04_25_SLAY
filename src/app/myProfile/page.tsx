// myProfile.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import "./myProfile.css";
import { getUser, deleteUser, changePassword } from "@/src/actions/userActions";
import supabase from "@/src/utils/supabase";

interface Bruker {
    BrukerID: number;
    BrukerNavn: string;
    Epost: string;
    Passord: string;
}

const MyProfile: React.FC = () => {
    const [userData, setUserData] = useState<Bruker | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [notLogged, setNotLogged] = useState<boolean>(true);
    const [connectionError, setConnectionError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [modalMessage, setModalMessage] = useState<string>("");
    const [modalDeleteMessage, setModalDeleteMessage] = useState<string>("");

    useEffect(() => {
        const testConnection = async () => {
            const { data, error } = await supabase
                .from("bruker")
                .select("*")
                .limit(1);

            if (error) {
                console.error("Error connecting to Supabase:", error);
                setConnectionError("Failed to connect to Supabase.");
            } else {
                console.log("Supabase connection test successful:", data);
                setConnectionError(null);
            }
        };

        testConnection();

        const fetchUserData = async () => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const user = JSON.parse(storedUser);
                const fetchedUser = await getUser(user.BrukerID);
                setUserData(fetchedUser);
                setLoading(false);
                setNotLogged(false);
            } else {
                setLoading(false);
                console.log("User not logged inn");
            }
        };

        fetchUserData();
    }, []);

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
            const success = await changePassword(
                userData.BrukerID,
                newPassword
            );
            if (success) {
                setModalMessage("Passord oppdatert!");
                setTimeout(() => setShowModal(false), 2000);
            } else {
                setModalMessage("Noe gikk galt. Vennligst prøv igjen.");
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setModalMessage("Noe gikk galt. Vennligst prøv igjen.");
        }
    };

    const handleAccountDelete = async () => {
        if (!userData) return;

        try {
            const success = await deleteUser(userData.BrukerID);
            if (success) {
                localStorage.removeItem("user");
                window.location.href = "/";
            } else {
                setModalDeleteMessage("Noe gikk galt. Vennligst prøv igjen.");
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setModalDeleteMessage("Noe gikk galt. Vennligst prøv igjen.");
        }
    };

    return (
        <div className="myProfile-page">
            <h1 className="text-center mb-4">Min side</h1>

            {connectionError ? (
                <p>{connectionError}</p>
            ) : loading ? (
                <p>Loading profile...</p>
            ) : notLogged ? (
                <p>You are not logged inn</p>
            ) : (
                <>
                    <Row className="d-flex align-items-stretch">
                        <Col md={6} className="d-flex">
                            <Card className="mb-4 flex-fill">
                                <Card.Body>
                                    <Card.Title>Kontoopplysninger</Card.Title>
                                    <div className="profile-info">
                                        <Card.Text className="profile-details">
                                            <strong>Medlemsnummer: </strong>{" "}
                                            {userData?.BrukerID} <br />
                                            <strong>Brukernavn: </strong>{" "}
                                            {userData?.BrukerNavn} <br />
                                            <strong>E-post: </strong>{" "}
                                            {userData?.Epost} <br />
                                            <strong>Passord: </strong>{" "}
                                            **********
                                            <Button
                                                variant="link"
                                                className="passwordLink"
                                                onClick={() =>
                                                    setShowModal(true)
                                                }
                                            >
                                                Endre passord
                                            </Button>
                                            <br />
                                            <strong>Medlemskap: </strong> Bø
                                            Discgolf <br />
                                            <a
                                                href="medlemskap#"
                                                className="passwordLink"
                                            >
                                                Administrer medlemskap
                                            </a>
                                            <span
                                                className="deleteAccountLink mt-2 d-block"
                                                onClick={() =>
                                                    setShowDeleteModal(true)
                                                }
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
                                    <strong>
                                        Gjennomsnittlig kast per hull:{" "}
                                    </strong>{" "}
                                    3.4 <br />
                                    <strong>Beste score: </strong> 41 <br />
                                    <strong>Hole-in-ones: </strong> 3 <br />
                                    <strong>PDGA: </strong> 722 <br />
                                    <Button
                                        variant="link"
                                        className="buttonMore"
                                    >
                                        Les mer.
                                    </Button>
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
                                            <strong>Banevurdering: </strong>{" "}
                                            Grivihaugen #2322, Gullbringskogen
                                            #2324 <br />
                                            <strong>Deltakelser: </strong> 5
                                            turneringer, 3 kurs <br />
                                            <Button
                                                variant="link"
                                                className="buttonMore"
                                            >
                                                Les mer
                                            </Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}

            {/* Modals */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Endre passord</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCurrentPassword">
                            <Form.Label>Gammelt passord</Form.Label>
                            <Form.Control
                                type="password"
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="formNewPassword">
                            <Form.Label>Nytt passord</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    {modalMessage && (
                        <p className="text-center">{modalMessage}</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Lukk
                    </Button>
                    <Button variant="primary" onClick={handlePasswordUpdate}>
                        Oppdater passord
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Account Modal */}
            <Modal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Slett konto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Er du sikker på at du vil slette kontoen din?</p>
                    {modalDeleteMessage && (
                        <p className="text-center">{modalDeleteMessage}</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowDeleteModal(false)}
                    >
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
