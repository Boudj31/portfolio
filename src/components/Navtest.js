import React, {Component, useState} from "react";

import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {ThemeProvider} from "styled-components";
import {NavLink} from "react-router-dom";
import Toggle from "./Toogler";
import {useDarkMode} from "./useDarkMode";
import {darkTheme, lightTheme} from "./Themes";
import {GlobalStyles} from "./GlobalStyles";


const Navtest =() => {

        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);
        const [theme, themeToggler, mountedComponent] = useDarkMode();
        const themeMode = theme === 'light' ? lightTheme: darkTheme;

        if(!mountedComponent) return <div/>



        return (
            <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div className="header">
                <div className="logo-nav">
                    <Toggle theme={theme} toggleTheme={themeToggler} />
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
            </ThemeProvider>
        )
}

export default Navtest;