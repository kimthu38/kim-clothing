import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutButton from '../../components/checkout-button/checkout-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { cartItemsSelector, totalPriceSelector } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Name</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => (
                <CheckoutItem cartItem={item} key={item.id} />
            ))
        }

        <div className='total'>TOTAL: ${total}</div>

        <CheckoutButton amount={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    total: totalPriceSelector
})

export default connect(mapStateToProps)(CheckoutPage);