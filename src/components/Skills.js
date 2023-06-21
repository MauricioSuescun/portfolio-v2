import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold py-3 px-6 bg-black text-light shadow-black cursor-pointer absolute dark:text-dark dark:bg-light"
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
  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light">
        Skills
      </h2>
      <div className="mx-32 h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold p-8 bg-black text-light shadow-black  dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-20vw" y="8vw" />
        <Skill name="Html" x="25vw" y="-18vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Figma" x="-5vw" y="-10vw" />
        <Skill name="ReactJS" x="0vw" y="15vw" />
        <Skill name="NextJS" x="-25vw" y="-5vw" />
        <Skill name="Bootstrap" x="15vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="32vw" y="-5vw" />
        <Skill name="Redux" x="-25vw" y="-18vw" />
      </div>
    </div>
  );
};

export default Skills;
