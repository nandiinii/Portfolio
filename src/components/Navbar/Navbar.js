import React from 'react';
import styles from "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar__main'>
        <div className='left__content'>
            <a href="/" class="icon-link">
            <span class="icon">NP</span>
            </a>
            <div className='name__content'>
                <div>Nandini P</div>
                <div>Software Developer</div>
            </div>
        </div>
        <div className='navbar__links'>
            <div className='navbar__home'>
                <ul>
            <lu>
                <Link to="/" className='nav__link'>Home</Link>
            </lu>
            </ul>
            </div>
            <div className='navbar__about'>
                <ul>
            <lu>
                <Link to="/about" className='nav__link'>About</Link>
            </lu> 
            </ul> 
            </div>
            <div className='navbar__projects'>
                <ul>
            <lu>
                <Link to="/projects" className='nav__link'>Projects</Link>
            </lu>
            </ul>
            </div>
            <div className='navbar__contact'>
                <ul>
            <lu>
                <Link to="/contact" className='nav__link'>Contact</Link>
            </lu>
            </ul>     
            </div> 
        </div>
    </div>
  )
}

export default Navbar