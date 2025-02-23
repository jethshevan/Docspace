import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { Container, Row, Navbar } from "react-bootstrap";
import "../components/componentsCSS/header.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg">
        <Container fluid>
          <Navbar.Brand className="brand p-1 ps-5">
            <Link className="link" to="/" id="brand-name">
              DocSpace
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            //toggle button
            className="p-1 me-4"
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-lg-auto ms-5 pe-lg-5 ">
              <Nav.Link className="p-1 me-4">
                <Link className="link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="p-1 me-4">
                <Link className="link" to="/doctor">
                  Doctor
                </Link>
              </Nav.Link>
              <Nav.Link className="p-1 me-4">
                <Link className="link" to="book">
                  Book
                </Link>
              </Nav.Link>
              <Nav.Link className="p-1 me-4">
                <Link className="link" to="profile">
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link className="p-1 me-4">
                <Link className="link" to="/login">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
