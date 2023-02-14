import React from "react";
import "./navbar.css";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Link className="nav-link-title" to={"/"}>
            Home
          </Link>
          <Link className="nav-link-title" to={"/about"}>
            About
          </Link>
          <Link className="nav-link-title" to={"#"}>
            Features
          </Link>
          <Link className="nav-link-title" href="#Blog">
            Blog
          </Link>
          <Link className="nav-link-title" to={"/Contact-us"}>
            Contacts
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
