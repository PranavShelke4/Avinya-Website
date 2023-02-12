import React from "react";
import "./navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
function navbar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="90"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <Nav.Link className="nav-link-title" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link-title" href="#About">
            About
          </Nav.Link>
          <Nav.Link className="nav-link-title" href="#Features">
            Features
          </Nav.Link>
          <Nav.Link className="nav-link-title" href="#Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="nav-link-title" href="#Contact-us">
            Contacts
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
