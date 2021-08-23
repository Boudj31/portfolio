import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation navbar">
                <nav className="menu navbar nav-pills flex-column flex-sm-row">
                <ul>
                    <li className="nav-item">
                        <NavLink to="/" exact className="hover " activeClassName="nav-active">
                            <img src="/img/rb.png" alt="mon logo" width="60"/>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/projets" exact className="hover " activeClassName="nav-active">
                            Projets
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" exact className="hover " activeClassName="nav-active">
                            Compétences
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" exact className="hover " activeClassName="nav-active">
                            A Propos
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" exact className="hover " activeClassName="nav-active">
                            Contact
                        </NavLink>
                    </li>

                </ul>
                </nav>
            </div>
        )
    }
}
