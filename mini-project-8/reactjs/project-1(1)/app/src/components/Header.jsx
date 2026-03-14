import React from 'react';
import { Navbar, container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (
        <>
            <Navbar bg="dark" variant='dark' collapseOnSelect>
                <container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Ecommerce Layout</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">

                                <Nav.Link>Link</Nav.Link>

                            </LinkContainer>

                            <LinkContainer to="/login">

                                <Nav.Link>Link</Nav.Link>

                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>


                </container>
            </Navbar >
        </>
    )
}

export default Header;
