
/**
 * @author Richard
 * Denne filen generer en navbar som et React-element slik at det kan 
 * importere det på de sidene som måtte trenge det. 
 * @param {Object} props - Props-objektet
 * @param {Array} props.links - En array av lenker
 * @param {string} props.links[].name - Navnet som skal vises
 * @param {string} props.links[].href - URL-en som en lenke peker til
 * 
 * @returns {JSX.Element} Returnerer et JSX-element for navbar
 */

// Husk å kjør "npm install react-bootstrap" og 
// "npm install --save-dev @types/react-bootstrap" i CMD
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

//struktur for typesikkerhet i tyepscript + react
interface NavLink {
  name: string;
  href: string;
}
interface AppNavbarProps {
  links: NavLink[];
}

const AppNavbar: React.FC<AppNavbarProps> = ({ links }) => {
  // Del lenkene i to grupper: venstre og høyre
  const leftLinks = links.filter(link => !['Min side', 'Login', 'Registrer'].includes(link.name));
  const rightLinks = links.filter(link => ['Min side', 'Login', 'Registrer'].includes(link.name));

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">TeeTime</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {leftLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {rightLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;