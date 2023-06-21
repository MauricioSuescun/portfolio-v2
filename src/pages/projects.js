import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <Link
        href=""
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl  ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="my-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 dark:bg-light">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light font-semibold p-2 px-6 text-lg dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Yesid Mauricio | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="py-16">
          <AnimatedText text="Projects" />

          <div className="grid grid-cols-12 gap-24 pt-16">
            <div className="col-span-12">
              <FeaturedProject
                title="The Gaming Farm"
                img={project1}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 dark:text-light">Project 1</div>
            <div className="col-span-6 dark:text-light">Project 2</div>
            <div className="col-span-6 dark:text-light">Project 3</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
