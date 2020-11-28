import React from 'react'
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import CartSvg from '../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({ toggleHidden }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <img src={CartSvg} className="shopping-icon" alt="Shoping cart" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);