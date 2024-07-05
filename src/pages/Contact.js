import AnimatedText from "@/components/AnimatedText";
import LottieAnimation from "@/components/LottieAnimation";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-2">
        <AnimatedText
          text="Contact"
          className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
        ></AnimatedText>
      </div>
      <div className="w-full flex flex-row sm:flex-col items-center justify-center">
        <div className=" w-2/5 h-full mb-32 sm:w-full">
          <LottieAnimation />
        </div>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className=" text-xl font-medium leading-relaxed w-3/5 sm:w-full dark:text-light items-start justify-center px-16 "
        >
          Hello! My name is{" "}
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true, maxLength: 80 })}
            className="outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg dark:placeholder:text-gray dark:bg-transparent"
          />
          and I want to discuss a potential project. You can email me at{" "}
          <input
            type="email"
            placeholder="email"
            {...register("email", {})}
            className="outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg dark:placeholder:text-gray dark:bg-transparent"
          />
          or reach out to me at
          <input
            type="tel"
            placeholder="phone number"
            {...register("phone number", {})}
            className="outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg dark:placeholder:text-gray dark:bg-transparent"
          />
          Here are some details about my project: <br />
          <textarea
            {...register("project details", {})}
            rows={3}
            className="w-full outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg dark:placeholder:text-gray dark:bg-transparent"
          />
          <input
            type="submit"
            value="Send Request"
            className="mt-8 mb-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid rounded border-light text-light bg-dark cursor-pointer dark:placeholder:text-gray dark:bg-transparent"
          />
        </form>
      </div>
    </div>
  );
}
