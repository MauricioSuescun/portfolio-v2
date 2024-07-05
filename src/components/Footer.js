import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 dark:border-t-4 border-solid bg-dark text-light font-medium text-xs dark:text-dark dark:border-light sm:text-base inline-block z-0 p-8 dark:bg-gray-200 xl:p-24 lg:p-16 md:p-12 sm:p-8 px-32">
      <div className="py-4 flex items-baseline justify-between lg:flex-col lg:py-6 xl:py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with <span className="px-1">&hearts;</span> by&nbsp;
          <Link href="/">Yesid Mauricio</Link>
        </div>
        {/* <Link href="/">Say Hello</Link> */}
      </div>
    </footer>
  );
};

export default Footer;
