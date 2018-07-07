import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-name"></i>Inicio
            </a>    
            <a href="#/users">
                <i className="fa fa-name"></i>Usuarios
            </a>    
        </nav>
    </aside>