import faq from "../../../Images/VideoSurveillanceViewImgs/faq.png";

function VigilanceCamerasFaq() {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center"> Consultas Generales sobre cámaras de videovigilancia </h2>
            <div className="mt-3 d-flex justify-content-center flex-wrap">
                <div className="m-auto col-lg-6 accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                ¿Quién necesita una cámara de videovigilancia?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    Debido a sus múltiples ventajas las cámaras de videovigilancia son adecuadas
                                    para todo tipo de casas o negocios. Las cámaras de vigilancia son la opción
                                    ideal para proteger tu propiedad porque es la opción que te aporta una mayor
                                    seguridad al poder ver sus imágenes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                ¿Es legal utilizar vídeos como pruebas en España?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    En España no hay una ley que regule la utilización de vídeos como pruebas,
                                    por lo que su utilización está sujeta a la interpretación que se haga de la
                                    legislación en materia de pruebas. En principio, parece que la utilización de
                                    vídeos como pruebas está permitida, siempre que se cumplan las normas generales
                                    sobre pruebas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                ¿Cómo afecta el Reglamento General de Protección de Datos a la videovigilancia?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    El Reglamento General de Protección de Datos entró en vigor el 25 de mayo de
                                    2018 como medida de protección de datos personales. el artículo número 5 del
                                    RGPD establece que los datos de carácter personal recogidos por estas cámaras
                                    de videovigilancia deberán ser utilizado exclusivamente en casos en los que se
                                    establezca que es absolutamente pertinente. El reglamento establece que todo
                                    tipo de dato de carácter personal, entre los cuales se encuadra los que pueden
                                    ser captados por un sistema de videovigilancia, puede ser recogido tras recibir
                                    el consentimiento expreso del usuario y solo durante una cantidad determinada
                                    de tiempo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                ¿Qué es una cámara IP y cuál comprar?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    Las cámaras IP son dispositivos de seguridad de fácil instalación que aportan
                                    muchas ventajas para cualquier tipo de hogar o negocio. Para conocer la mejor
                                    opción contáctanos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                ¿Son seguras las cámaras IP?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>
                                    Puede parecer que al estar conectadas a la red durante las 24 horas del día las
                                    cámaras IP son menos seguras que cualquier otra alarma o servicio de videovigilancia,
                                    pero esto no es así. Las cámaras IP utilizan un protocolo de seguridad para
                                    cifrar sus imágenes y que solo sean accesibles por aquellos usuarios que
                                    introduzcan correctamente la contraseña.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <img src={faq} alt="Preguntas frecuentes" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default VigilanceCamerasFaq;