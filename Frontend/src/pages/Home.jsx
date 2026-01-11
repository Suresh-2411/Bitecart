import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import FoodCard from "../components/FoodCard";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.get("/foods").then(res => setFoods(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="glow-text">Today's Special Offers 🔥</h2>
      <input
        className="form-control my-3"
        placeholder="Search food..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {foods
          .filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
          .map(food => (
            <div className="col-md-4 mb-4" key={food._id}>
              <FoodCard food={food} addToCart={addToCart} />
            </div>
          ))}
      </div>
    </div>
  );
}
