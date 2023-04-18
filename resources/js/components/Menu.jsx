import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, Outlet } from 'react-router-dom';

function Menu() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link >
                    <Nav.Link as={Link} to="Login">
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="Check">
                        Check
                    </Nav.Link>
                    <Nav.Link as={Link} to="Input">
                        Input
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <section>
            <Container>
                <Outlet>
                </Outlet>
            </Container>
        </section>

        </>
    );
}

export default Menu;

