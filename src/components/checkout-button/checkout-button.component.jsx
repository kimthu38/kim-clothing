import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './checkout-button.styles.scss'

export default class CheckoutButton extends React.Component {
    onToken = (token) => {
       console.log(token); 
    }

    render() {
        const { amount } = this.props;
        const stripeKey = 'pk_test_51I27N8HmeuFpInB5MZ0Gs1OrFgSdFAAxEYG27Oyrja5rR69loB1xJeqxqqm7lPqXZlzz74DRovdKk15RLAyW8U2000AzMnsSEe';
        return (
            // ...
            <StripeCheckout
                name="Kim Clothing" // the pop-in header title
                label="Pay now"
                description={`Your total is $${amount}`}
                token={this.onToken}
                stripeKey={stripeKey}
                amount={amount * 100}
                currency="USD"
            />
        )
    }
}