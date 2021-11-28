import React from "react";
import CartWidget from './CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
        <div className="navigationBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/' className="link">
                        <Navbar.Brand>Book Square</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/category/Historical novels' className="linkItem">
                                Historical novels
                            </Link>
                            <Link to='/category/Biographies' className="linkItem">
                                Biographies
                            </Link>
                            <Link to='/category/Mental health' className="linkItem">
                                Mental health
                            </Link>
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
