import * as React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaPlus } from "react-icons/fa";
import { GoPerson } from "react-icons/go";


const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className="navbar navbar-light bg-primary fixed-bottom d-flex justify-content-around align-items-center">
            <NavLink exact to="/" activeClassName="btn btn-lg btn-secondary mx-1 text-white" className="btn btn-outline-secondary mx-1" >
                <FaHome />
            </NavLink>
            <NavLink exact to="/compose" activeClassName="btn btn-lg btn-secondary mx-1 text-white" className="btn btn-outline-secondary mx-1" >
                <FaPlus />
            </NavLink>
            <NavLink exact to="/profile" activeClassName="btn btn-lg btn-secondary mx-1 text-white" className="btn btn-outline-secondary mx-1" >
                <GoPerson />
            </NavLink>
            <NavLink exact to="/compose" activeClassName="btn btn-lg btn-secondary mx-1 text-white" className="btn btn-outline-secondary mx-1" >
                <FaPlus />
            </NavLink>
        </nav>
    )
}

interface NavBarProps { }

export default NavBar