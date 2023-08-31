import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  await connectDatabase();

  const { cart, address } = req.body;

  let formattedCart = [];

  cart.forEach((item, index) => {
    formattedCart.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.discountedPrice * 100,
      },
      quantity: item.quantity,
    });
  });

  formattedCart.push({
    price_data: {
      currency: "usd",
      product_data: {
        name: "Shipping",
      },
      unit_amount: 7.5 * 100,
    },
    quantity: 1,
  });

  formattedCart = JSON.parse(JSON.stringify(formattedCart));

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        // add goole pay and apple pay here later
        payment_method_types: ["card", "giropay"],
        line_items: [...formattedCart],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });

      //   const user_ = new users({
      //     name: "test",
      //     credential: "test",
      //     password: "test",
      //     email: "test",
      //     phone: session.id,
      //   });

      //   await user_.save();

      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(500).json({ error: "Error creating checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
