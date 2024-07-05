import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { useTranslation } from "next-i18next";

import figma from "../../public/images/svgs/logos/react-2.svg";
import Image from "next/image";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold py-3 px-6 bg-primary text-dark shadow-black cursor-pointer absolute dark:text-dark dark:bg-primary lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold border-2 border-solid border-dark xs:border-none"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      {/* <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light md:mt-32 md:text-6xl">
        Skills
      </h2> */}
      <AnimatedText
        text={t("skills")}
        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div
        className="mx-12 h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[50vh] xs:h-[40vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full border-2 border-solid border-dark font-semibold p-8 bg-primary text-dark shadow-black  dark:text-dark dark:bg-primary lg:p-6 md:p-4 xs:text-xs xs:p-2 xs:bg-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-23vw" y="8vw"></Skill>
        <Skill name="Html" x="25vw" y="-18vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Figma" x="-5vw" y="-12vw" />
        <Skill name="ReactJS" x="-2vw" y="19vw" />
        <Skill name="NextJS" x="-25vw" y="-5vw" />
        <Skill name="Bootstrap" x="15vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="32vw" y="-3vw" />
        <Skill name="Redux" x="-25vw" y="-18vw" />
        <Skill name="Node" x="2vw" y="-24vw" />
        <Skill name="SQL" x="16vw" y="14vw" />
        <Skill name="Github" x="-9vw" y="10vw" />
      </div>
    </div>
  );
};

export default Skills;
