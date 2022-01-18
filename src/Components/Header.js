import React from 'react'
import {Link} from "react-router-dom";
import './header.css';
import logo from "../img/ARG negativo_Mesa de trabajo 1.png"

function Header() {
    return (
        <div className='header'>
            <div className='header_flex'>
            <div className='logo'><Link to="/"><img src={logo}></img></Link></div>
            <nav className='nav' id='nav1'>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            </div>
            
        </div>
    )
}

export default Header
