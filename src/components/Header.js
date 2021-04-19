import React from 'react';
import Logo from '../images/logo.svg';

const Header = () => {

    const showNav = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const navbar = document.querySelector('nav');
            navbar.classList.toggle('open');
            menuBtn.classList.toggle('rotate');
    }

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt="Loopstudios"/>
                </div>
                <nav>
                <div className="nav-logo">
                    <img src={Logo} alt="Logo"></img>
                </div>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </nav>
                <div className="menu-btn" onClick={showNav}>
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                </div>
            </header>
           
        </div>
    )
}

export default Header
