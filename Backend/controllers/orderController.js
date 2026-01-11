import Order from "../models/Order.js";
//import stripe from "../config/stripe.js";

// export const placeOrder = async (req, res) => {
//   const order = await Order.create({
//     user: req.user._id,
//     items: req.body.items,
//     totalAmount: req.body.total
//   });
//   res.json(order);
// };

export const placeOrder = async (req, res) => {
  if (!req.body.items || req.body.items.length === 0) {
    return res.status(400).json("Cart is empty");
  }

  const order = await Order.create({
    user: req.user._id,
    items: req.body.items,
    totalAmount: req.body.total
  });

  res.json(order);
};


export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// export const updateOrderStatus = async (req, res) => {
//   const order = await Order.findByIdAndUpdate(
//     req.params.id,
//     { orderStatus: req.body.status },
//     { new: true }
//   );
//   res.json(order);
// };

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { orderStatus: req.body.status },
    { new: true }
  );
  res.json(order);
};


export const stripePayment = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount * 100,
    currency: "usd"
  });
  res.json({ clientSecret: paymentIntent.client_secret });
};
