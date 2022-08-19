import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Img/alarmas-seguridad.png'

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand  style={styles.img} href="#home">
                    <img
                        alt="alarmas&seguridad"
                        src={logo}
                        width="180"
                        height="25"
                        className="d-inline-block align-top"
                        style={styles.img}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  style={styles.navbarCollapse} className='me-auto justify-content-center'>
                    <Nav>
                        <Nav.Link style={styles.navbarItem} href="#home">Asesoramiento gratis</Nav.Link>
                        <NavDropdown style={styles.navbarItem} title="Tipos de alarmas" className='dropdown'>
                            <NavDropdown.Item style={styles.dropdown} href="#action/3.1">Alarma para casa </NavDropdown.Item>
                            <NavDropdown.Item style={styles.dropdown} href="#action/3.2"> Alarma para negocio</NavDropdown.Item>
                            <NavDropdown.Item style={styles.dropdown} href="#action/3.3">Alarma anti okupas</NavDropdown.Item>
                            <NavDropdown.Item style={styles.dropdown} href="#action/3.3">Alarma sin electricidad</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={styles.navbarItem} href="#link">Camara de videovigilancia</Nav.Link>
                        <Nav.Link style={styles.navbarItem} href="#link">Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const styles = {
    navbarItem: {
        marginLeft: "1.5em",
        color: "#041592"
    },

    navbarCollapse: {
        paddingRight: "7em"
    },

    dropdown: {
        color: "#041592"
    },
  
    // img: {
    //     marginRight: "2em"
    // }
}

export default NavbarComponent;