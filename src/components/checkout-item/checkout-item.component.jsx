import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, onDeleteItem, onAddItem, onRemoveItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;

    return (<div>
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => onRemoveItem(cartItem)}>
                    &#10094;
        </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => onAddItem(cartItem)}>
                    &#10095;
        </div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => onDeleteItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    onDeleteItem: item => dispatch(clearItem(item)),
    onAddItem: item => dispatch(addItem(item)),
    onRemoveItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);