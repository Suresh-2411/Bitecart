import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar navbar-dark bg-dark px-4"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
    >
      <Link className="navbar-brand glow-text" to="/">Foodify</Link>
      <div>
        <Link className="btn glow-btn mx-2" to="/cart">Cart</Link>
        <Link className="btn glow-btn mx-2" to="/login">Login</Link>
      </div>
    </motion.nav>
  );
}
