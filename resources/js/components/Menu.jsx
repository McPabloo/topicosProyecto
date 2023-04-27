import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../../css/menus.css';
import { Link, Outlet, useNavigate} from 'react-router-dom';

function Menu() {

    const navigate=useNavigate();
    function cerrarSesion() {
        // Aquí puedes escribir el código para cerrar la sesión del usuario
        // por ejemplo, eliminando los datos del usuario de localStorage
        localStorage.removeItem('usuarioId');
        window.GlobalUsuarioId = null;
        localStorage.removeItem('tipoUsuario');
        window.GlobalTipoUsuario = null;
        /*
        // Redireccionar a la página de inicio de sesión
        window.location.href = '/electricarNE2/public/Home';
        window.location.reload(); // Agregar esta línea para refrescar la página web
        */
       navigate("/topicos/public/Login");
    }

    return (
        <>
        { (window.GlobalTipoUsuario == null) ? (
        <Navbar className="menus">
            <Container>
                <Navbar.Brand className="nav-title">No logeado</Navbar.Brand>
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
                    <Navbar.Brand className="nav-title" onClick={cerrarSesion}>Salir</Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
        :
        (null)
        }

{ (window.GlobalTipoUsuario == 1) ? (
        <Navbar className="menus">
            <Container>
                <Navbar.Brand className="nav-title">Cliente</Navbar.Brand>
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
                    <Navbar.Brand className="nav-title" onClick={cerrarSesion}>Salir</Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
        :
        (null)
        }

{ (window.GlobalTipoUsuario == 2) ? (
        <Navbar className="menus">
            <Container>
                <Navbar.Brand className="nav-title">Administrador</Navbar.Brand>
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
                    <Navbar.Brand className="nav-title" onClick={cerrarSesion}>Salir</Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
        :
        (null)
        }

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

