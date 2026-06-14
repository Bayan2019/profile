// import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home"><span id='brand'>SAPAR</span></Navbar.Brand>
                </Container>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;