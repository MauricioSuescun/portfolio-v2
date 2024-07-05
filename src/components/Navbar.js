import React, { useState, useEffect, useRef } from "react";
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
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (e) => {
    e.preventDefault();

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[2px] inline-block w-0 bg-primary absolute left-0 -bottom-0.5  
          group-hover:w-full transition-[width] ease duration-300
          ${activeSection === href ? "w-full" : "w-0"}
          dark:bg-primary
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggle();
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const { t } = useTranslation("common");
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="w-full px-32 pt-2 font-medium flex items-center justify-between dark:text-light xl:px-24 z-10 lg:px-16 md:px-12 sm:px-8 dark:bg-dark bg-light">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-[5px]"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-[5px]"
          }`}
        ></span>
      </button>
      <div className="relative xs:hidden sm:hidden">
        <Logo />
      </div>
      <div className="w-max flex justify-between items-center lg:hidden ">
        <nav className="mr-36 xl:mr-36 md:mr-12 flex">
          <CustomLink href="#about" title={t("about")} className="mx-4" />
          <CustomLink
            href="#skills"
            title={t("skills")}
            className="mr-4 ml-4"
          />
          <CustomLink
            href="#experience"
            title={t("experience")}
            className="mx-4 "
          >
            exp
          </CustomLink>
          <CustomLink
            href="#projects"
            title={t("projects")}
            className="mx-4 "
          />
          <CustomLink
            href="#contact"
            title={t("contact")}
            className="ml-4"
          ></CustomLink>
        </nav>

        <nav className="flex items-center justify-center flex-wrap xl:flex-nowrap">
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
            href="https://twitter.com/YesidTorres"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <TwitterIcon />
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
          <LanguageSwitcher />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[90vw] flex flex-col justify-between items-center fixed top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/45 rounded-lg backdrop-blur-md py-32 text-light"
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileCustomLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="#about"
              title="About me"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="#projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="#experience"
              title="Experience"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="#skills"
              title="Skills"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="#contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4">
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
              href="https://twitter.com/YesidTorres"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>

            <button
              className={`ml-3 xs:w-8 flex items-center justify-center rounded-full p-1
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
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3 sm:mx-1"
          >
            <LanguageSwitcher />
          </motion.a>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
