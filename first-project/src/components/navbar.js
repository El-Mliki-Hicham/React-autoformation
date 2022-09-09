import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
            <NavLink to='/'>Home</NavLink><br></br>
            <NavLink to="/Persons">Person</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;