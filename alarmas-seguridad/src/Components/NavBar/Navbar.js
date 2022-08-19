import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarC() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://es.m.wikipedia.org/wiki/Archivo:Google_2015_logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='me-auto justify-content-center'>
                    <Nav>
                        <Nav.Link href="#">Asesoramiento gratis</Nav.Link>
                        <NavDropdown title="Tipos de alarmas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/alarmas/paracasa">Alarma para casa </NavDropdown.Item>
                            <NavDropdown.Item href="/alarmas/negocio"> Alarma para negocio</NavDropdown.Item>
                            <NavDropdown.Item href="/alarmas/antiokupas">Alarma anti okupas</NavDropdown.Item>
                            <NavDropdown.Item href="/alarmas/sinelectricidad">Alarma sin electricidad</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/videovigilancia">Camara de videovigilancia</Nav.Link>
                        <Nav.Link href="/contacto">Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarC;