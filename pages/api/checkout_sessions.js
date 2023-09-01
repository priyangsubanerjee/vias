import connectDatabase from "@/db/dbConnect";
import orders from "@/db/models/orders";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  await connectDatabase();
  const {
    cart,
    address,
    coupon_obj,
    placedBy_email,
    placedBy_name,
    totalAmount,
  } = req.body;

  let orderNumber = uuidv4().toString();
  let shippingNumber = "VIAS-" + uuidv4().toString();

  let formattedCart = [];
  let formattedDiscounts = [];

  if (coupon_obj != null) {
    formattedDiscounts.push({
      coupon: coupon_obj.id,
    });
  }

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
        discounts: [...formattedDiscounts],
        payment_method_types: ["card"],
        customer_email: placedBy_email,
        line_items: [...formattedCart],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });

      if (session.id) {
        const order_ = new orders({
          orderNumber,
          orderedItems: JSON.parse(JSON.stringify(cart)),
          coupounsApplied: [coupon_obj],
          totalAmount,
          shippingNumber,
          shippingDetails: JSON.parse(JSON.stringify(address)),
          placedBy_email,
          placedBy_name,
          checkoutSessionId: session.id,
        });

        await order_.save();
      }

      res
        .status(200)
        .json({ sessionId: session.id, orderNumber, shippingNumber });
    } catch (err) {
      res.status(500).json({ error: "Error creating checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
