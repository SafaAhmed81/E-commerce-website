
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Logo + Description */}
                <div className="footer-col">
                    <h2 className="footer-logo"> nORAN Factory </h2>
                    <p>Your one-stop shop for fashion and lifestyle products.</p>
                </div>

                {/* Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/women">Women</Link></li>
                        <li><Link to="/men">Men</Link></li>
                        <li><Link to="/kids">Kids</Link></li>
                    </ul>
                </div>

                {/* Help */}
                <div className="footer-col">
                    <h3>Help</h3>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="socials">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

            </div>

            {/* Bottom */}

        </footer>
    );
}

export default Footer;















