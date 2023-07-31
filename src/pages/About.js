/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profile-pic (26).png";

const About = () => {
  return (
    <>
      <Head>
        <title>Yesid Mauricio | About me</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center py-32">
        <AnimatedText
          text="About me!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        ></AnimatedText>
        <div className="grid  w-full grid-cols-4 gap-16 px-32">
          <div className="col-span-2 flex flex-col items-start justify-start xl:col-span-4 md:col-span-4 xs:px-2">
            <p className="font-medium dark:text-light">
              Hi, I am Mauricio Torres, a web developer and UI/UX designer with
              a passion for creating beautiful, functional, and user-centered
              digital experiences. With experience in the field. I am always
              looking for new and innovative ways to bring my clients visions to
              life.
            </p>
            <p className="my-4 font-medium dark:text-light">
              I believe that design is about more than just making things look
              pretty – its about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium dark:text-light">
              Whether Im working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-2 flex flex-col items-start justify-start xs:col-span-4">
            <Image src={profilePic} alt="imagen de perfil" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
