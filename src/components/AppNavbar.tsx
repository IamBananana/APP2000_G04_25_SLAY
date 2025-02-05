"use client";
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

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/omOss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Spill", href: "/spill" },
    { name: "Mitt lag", href: "/lag" },
    { name: "Min side", href: "/minSide" },
    { name: "Login", href: "/login" },
    { name: "Registrer", href: "/register" },
];

export default function AppNavbar() {
    const links = navLinks;

    // Del lenkene i to grupper: venstre og høyre
    const leftLinks = links.filter(
        (link) => !["Min side", "Login", "Registrer"].includes(link.name),
    );
    const rightLinks = links.filter((link) =>
        ["Min side", "Login", "Registrer"].includes(link.name),
    );

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} href="/" passHref>
                    TeeTime
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {leftLinks.map((link, index) => (
                            <Nav.Link
                                key={index}
                                as={Link}
                                href={link.href}
                                passHref
                            >
                                {link.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                        {rightLinks.map((link, index) => (
                            <Nav.Link
                                key={index}
                                as={Link}
                                href={link.href}
                                passHref
                            >
                                {link.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
