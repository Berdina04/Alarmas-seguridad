import alarm from "../../../Images/VideoSurveillanceViewImgs/alarmas.png";

function AlarmsOrVideoRecorder() {
    return (
        <div className="mt-5 mb-5 d-flex justify-content-between flex-wrap">
            <div className="col-md-4 m-auto">
                <img src={alarm} alt="Alarmas" className="img-fluid" />
            </div>
            <div className="col-md-5 m-auto mt-3">
                <h2>Alarma o cámara de videovigilancia</h2>
                <p className="text-secondary">
                    Si te preguntas ¿Qué debo contratar? o ¿Cómo puedo elegir entre una alarma o una cámara de videovigilancia?,
                    Nuestra respuesta es que para contar con un sistema eficaz las alarmas con videovigilancia es la mejor opción,
                    ya que aúna las alertas con la visualización de altercados e incidencias.
                </p>
                <p className="text-secondary">
                    Si deseas contratar un sistema de alarma con videovigilancia por parte de una empresa privada y
                    no tienes claro cuál es mejor por su calidad/ precio contáctanos y reciba asesoramiento gratuito.
                </p>
            </div>
        </div>
    )
}

export default AlarmsOrVideoRecorder;