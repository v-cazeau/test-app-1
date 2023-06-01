import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavMenu() {
    return (
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
         <Container id="navmenu">
            <Navbar.Brand as= {Link} to= "/">Prototype</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link to="/">Home</Nav.Link>
                  <Nav.Link to="/about">About</Nav.Link>
                  <Nav.Link to="/portfolio">Portfolio</Nav.Link>          
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
    );
};