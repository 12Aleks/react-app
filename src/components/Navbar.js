import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary ">
        <div className="navbar-brand mr-5">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item mr-4">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact={true}
                    >
                    Home
                </NavLink>
            </li>
            <li className="nav-item mr-4">
                <NavLink
                    className="nav-link" to="/about">
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
);