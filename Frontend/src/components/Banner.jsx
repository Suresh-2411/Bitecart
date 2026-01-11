import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      className="banner text-center text-white"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="glow-text">Delicious Food, Delivered Fast 🚀</h1>
      <p className="mt-3">Premium restaurants • Exclusive offers • Fast delivery</p>
      <button className="btn glow-btn mt-4">Order Now</button>
    </motion.div>
  );
}
