import React, { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('testkey1');

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const createPaymentIntent = async () => {
            const response = await axios.post('/api/payment', { amount: 5000 });
            setClientSecret(response.data.clientSecret);
        };

        createPaymentIntent();
    }, []);

    const handlePayment = async () => {
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            clientReferenceId: 'YOUR_CLIENT_REFERENCE_ID',
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
        }
    };

    return (
        <Box>
            <Button onClick={handlePayment}>Pay</Button>
            {error && <div>{error}</div>}
            {success && <div>Payment Successful!</div>}
        </Box>
    );
};

export default Checkout;
