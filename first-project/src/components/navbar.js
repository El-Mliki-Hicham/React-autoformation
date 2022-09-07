import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/About">About</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;