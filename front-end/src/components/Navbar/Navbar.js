import React from 'react'
import logo from '../../assets/sg3l.jpg'
import './Navbar.scss'

function Navbar() {
    return (
        <nav>
            <div className='nav-container'>
                <img src={logo} alt="logo"/>
                <button className='btnEntrar me-2'>Entrar</button>

            </div>
        </nav>
    )
}

export default Navbar