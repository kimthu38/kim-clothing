import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss';
import logo from '../../assets/images/kim-logo.png';

const Header = ()=> (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={logo} alt="Logo" /> 
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            <Link className="option" to="/shop">CART</Link>

        </div>
    </div>
)

export default Header;