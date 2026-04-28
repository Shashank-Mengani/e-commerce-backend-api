import Stripe from "stripe";

if (!process.env.STRIPE_KEY) {
  throw new Error("STRIPE_KEY is missing in .env");
}

const stripe = new Stripe(process.env.STRIPE_KEY);

// CREATE PAYMENT
export const createPayment = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json("Amount is required");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.status(200).json(paymentIntent);
  } catch (err) {
    res.status(500).json(err);
  }
};