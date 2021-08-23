import React, {Component, useState} from "react";

import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {NavLink} from "react-router-dom";


const Navtest =() => {

        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        return (
            <div className="header">
                <div className="logo-nav">
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/" exact className="hover " activeClassName="nav-active">
                               Home
                            </NavLink>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/projets" exact className="hover " activeClassName="nav-active">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/skills" exact className="hover " activeClassName="nav-active">
                                Compétences
                            </NavLink>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/about" exact className="hover " activeClassName="nav-active">
                                Qui suis je ?
                            </NavLink>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/contact" exact className="hover " activeClassName="nav-active">
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseMenu className="menu-icon" />
                    ) : (
                        <MenuIcon className="menu-icon" />
                    )}
                </div>
            </div>
        )
}

export default Navtest;