import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkout';

const stripePromise = loadStripe('your_stripe_publishable_key');

const PaymentPage = () => {
  return (
    <div>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    </div>
  );
};

export default PaymentPage;
