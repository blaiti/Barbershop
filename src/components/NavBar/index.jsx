import React from 'react';

import './styles.css';
import Logo from '../../assets/images/logo.png';
import Button from '../Button';

function NavBar() {
  return (
    <div className='container'>
      <div className="navbar">
          <img 
            src={Logo}  
            className="logo"
            alt="logo" />

          <div className='navbar-menu'>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
          </div>

          <Button
            text="Book Appointment" />
        </div>

      {/* Responsive */}
      <div className='responsive-navbar'>
          <img src={Logo} alt="logo" className="logo" />
      </div>
    </div>
  );
}

export default NavBar;