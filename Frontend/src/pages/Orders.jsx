import { useEffect, useState } from "react";
import api from "../api/axios";
import Loader from "../components/Loader";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/orders/my").then((res) => {
      setOrders(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2 className="glow-text">My Orders</h2>
      {orders.map((order) => (
        <div className="card bg-dark text-white my-3 p-3" key={order._id}>
          <p>Status: {order.orderStatus}</p>
          <p>Total: RS.{order.totalAmount}</p>
          <p>Items: {order.items.length}</p>
        </div>
      ))}
    </div>
  );
}
