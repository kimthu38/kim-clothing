import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButon from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item =>
                    <CartItem key={item.id} item={item} />
                )
            }
        </div>

        <CustomButon>GO TO CHECKOUT</CustomButon>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);