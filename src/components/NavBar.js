import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/hourly">Hourly Forecast</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </nav>
    )
}

export default NavBar;