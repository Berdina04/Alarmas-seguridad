import React from "react";
import Faq from "./Faq";
import Comparative from "./Comparative";
import Companies from "./Companies";

function Home() {
    return (
        <>

            <section className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="title-heading me-lg-4">
                                <h1 className="heading mb-3 text-center">El mejor sistema de <span className="text-primary">alarma para casa o negocio</span></h1>
                                <p className="para-desc text-muted text-center">Solicita tu asesoramiento gratuito</p>
                                <div className="mt-4">
                                    <form>
                                        <div className="row text-center">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <div className="form-icon position-relative">
                                                        <i data-feather="phone" className="fea icon-sm icons"></i>
                                                        <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Telefono de contacto: " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="submit" id="submit" name="send" className="btn btn-primary" value="Quiero Ser Contactado" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0" id="hero">
                            <img src="images/home.webp" alt="alarmas-para-casa" id="hero" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="section bg-light border-bottom">

                <Comparative />
                <Companies />
            </section>


            <Faq />

            <div className="position-relative">
                <div className="shape overflow-hidden text-footer" id="shape-footer">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-py-60">
                                <div className="row">
                                    <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                        <a href="hola" className="logo-footer">
                                            <img src="images/alarmas-seguridad-white.png" height="24" alt="alarma-y-seguridad" />
                                        </a>
                                        <p className="mt-4">La mejor opción es tu seguridad</p>
                                        <p><a href="alarma-para-casa.html" target="_blank">#Alarmasparacasa</a> <a href="alarma-para-negocio.html" target="_blank">#Alarmasparanegocios</a> <a href="alarma-anti-okupas.html" target="_blank">#Alarmasantiokupas</a></p>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-4 pt-sm-0">
                                        <h5 className="footer-head">Asesoramiento Gratuito</h5>
                                        <ul className="list-unstyled footer-list mt-4">
                                            <li><a href="tel:+349355655012" className="text-white"><i className="uil uil-angle-right-b me-1"></i> 9355655012</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )




}
export default Home