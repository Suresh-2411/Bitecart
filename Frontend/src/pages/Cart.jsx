import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item._id} className="d-flex justify-content-between">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item._id)}>❌</button>
        </div>
      ))}
      <h4>Total: ${total}</h4>
      <Link to="/place-order" className="btn glow-btn">Place Order</Link>
    </div>
  );
}
