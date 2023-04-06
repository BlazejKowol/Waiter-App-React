import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Col, Container } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar 
            bg="primary"
            variant="dark" 
            collapseOnSelect
            expand="lg"
            className="mt-4 mb-4 rounded">
            <Container xs={12}>
                <Col><Link to={"/"} className="text-white text-decoration-none h6">Waiter.app</Link></Col>
                    <Nav className="me-auto justify-content-end">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
            </Container>  
        </Navbar>
    )
}

export default NavBar;