import React from 'react';
import { useState } from 'react';
import logo from '../../images/Logo.svg';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const Menu = () => (
        <>
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
            </>
    )
        
    
    const [menu, setMenu] = useState(false);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu">
            <Menu/>
            </div>
            <div className="menu-bar">
            {
                menu ? <RiCloseLine color="fff" onClick={() => setMenu(false)} /> : 
                    <RiMenu3Line color="fff" onClick={() => setMenu(true)} />
                }
                {
                    menu && (
                        <div className="menu-bar__block">
                            <Menu/>
                        </div>
                    )
                }
            </div>
        </nav>
    );
};

export default Header;