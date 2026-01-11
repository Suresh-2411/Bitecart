import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/register", { name, email, password });
    login(res.data);
    navigate("/");
  };

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="glow-text text-center">Create Account</h2>
      <form className="col-md-4 mx-auto" onSubmit={submitHandler}>
        <input
          className="form-control my-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control my-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn glow-btn w-100">Register</button>
      </form>
    </motion.div>
  );
}
