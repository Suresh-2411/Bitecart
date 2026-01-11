import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
}
