import React from "react";
import CartWidget from './CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navBar.css';

const NavBar = () => {
    return (
        <div className="navigationBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Book Square</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#history">Historical novels</Nav.Link>
                            <Nav.Link href="#news">Biographies</Nav.Link>
                            <Nav.Link href="#tech">Mental health</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#cart">
                                <CartWidget />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
