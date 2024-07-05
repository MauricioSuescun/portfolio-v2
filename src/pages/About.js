/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import certificado from "../../public/images/profile/certificado.png";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Yesid Mauricio | About me</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex flex-col items-center justify-center py-32">
        <AnimatedText
          text={t("aboutTitle")}
          className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
        ></AnimatedText>
        <div
          id="about"
          className="flex items-start justify-between w-full px-32 xs:px-8 xs:flex-col sm:px-8 sm:flex-col md:flex-col"
        >
          <div className="w-1/2 pr-8 xs:w-full sm:w-full md:w-full xs:pr-2">
            <p className="font-medium dark:text-light">{t("about1")}</p>
            <p className="my-4 font-medium dark:text-light">{t("about2")}</p>
            <p className="font-medium dark:text-light">{t("about3")}</p>
          </div>
          <div className="w-1/2 pl-8 sm:pl-0 xs:w-full sm:w-full md:w-full xs:pl-0 pt-8">
            <Image src={certificado} alt="certificado Soy Henry" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
