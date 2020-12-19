import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButon from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { cartItemsSelector } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(item =>
                        <CartItem key={item.id} item={item} />
                    )
                }
            </div>

            <CustomButon onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CustomButon>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropdown));