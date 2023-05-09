import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' id='navbar-toggler-icon'>
      <Container>
        <Navbar.Brand id='brand' href="/">DSA Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link href="/" id='items'>Dashboard</Nav.Link>
            <Nav.Link href="/todolist" id='items'>Goals</Nav.Link>
            <Nav.Link href="https://dsaquestion.netlify.app/" id='items'>Daily Questions</Nav.Link>
            <Nav.Link href="https://dsacompiler.netlify.app/" id='item'>Compiler</Nav.Link>
            <Nav.Link href="https://dsa-tracker-community.onrender.com/" id='item'>Community</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Header;