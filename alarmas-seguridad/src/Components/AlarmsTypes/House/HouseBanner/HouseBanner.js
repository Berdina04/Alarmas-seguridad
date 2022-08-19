import alarmaParaCasa from "../../../../Images/AlarmTypesImgs/House/alarma-para-casa.png";

function HouseBanner() {
    return (
        <div className="mb-4 mt-4 rounded d-flex justify-content-between flex-wrap">
            <div className="col-md-6 px-0 mt-auto mb-5">
                <h1 className="display-4 fst-italic">Las 10 mejores alarmas para casa:</h1>
                <p className="lead text-primary">Consúltanos sobre la alarma adecuada a tu hogar</p>
                <p className="lead mb-0 text-secondary"> Solicita tu asesoramiento gratuito</p>
                <div className="input-group mt-3 mb-3">
                    <input type="email" className="form-control col-md-7" placeholder="Email"
                           aria-label="Recipient's username" aria-describedby="button-addon2"
                    />

                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                        Contactenme
                    </button>
                </div>
            </div>
            <div className="col-md-5 px-0 mb-5">
                <img src={alarmaParaCasa} alt="Alarma para casa" className="img-fluid" />
            </div>
        </div>
    )
}

export default HouseBanner;