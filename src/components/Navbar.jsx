import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo/1.png';
import '../dist/Files/comp.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light sticky-top p-0'>
      <div className='container-fluid'>
        <div className='container logo-container'>
          <Link className='nav-link ' to='/home'>
            <img
              className='logo'
              src={logo}
              alt='logo'
              width='50'
              height='50'
            />
          </Link>
        </div>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav fs-5 text-uppercase'>
            <li className='nav-item me-4'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item me-4'>
              <Link className='nav-link' to='/add'>
                New-Product
              </Link>
            </li>
            <li className='nav-item me-4'>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About-Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
