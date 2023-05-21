
var Publishable_Key = 'pk_test_51MyrxBSEdDmzp08gpUyai4Rw8yAonwTQQ704MMEYNEqNuVRah0QCgkNJ0ZQPICXqDt9MojnKYNk0w7UdRYBFZFtz001DjQRl8v'
var Secret_Key = 'sk_test_51MyrxBSEdDmzp08govHAbAgUQzzK7dIwtrHxQQc7G2qEiXhIxP2F1zVTCr1cby99Rc48EyJavWnCAvwSr506uh3l00Zn4SC4bk'

import stripe from 'stripe';
const stripeInstance = stripe(Secret_Key);



const paymentController = async (req, res) => {

    console.log(req.body)
    const data = req.body
    // Create a PaymentMethod with the provided card details
    const paymentMethod = await stripeInstance.paymentMethods.create({
        type: 'card',
        card: {
            number: data.card.number,
            exp_month: data.card.exp_month,
            exp_year: data.card.exp_year,
            cvc: data.card.cvv,
        },
    });

    // Create a Customer and associate the PaymentMethod with the Customer
    stripeInstance.customers.create({
        payment_method: paymentMethod.id,
        email: data.email,
    }).then(async (customer) => {

        // Create a PaymentIntent with the Customer
        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: data.amount, // Charging Rs 25
            currency: 'INR',
            customer: customer.id,
            payment_method: paymentMethod.id,
            off_session: true,
            confirm: true,
        });

        console.log("payment intent :", paymentIntent)
    }).then((charge) => {
        res.send("Success")  // If no error occurs
    })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });
};


export default paymentController