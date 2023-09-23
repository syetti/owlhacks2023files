import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import User from "./User";
import Logout from "./Logout";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const CustomNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Philly Uni Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="auth-buttons">
            {!isAuthenticated && <Login />}
            {isAuthenticated && <Nav.Link href="/user">Profile</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
