import { FaCartPlus, FaDeskpro, FaGlobe, FaMobile } from "react-icons/fa";
import PropTypes from "prop-types";

function ServicesCard(props) {
    const { id, serviceName, aboutService } = props;

    function icon() {
        if (id === 1) {
            return (<FaGlobe />)
        } else if (id === 2) {
            return (<FaDeskpro />)
        } else if (id === 3) {
            return (<FaMobile />)
        } else if (id === 4) {
            return (<FaCartPlus />)
        }
    }
    return (
        <div className="services-card">
            <div className="services-icon-div">
                {icon(id)}
            </div>
            <p className="service-name">{serviceName}</p>
            <p className="service-about">{aboutService}</p>
        </div>
    );
}

export default ServicesCard;