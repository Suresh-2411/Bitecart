import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Admin() {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    api.get("/foods").then(res => setFoods(res.data));
  }, []);

  const addFood = async () => {
    await api.post("/foods", { name, price: 10 });
    alert("Food Added");
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={addFood}>Add Food</button>

      <ul>
        {foods.map(f => <li key={f._id}>{f.name}</li>)}
      </ul>
    </div>
  );
}
