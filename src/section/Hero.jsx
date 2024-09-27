import React, { useRef } from "react";
import Section from "../components/Section";
import { BackgroundCircles } from "../components/design/Header";
import { useScroll, motion, useTransform } from "framer-motion";
import { Gradient } from "../components/design/Roadmap";

import { GradientLight } from "../components/design/Benefits";
import { hero1, hero2, heroBackground } from "../assets";
import Button from "../components/Button";

const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="relative" id="hero">
      <motion.div
        // ref={targetRef}
        // style={{ opacity, scale }}
        className="container top-0 sticky flex justify-center items-center h-screen z-10 flex-col"
      >
        <div className="z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="font-sans h1 mb-6 tracking-tight">
            Building community. Accelerating growth
          </h1>
          <p className="body-1 mt-8 text-n-4 lg:mx-32">
            We help your projects grow. From expanding your user base to
            organizing impactful events, we’re here to support your project’s
            growth every step of the way.
          </p>
          <div className=" mt-8 flex flex-row justify-center gap-4">
            <Button href="/" className="bg-white" white>
              Start collaborating
            </Button>
            <Button href="/" className="">
              Talk to us
            </Button>
          </div>
        </div>
      </motion.div>
      {/* <div className="">
        <GradientLight />
      </div> */}

      {/* <Gradient /> */}
      {/* <div className="absolute left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%]">
        <img
          src={hero2}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div> */}
      <div className="absolute md:-top-[10%] ">
        <img
          src={hero2}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
