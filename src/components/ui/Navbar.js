import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bd-navbar">
            <div className='container' >
            
                <Link 
                    className="navbar-brand" 
                    to="/ReclutamientoTechLead"
                >
                    <img src={logo} alt='logo'/>
                </Link>

                <div className="navbar-collapse d-flex justify-content-end">
                    <div className="navbar-nav">

                        <NavLink 
                            className={ ( {isActive} ) => 'nav-item nav-link ' + ( isActive && 'active') }  
                            to="/ReclutamientoTechLead"
                        >
                            Home
                        </NavLink>

                        <NavLink 
                            className={ ( {isActive} ) => 'nav-item nav-link ' + ( isActive && 'active') }  
                            to="/pokedex"
                        >
                            Pokédex
                        </NavLink>

                        <NavLink 
                            className={ ( {isActive} ) => 'nav-item nav-link ' + ( isActive && 'active') }  
                            to="/legendaries"
                        >
                            Legendaries
                        </NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}