import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/hourly" className={"nav-link"}>Hourly Forecast</NavLink>
            <NavLink to="/" className={"nav-link"}>Current Weather</NavLink>
            <NavLink to="/admin" className={"nav-link"}>Admin</NavLink>
        </nav>
    )
}

export default NavBar;