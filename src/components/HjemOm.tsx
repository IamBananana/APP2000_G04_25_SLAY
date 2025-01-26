import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HjemOm() {
    return (
        <div id="omOss" className="omOss-block">
            <Container fluid>
                <div className="tittel-holder">
                    <h1>Om oss</h1>
                    <div className="subtitle">
                        Lær mer om oss
                    </div>
                </div>
                <Row>
                    <Col>
                        <p>Vi er en gjeng med golfere som elsker golf. Vi har spilt golf i mange år og vi har mye erfaring med golf. Vi har også en golfbane som vi eier og driver. Vi har også en golfbutikk</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}