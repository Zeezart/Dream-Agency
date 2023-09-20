import ServicesCard from "./servicesCard";
import services from "./servicesCardList.js";

function Services() {


    const service = services.map(eachService => {
        return (
            <ServicesCard
                key={eachService.id}
                serviceName={eachService.serviceName}
                aboutService={eachService.aboutService}
            />
        )
    })



    return (
        <section id="services">
            <div className="container">
                <div className="services-header">
                    <p className="what-we-do">What We Do</p>
                    <p className="for-your-business">For Your Business</p>
                </div>

                <div className="cards">
                    {service}
                </div>
            </div>
        </section>
    );
}

export default Services;