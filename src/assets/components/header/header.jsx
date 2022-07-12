import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../images/Logo.png";
import { IoIosWallet } from "react-icons/io";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className=".5rem">
          <img src={Logo} alt="Logo" className="w-100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navItem">
            <Nav.Link className="fw-bold text-white" href="#home">
              $Moviestoken
            </Nav.Link>
            <Nav.Link className="fw-bold text-white" href="#link">
              Tokenomics
            </Nav.Link>
            <Nav.Link className="fw-bold text-white" href="#link">
              Roadmap
            </Nav.Link>
            <Nav.Link className="fw-bold text-white" href="#link">
              Our team
            </Nav.Link>
            <Nav.Link className="fw-bold text-white" href="#link">
              Litepaper
            </Nav.Link>
            {/* <NavDropdown
              className="fw-bold text-white"
              title="Buy Token"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Button
              className="fw-bold text-white d-flex gap-2"
              variant="outline-warning rounded-pill"
            >
              <IoIosWallet fontSize="1.3rem" /> Connect Wallet
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
