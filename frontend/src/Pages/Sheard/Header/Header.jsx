import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../../../Context/AuthProvider";

const Header = () => {
  const { user, logout } = useAuth();
  const handelLogout = () => {
    logout();
  };
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home#home">
            Genius Car Mechanics
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#experts">
                Experts
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              {user?.email ? (
                <>
                  <span>Signed in as: {user?.displayName}</span>
                  <button onClick={handelLogout} className="px-2 py-1 mx-2">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
