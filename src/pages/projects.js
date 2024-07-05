import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import farm from "../../public/images/projects/The Gaming Farm.png";
import iphone from "../../public/images/projects/iPhone Website.png";
import wanderlust from "../../public/images/projects/Wanderlust.png";
import fakeshop from "../../public/images/projects/fake-shop.png";
import personalBlog from "../../public/images/projects/personal-blog.png";
import { useTranslation } from "next-i18next";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const { t } = useTranslation("common");

  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="my-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-primary text-dark font-semibold p-2 px-6 text-lg dark:bg-primary dark:text-dark sm:px-4 sm:text-base border-2 border-solid border-dark"
          >
            {t("take a look")}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  const { t } = useTranslation("common");

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl shadow-2xl border border-solid border-dark dark:border-light p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col mt-4 items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-l xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <div className="my-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 fill-light">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-primary text-dark font-semibold p-2 px-6 text-lg dark:bg-primary dark:text-dark sm:px-4 sm:text-base border-2 border-solid border-dark"
          >
            {t("visit")}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Yesid Mauricio | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="py-16">
          <AnimatedText
            text={t("projects")}
            className="mb-16 lg:!text-7xl sm:my-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 pt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="The Gaming Farm"
                img={farm}
                summary="e-commerce platform focused on the gaming world, where you can find games, consoles, console controllers, and gaming-related news. The site implement different technologies like React, Redux, NodeJS, Bootstrap, Material-UI, Postgres, Sequelize, etc. "
                link="https://the-gamig-farm-pf-rho.vercel.app/"
                type="Featured Project"
                github="https://github.com/MauricioSuescun/The-Gamig-Farm-PF"
              />
            </div>
            <div className="col-span-6 dark:text-light sm:col-span-12 xs:col-span-12">
              <Project
                title="iPhone 15 Pro Site"
                img={iphone}
                summary="e-commerce platform focused on the gaming world, where you can find games, consoles, console controllers, and gaming-related news. The site implement different technologies like React, Redux, NodeJS, Bootstrap, Material-UI, Postgres, Sequelize, etc. "
                link="https://ymts-iphone15pro.vercel.app/"
                type="Featured Project"
                github="https://github.com/MauricioSuescun/iphone-website-clone"
              />
            </div>
            <div className="col-span-6 dark:text-light sm:col-span-12 xs:col-span-12">
              <Project
                title="Personal Blog"
                img={personalBlog}
                summary="Amazing static blog website using Next.js, Contentlayer, and Tailwind CSS. With homepage, blog pages, category pages, an about page, and a contact page, dark and light themes, fully responsive on mobile devices."
                link="https://personal-blog-mauriciosuescun.vercel.app/"
                type="Featured Project"
                github="https://github.com/MauricioSuescun/Personal-Blog"
              />
            </div>
            <div className="col-span-6 dark:text-light sm:col-span-12 xs:col-span-12">
              {" "}
              <Project
                title="Wanderlust App"
                img={wanderlust}
                link="https://wanderlust-app-pink.vercel.app/"
                type="Featured Project"
                github="https://github.com/MauricioSuescun/Wanderlust-App"
              />
            </div>
            <div className="col-span-6 dark:text-light sm:col-span-12 xs:col-span-12">
              <Project
                title="Fake Shop Typescript"
                img={fakeshop}
                link="https://fake-shop-react-typescript.vercel.app/"
                type="Featured Project"
                github="https://github.com/MauricioSuescun/FakeShop-React-Typescript"
              />
            </div>
            <div className="col-span-6 dark:text-light sm:col-span-12 xs:col-span-12 hidden">
              <Project
                title="Test Tailwind"
                img={project1}
                link="https://the-gamig-farm-pf-rho.vercel.app/"
                type="Featured Project"
                github="https://github.com/MauricioSuescun"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
