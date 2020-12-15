import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Yu-Gi-Oh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/game">New Game</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={this.props.loggedIn ? '/decks/edit' : '/signup'}>{this.props.loggedIn ? 'Edit Deck' : 'Sign Up'}</Nav.Link>
                        <Nav.Link href="/login">{this.props.loggedIn ? 'Logout' : 'Login'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;