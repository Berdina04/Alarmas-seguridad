import React from "react";

function Comparative() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h2 className="title mb-4"><b>Alarma para casa</b>, la seguridad de estar protegido</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 mt-4 pt-2">
                        <img src="images/kit-alarma-cra.png" alt="alarmayseguridad" id="alarma-casa" />
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2">
                        <div className="section-title ms-lg-5">
                            <h3 className="title mb-4">¿Cuál es la mejor alarma para casa? </h3>
                            <p className="text-muted text-center">Para contratar debes evaluar diferentes aspectos como los <b>tipos de alarmas</b> existentes y los servicios que incluyen las compañías.<br />
                                Todo lo que debes saber para tu seguridad está aquí.
                            </p>

                            <h3 className="title mb-4">Elige tu alarma sin cuotas o alarma con cuotas</h3>

                            <div className="col mt-4 pt-2" id="tables">
                                <div className="component-wrapper rounded shadow">
                                    <div className="p-4">
                                        <div className="table-responsive bg-white shadow rounded">
                                            <table className="table mb-0 table-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="border-bottom"></th>
                                                        <th scope="col" className="border-bottom">Alarma sin Cuotas</th>
                                                        <th scope="col" className="border-bottom">Alarma con Cuotas</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Pagos mensuales</td>
                                                        <td>No se paga una cuota o mensualidad, el <b>precio de la alarma</b> que paguemos al principio será único.</td>
                                                        <td>Requieren de un <b>pago mensual</b> para contar con los servicios ofrecidos por las diferentes compañias.</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Conexión con CRA</td>
                                                        <td>Son un <b>tipo de alarmas</b> para casa que no están conectados a una <b>Central Receptora de Alarmas</b> o CRA</td>
                                                        <td>Se encuentran conectadas a una <b>central receptora de alarma</b> o CRA monitoreado por la empresa de seguridad privada.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mantenimiento</td>
                                                        <td>No existe un <b>mantenimiento de la alarma</b> periódico de la mano de un experto en seguridad</td>
                                                        <td>La mayoría de las compañías de seguridad para asegurar el funcionamiento optimo del <b> sistema de alarma </b> cuenta con <b>mantenimiento incluido</b>, sin ningún coste extra.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Instalación</td>
                                                        <td>Normalmente, las alarmas vienen con manuales y es <b>el mismo propietario el que tendrá que instalar la alarma</b>.</td>
                                                        <td>La instalación de las alarmas con cuotas, ya sea un sistema de alarmas cableados o inalámbricos, es realizada por los técnicos profesionales enviados por la empresa en la que se ha contratado el servicio.</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comparative