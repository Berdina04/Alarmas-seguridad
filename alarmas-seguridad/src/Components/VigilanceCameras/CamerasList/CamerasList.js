import cardExampleImg from "../../../Images/VideoSurveillanceViewImgs/alarmasexample.png";

function CamerasList() {
    return (
        <div className="mt-5">
            <h2 className="text-center"> Principales Cámaras de Videovigilancia del Mercado </h2>
            <div className="row mt-5 justify-content-start">
                <div className="card col-lg-4 border-0">
                    <img src={cardExampleImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title border-top pt-2 h5">Sistema de Cámaras IP</h3>
                        <p className="card-text text-secondary">
                            Estas cámaras funcionan mediante conexión a Internet enviando las imágenes y vídeos
                            captados a un dispositivo móvil asociado con la videocámara. Una cámara de videovigilancia
                            IP se puede comprar de forma libre por un precio aproximado de entre 30 y 120€.
                            Es utilizado por la mayoría de las casas y negocios pequeños.
                        </p>
                    </div>
                </div>
                <div className="card col-lg-4 border-0">
                    <img src={cardExampleImg} className="card-img-top" alt="..." />
                    <div className="card-body text">
                        <h3 className="card-title border-top pt-2 h5">Videovigilancia CCTV</h3>
                        <p className="card-text text-secondary">
                            Estas cámaras trazan un circuito cerrado hasta un monitor en el que se visualizan
                            las imágenes. El monitor puede ser supervisado en tiempo real por un vigilante de
                            seguridad o simplemente servir como guardado de imágenes para poder ser revisadas
                            posteriormente. Para estos tipos de cámaras se debe contratar una cuota mensual,
                            cuyo precio aproximado es de 30 y 90€.
                        </p>
                    </div>
                </div>
                <div className="card col-lg-4 border-0">
                    <img src={cardExampleImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title border-top pt-2 h5">Cámaras de infrarrojos</h3>
                        <p className="card-text text-secondary">
                            Estas cámaras de videovigilancia están provistas de detectores infrarrojos que les
                            hacen funcionar incluso en estancias con luz mínima. Los sensores con infrarrojos se
                            activan cuando detectan movimiento.
                        </p>
                    </div>
                </div>
                <div className="card col-lg-4 border-0">
                    <img src={cardExampleImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title border-top pt-2 h5">Cámaras disuasorias</h3>
                        <p className="card-text text-secondary">
                            Esta opción es la más económica, su precio aproximado es de 5 y 20€.
                            El único objetivo de este tipo de cámara de vigilancia es meramente disuasorio,
                            ya que se trata de un dispositivo falso.
                        </p>
                    </div>
                </div>
                <div className="card col-lg-4 border-0">
                    <img src={cardExampleImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title border-top pt-2 h5">Cámaras exteriores</h3>
                        <p className="card-text text-secondary">
                            Para instalar un sistema de videovigilancia exterior es necesario cerciorarse de que este
                            cumple con los estándares de óptica de la lente y protección del dispositivo que le hagan
                            capaz de trabajar en exteriores.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CamerasList;