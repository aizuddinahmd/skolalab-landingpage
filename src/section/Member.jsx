import React from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
import { service3 } from "../assets";
import { teamMembers } from "../constants";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const Member = () => {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Team Member" />
        {/* <div className="flex flex-row gap-4 overflow-hidden justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`mx-auto flex lg:flex-row flex-col gap-6`}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden  md:max-w-[24rem]"
            >
              <div className="relative h-[10rem] bg-n-8 rounded-xl overflow-hidden md:h-[15rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">BabahAjim</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Serial entrepreneur with 20+ years of experience in the game
                  industry, Roland has reaped huge success from bringing WoW to
                  China and listing the 9 Ltd in Nasdaq.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden  md:max-w-[24rem]"
            >
              <div className="relative h-[10rem] bg-n-8 rounded-xl overflow-hidden md:h-[15rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">BabahAjim</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Serial entrepreneur with 20+ years of experience in the game
                  industry, Roland has reaped huge success from bringing WoW to
                  China and listing the 9 Ltd in Nasdaq.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", "tween", 0.6, 1)}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden  md:max-w-[24rem]"
            >
              <div className="relative h-[10rem] bg-n-8 rounded-xl overflow-hidden md:h-[15rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">BabahAjim</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Serial entrepreneur with 20+ years of experience in the game
                  industry, Roland has reaped huge success from bringing WoW to
                  China and listing the 9 Ltd in Nasdaq.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", "tween", 0.6, 1)}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden  md:max-w-[24rem]"
            >
              <div className="relative h-[10rem] bg-n-8 rounded-xl overflow-hidden md:h-[15rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">BabahAjim</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Serial entrepreneur with 20+ years of experience in the game
                  industry, Roland has reaped huge success from bringing WoW to
                  China and listing the 9 Ltd in Nasdaq.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div> */}
        <div className="flex flex-row gap-4 overflow-hidden justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`mx-auto flex lg:flex-row flex-col gap-6`}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                variants={fadeIn("right", "tween", 0.2 * index, 1)}
                className="p-4 bg-n-7 rounded-3xl overflow-hidden  md:max-w-[24rem]"
              >
                <div className="relative h-[10rem] bg-n-8 rounded-xl overflow-hidden md:h-[15rem]">
                  <img
                    src={member.imgUrl}
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="Scary robot"
                  />
                </div>
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">{member.name}</h4>
                  <p className="body-2 mb-[2rem] text-n-3">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Member;
