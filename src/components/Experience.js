import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import IconBar from "./IconBar";
import AnimatedText from "@/components/AnimatedText";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <IconBar reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <AnimatedText
        text="Experience"
        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer - "
            company="Soy Henry Bootcamp"
            companyLink="https://www.soyhenry.com/"
            time="Nov 2022 - Feb 2023"
            address="Remote"
            work="We created an e-commerce platform focused on the gaming world, we wanted to apply different technologies such as React, Redux, NodeJS, Bootstrap, Material-UI, Postgres, Sequelize, etc. On my part I was more committed to the frontend part and implementing some additional features to add value to the project."
          />
          <Details
            position="Full-Stack Teaching Assistant - "
            company="Teaching Assistant (TA) for students at Henry Bootcamp."
            companyLink="https://www.henrybootcamp.com/"
            time="Nov 2022 - 2023"
            address="Remote"
            work="I guided learners in their initial steps in the course, clarifying any questions and doubts. I provided ongoing assistance to students in completing exercises, promoting collaborative teamwork such as pair programming. To build community among the cohort, I encouraged collaboration and team building. I also suggested ideas to improve bootcamp processes and workflows, playing an active role in enhancing the overall program. "
          />
          <Details
            position="Level 2 IT Solutions Consultant - "
            company="Lattitude SAS"
            companyLink="https://www.lattitude.la/"
            time="Mar 2019 - Dec 2019"
            address="Bogota - Colombia"
            work=" I gained valuable hands-on experience administering, implementing, and managing core on-premise and cloud infrastructure, platforms, and services to meet client requirements and deliver IT solutions. My responsibilities involved day-to-day operations as well as project deployments, giving me exposure to a wide range of enterprise technologies and environments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
