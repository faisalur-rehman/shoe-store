import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div>
        <h1>Welcome to our E-Shoe Store</h1>
      </div>
    </motion.div>
  );
};

export default Home;
