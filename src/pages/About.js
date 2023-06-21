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
      <main className="flex w-full flex-col items-center justify-center">
        <AnimatedText text="About me!" className="mb-16"></AnimatedText>
        <div className="grid w-full grid-cols-4 gap-16 px-32">
          <div className="col-span-3 flex flex-col items-start justify-start ">
            <p className="font-medium dark:text-light">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className="my-4 font-medium dark:text-light">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium dark:text-light">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div>
            <Image src={profilePic} alt="imagen de perfil" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
