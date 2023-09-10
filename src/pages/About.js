/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import certificado from "../../public/images/profile/certificado.png";

const About = () => {
  return (
    <>
      <Head>
        <title>Yesid Mauricio | About me</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex flex-col items-center justify-center py-32">
        <AnimatedText
          text="About me!"
          className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
        ></AnimatedText>
        <div className="flex items-start justify-between w-full px-32 xs:px-8 xs:flex-col sm:px-8 sm:flex-col md:flex-col">
          <div className="w-1/2 pr-8 xs:w-full sm:w-full md:w-full xs:pr-2">
            <p className="font-medium dark:text-light">
              I'm originally from Bogotá, Colombia. I grew up surrounded by
              technology. My passion for it led me to specialize in computer
              maintenance. After years in tech support, I decided to pivot to
              web development.
            </p>
            <p className="my-4 font-medium dark:text-light">
              I consider myself a creative, detail-oriented, and
              solutions-focused person. I enjoy learning new things daily and
              staying up-to-date on dev trends. I firmly believe that with
              creativity, hard work, and teamwork, we can achieve great things.
            </p>
            <p className="font-medium dark:text-light">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="w-1/2 pl-8 xs:w-full sm:w-full md:w-full xs:pl-0 pt-8">
            <Image src={certificado} alt="certificado Soy Henry" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
