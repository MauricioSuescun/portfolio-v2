// Componente BotonIrArriba.js

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GoUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="fixed bottom-5 left-2/4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <button
        className="p-2 bg-indigo-500 text-white rounded-full focus:outline-none cursor-pointer"
        onClick={scrollToTop}
      >
        &#8679;
      </button>
    </motion.div>
  );
}
