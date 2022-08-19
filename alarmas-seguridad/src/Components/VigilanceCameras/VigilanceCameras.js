import VigilanceCamerasBanner   from "./VigilanceCamerasBanner/VigilanceCamerasBanner";
import VigilanceCamerasFeatures from "./VigilanceCamerasCaracteristics/VigilanceCamerasFeatures";
import AlarmsOrVideoRecorder    from "./AlarmsOrVideoRecorder/AlarmsOrVideoRecorder";
import CamerasList              from "./CamerasList/CamerasList";
import VigilanceCamerasFaq      from "./VigilanceCamerasFaq/VigilanceCamerasFaq";

import "./VigilanceCamerasStyles.css";

const VigilanceCameras = () => {
    return (
        <div>
            <VigilanceCamerasBanner />
            <VigilanceCamerasFeatures />
            <AlarmsOrVideoRecorder />

            <div className="d-flex flex-wrap p-4 col-md-7 m-auto bg-call text-white rounded">
                <h2 className="m-auto"> Solicita asesoramiento gratuito y personalizado</h2>
                <button className="btn btn-dark m-auto mt-3">
                    <i className="bi bi-telephone p-2"></i>
                    935565012
                </button>
            </div>

            <CamerasList />
            <VigilanceCamerasFaq />
        </div>
    )
}

export default VigilanceCameras;