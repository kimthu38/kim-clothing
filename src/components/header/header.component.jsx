import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss';
import logo from '../../assets/images/kim-logo.png';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }

        </div>
    </div>
)

export default Header;