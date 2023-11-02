import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const addPaymentGateway = async (req, res) => {
  const { products } = req.body;

  const line_items = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.product.title.shortTitle,
      },
      unit_amount: product.product.price.cost * 100,
    },
    quantity: product.product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cancel`,
  });

  res.json({ id: session.id });
};
