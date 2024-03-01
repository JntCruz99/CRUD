import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/cadastro">Cadastro</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/usuarios">Usuarios</NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
