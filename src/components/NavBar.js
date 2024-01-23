import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
        <nav className="nav-bar">
            <NavLink to="/hourly" className={"nav-link"}>Hourly Forecast</NavLink>
            <NavLink to="/" className={"nav-link"}>Current Weather</NavLink>
            <NavLink to="/admin" className={"nav-link"}>Admin</NavLink>
        </nav>
    )
}

export default NavBar;