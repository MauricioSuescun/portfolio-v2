import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black rounded-full text-white flex items-center justify-center text-xl border-2 border-solid border-transparent dark:border-light"
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
