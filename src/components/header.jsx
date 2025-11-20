import './header.css'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src='/images/swift_logo.png' alt='Logo'></img>
                <Link to={"/"}>MacroReview</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/bonds"}>Bonds</Link></li>
                <li><Link to={"/fx"}>FX</Link></li>
            </ul>
            <div className="navbar-menu">
                {/* Placeholder for Mobile Menu Icon */}
                <span>&#9776;</span>
            </div>
        </nav>
    )
}

export default Header;