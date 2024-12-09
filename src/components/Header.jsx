import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={{ background: 'black' }}>
        <Container>
          <Navbar.Brand style={{ color: 'white' }} href="#home">
            Portfolio <i className="fa-regular fa-address-card"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white',color:'white' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link className="btn btn-light rounded text-light" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="btn btn-light rounded text-light" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="btn btn-light rounded text-light" href="#skill">
                Skill
              </Nav.Link>
              <Nav.Link className="btn btn-light rounded text-light" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
