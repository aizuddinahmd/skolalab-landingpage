import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, service3, check, viction } from "../assets";
import { usp1, usp2, usp3, usp4, usp5 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../components/design/Services";
import { Tilt } from "react-tilt";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Button from "../components/Button";

const Project = () => {
  const data = {
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  };

  const defaultOptions = {
    reverse: false,
    max: 10,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Section className="pt-[12rem] -mt-[5.25] bg-n-8">
      <div className="container">
        <Heading
          tag="Our Projects"
          title="Guiding the Next Generation of Crypto and Blockchain Innovators"
          text="Join a vibrant community dedicated to mastering the future of finance through comprehensive crypto education and hands-on blockchain experiences."
        />
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-5 mb-5">
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="relative border border-n-1/10 rounded-3xl overflow-hidden lg:col-span-3 group"
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="absolute inset-0">
                <img
                  src={usp1}
                  className="h-full w-full object-contain"
                  alt="decentralised"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h3 mb-4">In-Depth Crypto Courses</h4>
                <p className="body-1 mb-[3rem] text-n-3">
                  From beginner to advanced levels, our curriculum covers
                  everything you need to excel in the world of cryptocurrency.
                </p>
                <div className="flex justify-center">
                  <Button href="/roadmap" className="bg-white" white>
                    Our courses
                  </Button>
                </div>
              </div>
            </Tilt>
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="p-4 relative border border-n-1/10 rounded-3xl overflow-hidden lg:min-h-[46rem] col-span-2 group"
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="py-12 px-4 xl:px-8 absolute justify-start">
                <h4 className="h3 mb-4">Interactive Space</h4>
                <p className="body-1 mb-[2rem] text-n-3">
                  Engage with experts and peers in our state-of-the-art seminar
                  room, designed for collaborative learning and networking.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute h-[20rem] bottom-0 overflow-hidden md:h-[25rem]">
                <img
                  src={usp5}
                  className="h-full w-full object-cover"
                  alt="seminar"
                />
              </div>
            </Tilt>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-5 mb-5 lg:grid-rows-2 grid-flow-col">
            <Tilt
              options={defaultOptions}
              className="relative border border-n-1/10 rounded-3xl col-span-2 overflow-hidden row-span-2 group"
              onMouseMove={onMouseMove}
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h3 mb-4">The WAGMI book</h4>
                <p className="body-1 mb-[3rem] text-n-3">
                  Access our comprehensive guide, the 'WAGMI Book,' designed to
                  help you navigate the complex world of crypto with confidence.
                </p>
              </div>
            </Tilt>

            <Tilt
              options={defaultOptions}
              className="p-4 bg-n-8 border-n-1/10 border rounded-3xl overflow-hidden lg:min-h-[46rem] col-span-3 row-span-2 group"
              onMouseMove={onMouseMove}
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="py-12 px-4 xl:px-8 absolute bottom-0">
                <h4 className="h3 mb-4">Community as a service</h4>
                <p className="body-1 mb-[2rem] text-n-3">
                  Join a vibrant community of gamers, developers, and
                  enthusiasts who are shaping the future of gaming on the
                  blockchain. Contribute ideas, feedback, and even create your
                  own games through decentralized platforms.
                </p>
                <div className="flex justify-center">
                  <Button
                    href="/roadmap"
                    className="border-none bg-white"
                    white
                  >
                    Join our community
                  </Button>
                </div>
              </div>
              <div className="relative h-[20rem] overflow-hidden md:h-[25rem]">
                <img
                  src={usp3}
                  className="w-full h-full object-cover"
                  alt="community"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </Section>
  );
};

function Effect({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      />
    </div>
  );
}

export default Project;
