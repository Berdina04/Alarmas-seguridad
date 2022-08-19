import React from "react";

function Faq () {
    return (
        <>
                <section className="section">
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h2 className="title mb-4">Consultas Frecuentes</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item rounded shadow">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="false" aria-controls="collapseOne">
                                            ¿Cuáles son los componentes básicos de una alarma?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse border-0 collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Actualmente existen una gran variedad de <b>sistemas de alarmas</b>, desde lo más básico hasta lo más complejo que pueden incorporar últimas tecnologías como la biometría.</p>
                                            <p>Componentes de un sistema de alarma:</p>
                                            <ul className="list-unstyled mb-0 ps-0">
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Centralita:</b> puede o no incluir el teclado, es la que controla y recibe señales de todos los demás dispositivos, además envía alertas a la CRA o al dispositivo móvil del propietario en caso de intrusión. </li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detectores de movimiento simple:</b> incorporan sensores infrarrojos, microondas o los dos a la vez, y detecta la presencia de un intruso al detectar su movimiento. En ese momento emite una señal a la centralita y la activa si no esta desconectada.</li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detectores de movimiento con cámara incluida:</b> pueden estar dotados con cámaras con infrarrojos para visión nocturna. Sacan automáticamente imágenes y las envía a la centralita, a la CRA y al dispositivo móvil.</li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detectores de apertura:</b>  se aplican a las puertas y a las ventanas. Se componen de dos piezas magnéticas que, al separarse, cuando las puertas se abren, activan la alarma.</li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detectores de rotura de cristales:</b> los detectores se pegan a los cristales y activan la alarma cuando detectan vibraciones.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            ¿Cómo contrato una alarma para casa?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Las alarmas para casa se contratan a través de empresas de seguridad especializadas. Para determinar cual es el mejor sistema de alarma para tu vivienda o negocio debes realizar un estudio de seguridad, revisar los diferentes presupuestos de alarma para casa y firmar los contratos correspondientes para llevar a cabo la instalación de la alarma.</p> <p>Comunícate al <a href="tel:+349355655012" className="sub-menu-item">9355655012</a> para recibir un <b>asesoramiento completo, gratuito y personalizado</b>.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ¿Qué tipos de alarmas hay disponible?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Las alarmas pueden clasificarse por sus características, uso y funcionalidades: </p>
                                            <b>Según el tipo de propiedad:</b> <a href="alarma-para-casa.html" target="_blank">alarmas para casa</a> o <a href="alarma-para-negocio.html" target="_blank">alarmas para negocios</a> .<br />
                                            <b>Según la instalación:</b> alarmas inalámbricas o alarmas cableadas.<br />
                                            <b>Según el precio:</b> alarma con cuotas o alarma sin cuota. <br />
                                            <b>Según el grado de seguridad:</b> se clasifican en alarmas de grado 1, grado 2, grado 4 y grado 4.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            ¿Es mejor una alarma para casa con cuotas o sin cuotas?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse border-0 collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>La principal diferencia entre una alarma para casa con cuotas y sin cuotas es que la primera está conectada a una Central Receptora de Alarmas. Esto implica que, si sucede algo en tu hogar, se avisará a la policía inmediatamente.</p>
                                            <p>Por el otro lado, el punto fuerte de las alarmas para casa sin cuotas es que no necesitas pagar mensualmente por ellas, pero no disponen de aviso directo a la policía.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingfive">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                            ¿Qué debe tener en cuenta para contratar una alarma anti okupa?
                                        </button>
                                    </h2>
                                    <div id="collapsefive" className="accordion-collapse border-0 collapse" aria-labelledby="headingfive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Para contratar una alarma anti okupa debes saber que las alarmas sin cuotas no protegen contra una ocupación.
                                                Las alarmas que si permiten el desalojo inmediato de los okupas son las que se contratan por medio de una empresa de seguridad.</p>
                                            Es necesario conocer cuales son los accesorios de alarma anti okupa mas efectivos:
                                            <ul className="list-unstyled mb-0 ps-0">
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Videovigilancia:</b> es el mejor método contra la ocupación, dado que podrás contar con un testimonio verídico de que ha habido allanamiento. </li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detector de movimiento:</b>  Está conectado con el panel de control de la alarma que las envía a la CRA y se activa con el movimiento.</li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detector magnético:</b>  Los detectores magnéticos se colocan en puertas y ventanas y detectan cualquier apertura o vibración fuerte.</li>
                                                <li className="h6 text-muted mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span><b>Detector perimetral:</b> los detectores perimetrales se colocan en el exterior de las propiedades, este tipo de sensor detecta cualquier movimiento que se den en la zona externa, lo que permite anticiparse a la ocupación y solucionar el problema antes incluso de que ocurra el allanamiento</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingsix">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                            ¿Se puede ocupar una casa con alarma?
                                        </button>
                                    </h2>
                                    <div id="collapsesix" className="accordion-collapse border-0 collapse" aria-labelledby="headingsix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Tener instalada un sistema de alarma y señalizarlo en la fachada con un cartel de alarma para hacerlo evidente suponen de por sí un método disuasorio que desanimará a la mayoría de los okupas.</p>
                                            <p>Si incluso señalizando que existe un sistema de alarma los okupas deciden allanar nuestra propiedad, por el simple hecho de contar con una alarma, el método de desalojo será mucho más sencillo.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingseven">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                            ¿Qué es el CRA?
                                        </button>
                                    </h2>
                                    <div id="collapseseven" className="accordion-collapse border-0 collapse" aria-labelledby="headingseven"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>La CRA (Central Receptora de Alarmas) o central de monitoreo es la sede de control de los sistemas de alarma y se encarga de recibir y analizar los saltos de alarma que recibe.</p>
                                            <p>La CRA es un elemento clave de los sistemas de <a href="alarma-para-casa.html" target="_blank">alarma para casa</a>.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingeight">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                            ¿Debo tener electricidad para contratar una alarma?
                                        </button>
                                    </h2>
                                    <div id="collapseeight" className="accordion-collapse border-0 collapse" aria-labelledby="headingeight"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Buena parte de las <a href="#" target="blank">alarmas inalámbricas están diseñadas para funcionar sin electricidad</a>. Su fuente de alimentación es una batería interna. En este sentido, basta con que el usuario coloque en la pared (o donde prefiera) las terminales del sistema para que comience a funcionar. </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingnine">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                            ¿Necesito internet para contratar una alarma?
                                        </button>
                                    </h2>
                                    <div id="collapsenine" className="accordion-collapse border-0 collapse" aria-labelledby="headingnine"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>No debes contar internet para instalar una alarma para casa o alarma para negocio.  La alarma no necesita internet, ya que conecta mediante una SIM propia en donde se conecta y comunica con la CRA y el usuario. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item rounded shadow mt-2">
                                    <h2 className="accordion-header" id="headingten">
                                        <button className="accordion-button border-0 bg-light collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                            ¿Qué es un inhibidor de frecuencia y cómo funciona?
                                        </button>
                                    </h2>
                                    <div id="collapsenten" className="accordion-collapse border-0 collapse" aria-labelledby="headingten"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-muted bg-white">
                                            <p>Son unos dispositivos electrónicos que mediante la emisión de una señal anulan la frecuencia de las alarmas de tal manera que evitan o interrumpen la comunicación entre los sensores de la alarma y la centralita</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <img src="images/illustrator/faq.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row mt-5 pt-4 justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <h2 className="title mb-4">Descubra la mejor alarma que se adapte a ti</h2>
                                <p className="text-muted para-desc mx-auto">Pida su asesoramiento <span className="text-primary fw-bold">COMPLETO</span>, <span className="text-primary fw-bold" >GRATUITO</span> y <span className="text-primary fw-bold" >PERSONALIZADO</span>.</p>
                                <a href="tel:+349355655012" className="btn btn-primary mt-4"><i className="mdi mdi-phone"></i>9355655012</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq