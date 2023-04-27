import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../../css/menus.css';
import { Link, Outlet } from 'react-router-dom';

function Menu() {
    return (
        <>
        <Navbar className="menus">
            <Container>
                <Navbar.Brand className="nav-title">Navbar</Navbar.Brand>
                <Navbar.Brand className="nav-title" as={Link} to="Login">eDealerOnline</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="nav-title" as={Link} to="Login">
                        Historial de Ventas
                    </Nav.Link>
                    <Nav.Link className="nav-title" as={Link} to="Check">
                        Historial de Compras
                    </Nav.Link>
                    <Nav.Link className="nav-title" as={Link} to="Input">
                        Inventario
                    </Nav.Link>
                    <Nav.Link className="nav-title" as={Link} to="Input">
                        Perfil
                    </Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand className="nav-title" as={Link} to="Login">Salir</Navbar.Brand>
                </Navbar.Collapse>
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

