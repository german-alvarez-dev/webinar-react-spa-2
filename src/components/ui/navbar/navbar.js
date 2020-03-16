import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand>FeedMe!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as="li">
                        <Link to="/">Inicio</Link>
                    </Nav.Link>
                    <Nav.Link as="li">
                        <Link to="/alimentos">Alimentos</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation