// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar className='p-2' bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Course App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
          <Nav.Link as={Link} to="/enquiries">Enquiries</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
