import React from "react";
import logo from '../../Img/hero-adt.jpg'
import logo2 from '../../Img/mujer-alarma.jpg'

const Carousel = () => {
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={logo} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 class="heading mb-3 text-center">El mejor sistema de <span class="text-primary">alarma para casa o negocio</span></h1>
                        <h1 style={styles.title} class="para-desc text-muted text-center">Solicita tu asesoramiento gratuito</h1>

                        <form style={styles.form} >
                            <div class="row justify-content-md-center">
                                <div class="col-md-4">
                                    <div>
                                        <div class="form-icon position-relative">
                                            <i data-feather="phone" class="fea icon-sm icons"></i>
                                            <input name="name" id="name" type="text" class="form-control sm" placeholder="Telefono de contacto: " />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12" style={styles.button}>
                                    <input type="submit" id="submit" name="send" class="btn btn-primary" value="Quiero Ser Contactado" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={logo2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
}


const styles = {
    section: {
        margin: "5em"
    },
    title: {
        fontSize: "1.em"
    },
    form: {
        margin: "3em"
    },
    button: {
        marginTop: "2em"
    },
    info: {
        margin: '3em'
    }
}
export default Carousel;