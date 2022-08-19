function Footer() {
    return (
        <div className="container mt-3">
            <div className="row justify-content-between flex-wrap">
                <div className="col-lg-2 m-3">
                    <h5 className="orange1">Alarmas&Seguridad</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><span className="text-muted">Es un servicio de alarmasyseguridad.net</span>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 m-3">
                    <h5>Explorar</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Inicio</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tarifa de luz
                            mañana</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Comparar luz y
                            gas</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">¿Que equipos
                            consumen más?</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Energia verde</a>
                        </li>
                        <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contacto</a></li>
                    </ul>
                </div>

                <div className="col-lg-4 m-3">
                    <form>
                        <h5>Suscribite a nuestro servicio.</h5>
                        <p>Recibe en tu correo información sobre alarmas.</p>
                        <div className="d-flex w-100 gap-2">

                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-between py-4 my-4 border-top m-3">
                <p>© 2022 Energystar. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;