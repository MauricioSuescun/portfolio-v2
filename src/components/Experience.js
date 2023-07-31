import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import IconBar from "./IconBar";

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
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light lg:text-6xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer"
            company="Henry Bootcamp"
            companyLink="https://www.henrybootcamp.com/"
            time="May 2021 - Present"
            address="Remote"
            work="I'm a Full Stack Developer, responsible for the backend and frontend of the Henry Bootcamp website. I'm responsible for managing the backend of the website, ensuring that the backend is secure, scalable, and efficient"
          />
          <Details
            position="Full Stack Developer"
            company="Henry Bootcamp"
            companyLink="https://www.henrybootcamp.com/"
            time="May 2021 - Present"
            address="Remote"
            work="I'm a Full Stack Developer, responsible for the backend and frontend of the Henry Bootcamp website. I'm responsible for managing the backend of the website, ensuring that the backend is secure, scalable, and efficient"
          />
          <Details
            position="Full Stack Developer"
            company="Henry Bootcamp"
            companyLink="https://www.henrybootcamp.com/"
            time="May 2021 - Present"
            address="Remote"
            work="I'm a Full Stack Developer, responsible for the backend and frontend of the Henry Bootcamp website. I'm responsible for managing the backend of the website, ensuring that the backend is secure, scalable, and efficient"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
