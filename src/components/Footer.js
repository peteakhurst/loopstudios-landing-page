import React from 'react';
import logo from '../images/logo.svg';
import {GrFacebook} from 'react-icons/gr';
import {FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className='footer-inner'>
                    <div className="logo">
                    <img src={logo} alt="Logo"/>
                    </div>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <ul className="social">
                        <li><GrFacebook /></li>
                        <li><FaTwitter /></li>
                        <li><FaPinterest /></li>
                        <li><FaInstagram /></li>
                    </ul>
                    <div>
                    <div className="copyright">&copy; 2021 Loopstudios. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
