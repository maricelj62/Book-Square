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
                            <Link to='/category/Novelas históricas' className="itemLink">
                                Novelas históricas
                            </Link>
                            <Link to='/category/Biografías' className="itemLink">
                                Biografías
                            </Link>
                            <Link to='/category/Salud mental' className="itemLink">
                                Salud mental
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to='/cart' className="cartLink">
                                <CartWidget />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
