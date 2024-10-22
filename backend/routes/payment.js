const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/payment', auth, async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount, // Amount in cents
            currency: 'usd',
            receipt_email: req.user.email,
        });
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
