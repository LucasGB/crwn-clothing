import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_CL1nWqg6IA2jH3fRyqKFIGYZ00HdDE4c3C'

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panellabel='Pay Now'
        token={onToken}
        stripekey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;