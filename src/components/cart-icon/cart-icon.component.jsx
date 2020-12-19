import React from 'react'
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import CartSvg from '../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { totalItemsSelector } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleHidden, itemsCount }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <img src={CartSvg} className="shopping-icon" alt="Shoping cart" />
        <span className="item-count">{itemsCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemsCount: totalItemsSelector
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);