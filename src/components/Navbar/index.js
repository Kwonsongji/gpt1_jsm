import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './style.css';

// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt1__navbar'>
      <div className="gpt1__navbar-links">
        <div className="gpt1__navbar-links_logo">
        <img src={logo} alt="logo" />
     </div>
     </div>
    </div>
  )
}

export default Navbar;