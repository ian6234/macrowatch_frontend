import './footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>MacroReview</h2>
                    <p></p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Check out my other stuff</h3>
                    <ul>
                        <li><a href="https://github.com/ian6234" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/ian-averre-b86b7b34a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ian Averre</p>
            </div>
        </footer>
    )
}

export default Footer;