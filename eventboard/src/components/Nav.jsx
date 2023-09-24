import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import User from "./User";
import Modal from "react-modal";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Nav.css"; // Create a CSS file for your custom styles

// Import your image
import logoImage from "../images/toilet.jpg"; // Replace with the actual path to your image

const CustomNav = () => {
  const { isAuthenticated } = useAuth0();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Add the image to your navbar */}
        <img src={logoImage} alt="Logo" className="navbar-logo" />

        {/* The rest of your navbar code */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" style={{ fontSize: "36px", fontFamily: "Monospace" }}>
              CitySquats
            </Nav.Link>
          </Nav>
          <Nav className="auth-buttons">
            {!isAuthenticated && <Login />}
            {isAuthenticated && (
              <div>
                <Button
                  onClick={openModal}
                  variant="outline-light"
                  style={{
                    backgroundImage: 'linear-gradient(to left, #553c9a, #6e528a)',
                    color: 'dark'
                  }}
                >
                  Profile
                </Button>


                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="User Profile"
                  className="custom-modal" // Apply the custom-modal class
                >
                  <User />
                </Modal>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
