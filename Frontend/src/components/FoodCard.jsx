import { motion } from "framer-motion";

export default function FoodCard({ food, addToCart }) {
  return (
    <motion.div
      className="card food-card"
      whileHover={{ scale: 1.05 }}
    >
      <img src={food.image} className="card-img-top" />
      <div className="card-body">
        <h5>{food.name}</h5>
        <p>${food.price}</p>
        <button
          className="btn glow-btn w-100"
          onClick={() => addToCart(food)}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
