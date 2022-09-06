import { Container, Nav, Navbar } from 'react-bootstrap/';
import { Link } from 'react-router-dom'
import Form from './Form';
import Home from './Home';
import Users from './Users';

const NavBar = () => {
    return (
        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Checkpoint 2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' element={<Home />}>Home</Link>
              <Link to='/form' element={<Form />}>Formulario</Link>
              <Link to='/users' element={<Users />}>Users</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;