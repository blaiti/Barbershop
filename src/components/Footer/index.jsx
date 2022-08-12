import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';


function Footer () {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='col-1'> 
                    <img src={logo} alt="footer-logo"/>
                    <p className='about'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className='col-2'> 
                    <p className='title'>About</p>
                    <ul>
                        <li >
                            <a href="#!">Our story</a>
                        </li>
                        <li>
                            <a href="#!">Careers</a>
                        </li>
                        <li>
                            <a href="#!">Meet the team</a>
                        </li>
                    </ul>
                </div>

                <div className='col-3'> 
                    <p className='title'>Contact</p>
                    <ul>
                        <li><span>Phone:</span> <a href='tel:+33164328888'>+1 484 263 472 9</a></li>
                        <li><span>Email:</span> <a href='mailto:contact@barbershop.com'>contact@barbershop.com</a></li>
                        <li><span>Address:</span> 33 Lindale Avenue Oakland, California</li>
                    </ul>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>Copyright ©{new Date().getFullYear()} <a href='/'>Barbershop</a> - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;