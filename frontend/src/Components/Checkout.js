import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Navbar from './Navbar';

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      // Call API to process payment
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit} style={{backgroundColor:"white", display: "flex", flexDirection: "column"}}>
      <div style={{marginBottom: "16px"}}>
        <label style={{marginBottom: "8px", display: "block"}}>Card details</label>
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe || loading} style={{padding: "16px", backgroundColor: "#ff9900", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"}}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
    </div>
  );
};

export default CheckoutForm;
