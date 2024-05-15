import React from 'react';
import logo from './assets/devchuli.png';

const Navbar = ({ toggleMenu, showMenu }) => {
    return (
        <nav style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Toggle Button for Mobile */}
                    <div style={{ cursor: 'pointer', marginRight: '20px', fontSize: '24px', display: 'none' }} onClick={toggleMenu}>
                        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    {/* Navigation Links */}
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
                        <li style={{ marginRight: '20px', transition: 'color 0.3s ease',fontWeight: 'bold',fontSize: '20px' }}><a href="/" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Home</a></li>
                        <li style={{ marginRight: '20px', transition: 'color 0.3s ease',fontWeight: 'bold',fontSize: '20px' }}><a href="/about" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>About</a></li>
                        <li style={{ marginRight: '20px', transition: 'color 0.3s ease',fontWeight: 'bold',fontSize: '20px' }}><a href="/contact" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Contact</a></li>
                        <li style={{ marginRight: '20px', transition: 'color 0.3s ease',fontWeight: 'bold',fontSize: '20px' }}><a href="/services" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s ease' }}>Services</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
