import React from "react";
import SvgComponent from "./CircularText";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed bottom-[-14rem] flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <SvgComponent
          className={"fill-black animate-spin-slow dark:fill-light"}
        />
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 font-semibold rounded-full hover:bg-light hover:text-dark dark:bg-light dark:text-black hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
          href="mailto:mautorres15@hotmail.com"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
