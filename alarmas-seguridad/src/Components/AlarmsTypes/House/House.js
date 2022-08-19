import HouseBanner     from "./HouseBanner/HouseBanner";
import AlarmsList      from "./AlarmsList/AlarmsList";
import AlarmsCompanies from "./AlarmsCompanies/AlarmsCompanies";
import HouseFaq from "./HouseFaq/HouseFaq";

function House() {
    return (
        <div>
            <HouseBanner />
            <AlarmsList />

            <div className="mt-5 mb-5 d-flex flex-wrap p-4 col-md-7 m-auto bg-call text-white rounded">
                <h2 className="m-auto"> Solicita asesoramiento gratuito y personalizado</h2>
                <button className="btn btn-dark m-auto mt-3">
                    <i className="bi bi-telephone p-2"></i>
                    935565012
                </button>
            </div>

            <AlarmsCompanies />
            <HouseFaq />
        </div>
    )
}

export default House;