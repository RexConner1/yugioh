import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Yu-Gi-Oh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;