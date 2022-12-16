import React, { useContext } from 'react';
import { useState } from 'react';
import logo from '../../images/Logo.svg';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Header = () => {
    const { user,setUser, logoutUser } = useContext(AuthContext);
    console.log(user);

    const logOut = () => {
        logoutUser()
            .then(() => {
                // setUser();
            })
            .catch(err => {
            console.log(err)
        })
    }
 
    const Menu = () => (
        <>
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            {
                user?.uid ? <Link onClick={logOut} to="/login">Log Out</Link> : <> <Link to="/login">Log In</Link>  <Link to="/register">Register</Link> </>
            }
            
            </>
    )
        
    
    const [menu, setMenu] = useState(false);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            {
                user?.uid && <span className="welcome"><small>Welcome, {user.email} </small></span> 
            }
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