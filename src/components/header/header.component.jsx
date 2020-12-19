import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss';
import logo from '../../assets/images/kim-logo.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { currentUserSelector } from '../../redux/user/user.selector';
import { cartHiddenSelector } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />

        </div>
        {
            hidden ? null :
                <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector
})

export default connect(mapStateToProps)(Header);