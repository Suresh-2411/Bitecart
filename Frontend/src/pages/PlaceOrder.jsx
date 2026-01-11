import api from "../api/axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function PlaceOrder() {
  const { cart } = useContext(CartContext);

  const placeOrder = async () => {
    await api.post("/orders", {
      items: cart,
      total: cart.reduce((s, i) => s + i.price, 0)
    });
    alert("Order placed!");
  };

  return (
    <div className="container mt-4">
      <h2>Confirm Order</h2>
      <button className="btn glow-btn" onClick={placeOrder}>
        Confirm & Pay
      </button>
    </div>
  );
}
