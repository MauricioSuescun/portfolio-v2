import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-16 h-16 border-b-2 bg-black rounded-full font-bold text-white flex items-center justify-center text-xl border-2 border-solid border-transparent dark:border-white"
        whileHover={{
          scale: 1.5,
        }}
      >
        YMTS
      </MotionLink>
    </div>
  );
};

export default Logo;
