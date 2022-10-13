import React from "react";
import "./NavBar.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Company = {
  name: "GMC E-Commerce",
  Category1: "For Men",
  Category2: "For Women",
  CompLogo:
    "https://cdn.discordapp.com/attachments/1006195202031112313/1030142349491322930/gmc_logo.png",
};

const NavBar = () => {
  return (
    <div className="header-nav">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              style={{ height: "100px" }}
              src={Company.CompLogo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">{Company.name}</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  {Company.Category1}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  {Company.Category2}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">For Childs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Contact US
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
