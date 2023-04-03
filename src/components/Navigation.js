import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
//import logo from 'C:/Users/lenovo/Resume-Builder/public/images/logo.png'

function Navigation() {
  return (
    <Navbar bg="primary" variant="primary" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          {/* {logo} */}
          <NavLink to="/" className="text-decoration-none text-white">Resume Builder</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="mx-2 text-decoration-none text-white">Home</NavLink>
          <NavLink to="#" className="mx-2 text-decoration-none text-white">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
