import React from "react";
import { motion, useScroll } from "framer-motion";

const IconBar = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-black">
      <svg className="-rotate-90" height="75" width="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-primary stroke-1 fill-none"
        ></circle>
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
          style={{ pathLength: scrollYProgress }}
        ></motion.circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary animate-pulse"
        ></circle>
      </svg>
    </figure>
  );
};

export default IconBar;
