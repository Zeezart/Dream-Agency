import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <a href="" className="active">Home</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Contact Us</a>
            </nav>

            <h2>Dream Agency</h2>

            <div className="socials">
                <div className="social-icon">
                    <FaFacebookF />
                </div>

                <div className="social-icon">
                    <FaLinkedinIn />
                </div>

                <div className="social-icon">
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
}

export default Navbar;