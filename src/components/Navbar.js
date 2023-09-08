import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 pt-4 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-[0.25rem]" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-[0.25rem]" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/About" title="About me" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/YesidTorres"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mauricio-torres-suesc%C3%BAn/"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/MauricioSuescun"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            T
          </motion.a>

          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-black"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[90vw] flex flex-col justify-between items-center fixed top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/45 rounded-lg backdrop-blur-md py-32 text-light"
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileCustomLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/About"
              title="About me"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4">
            <motion.a
              href="https://twitter.com/YesidTorres"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mauricio-torres-suesc%C3%BAn/"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/MauricioSuescun"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mx-1"
            >
              T
            </motion.a>

            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-black"} />
              ) : (
                <MoonIcon className={"fill-black"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
