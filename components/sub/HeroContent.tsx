"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col px-20 mt-24 w-full z-20"
    >
      <motion.div className="flex flex-row items-center justify-center w-full mt-40">
        <div className="h-full w-3/5 flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="Welcome-box p-[8px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Frontend Developer</h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              UI experience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m an Experienced Frontend Developer Specializing in React,
            TypeScript, and TailwindCSS for Innovative Web Applications
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-2/5 h-full flex justify-center items-center mt-10"
        >
          <Image
            src="/mainIconsdark.png"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
HeroContent.displayName = "HeroContent";
