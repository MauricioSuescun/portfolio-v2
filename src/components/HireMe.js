import React from "react";
import SvgComponent from "./CircularText";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const HireMe = () => {
  return (
    <div className="fixed right-4 bottom-[-12rem] flex items-center justify-center overflow-hidden md:right-1 md:left-auto md:top-[-15rem] md:bottom-auto md:w-32 md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-32">
        <SvgComponent
          className={"fill-black animate-spin-slow dark:fill-light"}
        />
        <MotionLink
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 font-semibold rounded-full  hover:bg-light hover:text-dark dark:bg-light dark:text-black hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
          href="mailto:mautorres15@hotmail.com"
          whileHover={{
            backgroundColor: [
              "#ffffff",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          Hire Me
        </MotionLink>
      </div>
    </div>
  );
};

export default HireMe;
