import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, service3, check, viction } from "../assets";
import { usp1, usp2, usp3, usp4 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { Tilt } from "react-tilt";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Features = () => {
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
    <Section className="pt-[12rem] -mt-[5.25] bg-n-8" id="features">
      <div className="container">
        <Heading
          title="Revolutionizing gaming through blockchain"
          text="Transform the gaming landscape by integrating blockchain technology and fun-and-earn opportunities."
        />
        {/* <div className="lg:visible invisible relative">
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
                <h4 className="h4 mb-4">Decentralization</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Experience true ownership of in-game assets and complete
                  control over your gaming experience thanks to blockchain
                  technology.
                </p>
              </div>
            </Tilt>
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] col-span-2 group"
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Fun-and-Earn</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Enjoy an immersive and entertaining gaming experience while
                  earning rewards. Our games are designed to be engaging and
                  fun, ensuring that your time spent playing is both enjoyable
                  and profitable.
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
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </Tilt>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-5 mb-5 lg:grid-rows-3 grid-flow-col">
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
                <h4 className="h4 mb-4">Skill-to-Profit</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Capitalize on your gaming skills and strategies to maximize
                  your earnings. The more skillful you are, the higher your
                  potential rewards.
                </p>
              </div>
            </Tilt>
            <Tilt
              options={defaultOptions}
              className="border border-n-1/10 rounded-3xl overflow-hidden row-span-1 col-span-2 group"
              onMouseMove={onMouseMove}
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="flex flex-row py-12 px-4 xl:px-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 gap-2 ">
                <img src={viction} className="h-28 w-28" alt="viction" />
                <h4 className="flex h4 items-center mb-4">
                  Powered by Viction
                </h4>
              </div>
            </Tilt>
            <Tilt
              options={defaultOptions}
              className="p-4 bg-n-8 border-n-1/10 border rounded-3xl overflow-hidden lg:min-h-[46rem] col-span-3 row-span-3 group"
              onMouseMove={onMouseMove}
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Community driven</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Join a vibrant community of gamers, developers, and
                  enthusiasts who are shaping the future of gaming on the
                  blockchain. Contribute ideas, feedback, and even create your
                  own games through decentralized platforms.
                </p>
              </div>
              <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={usp3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="community"
                />
              </div>
            </Tilt>
          </div>
        </div> */}

        {/* Phone view */}
        {/* <div className="relative visible lg:invisible flex flex-col gap-4">
          <Tilt
            options={defaultOptions}
            onMouseMove={onMouseMove}
            className="p-4 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden group"
          >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="relative rounded-xl overflow-hidden flex justify-center">
              <img
                src={usp1}
                className="w-full object-cover md:w-80 md:h-80"
                width={550}
                height={200}
                alt="decentralised"
              />
            </div>
            <div className="py-4 px-4">
              <h4 className="h4 mb-4">Decentralization</h4>
              <p className="body-2 md:mb-4 text-n-3">
                Experience true ownership of in-game assets and complete control
                over your gaming experience thanks to blockchain technology.
              </p>
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            onMouseMove={onMouseMove}
            className="p-4 bg-n-7 rounded-3xl overflow-hidden  group"
          >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Fun-and-Earn</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Enjoy an immersive and entertaining gaming experience while
                earning rewards. Our games are designed to be engaging and fun,
                ensuring that your time spent playing is both enjoyable and
                profitable.
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
            <div className="relative h-[10rem] bg-n-8 rounded-xl overflow-hidden md:h-[15rem]">
              <img
                src={service3}
                className="w-full"
                width={520}
                height={400}
                alt="Scary robot"
              />
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            onMouseMove={onMouseMove}
            className="bg-n-7 rounded-3xl overflow-hidden  group"
          >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="relative inset-0">
              <img
                src={service2}
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt="robot"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Skill-to-Profit</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Capitalize on your gaming skills and strategies to maximize your
                earnings. The more skillful you are, the higher your potential
                rewards.
              </p>
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            onMouseMove={onMouseMove}
            className="p-4 bg-n-7 rounded-3xl overflow-hidden  group"
          >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="py-4 px-4">
              <h4 className="h4 mb-4">Community driven</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Join a vibrant community of gamers, developers, and enthusiasts
                who are shaping the future of gaming on the blockchain.
                Contribute ideas, feedback, and even create your own games
                through decentralized platforms.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden flex justify-center">
              <img
                src={usp3}
                className="w-96 h-96 object-cover"
                width={520}
                height={400}
                alt="community"
              />
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            className="border border-n-1/10 rounded-3xl overflow-hidden row-span-1 col-span-2 group"
            onMouseMove={onMouseMove}
          >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div>
              <div className="flex justify-center items-center flex-row py-12 px-4 xl:px-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 gap-10 ">
                <img src={viction} className="h-28 w-28" alt="viction" />
                <h4 className="flex h4 items-center mb-4">
                  Powered by Viction
                </h4>
              </div>
            </div>
          </Tilt>
        </div> */}
        <div className="relative">
          <Tilt
            options={defaultOptions}
            onMouseMove={onMouseMove}
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] group"
          >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-50"
                width={800}
                alt="decentralised"
                height={730}
                src={usp1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Decentralization</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Experience true ownership of in-game assets and complete control
                over your gaming experience thanks to blockchain technology.
              </p>
            </div>
          </Tilt>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-5">
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden group"
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
                <h4 className="h4 mb-4">Skill-to-Profit</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Capitalize on your gaming skills and strategies to maximize
                  your earnings. The more skillful you are, the higher your
                  potential rewards.
                </p>
              </div>
            </Tilt>

            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] group"
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Fun-and-Earn</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Enjoy an immersive and entertaining gaming experience while
                  earning rewards. Our games are designed to be engaging and
                  fun, ensuring that your time spent playing is both enjoyable
                  and profitable.
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

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </Tilt>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="p-4 bg-n-8 rounded-3xl border border-n-1/10 overflow-hidden lg:min-h-[46rem] group"
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Community driven</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Join a vibrant community of gamers, developers, and
                  enthusiasts who are shaping the future of gaming on the
                  blockchain. Contribute ideas, feedback, and even create your
                  own games through decentralized platforms.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={usp3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </Tilt>
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="relative border border-n-1/10 rounded-3xl overflow-hidden group"
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div>
                <div className="flex justify-center items-center flex-row py-12 px-4 xl:px-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 gap-10 ">
                  <img src={viction} className="h-28 w-28" alt="viction" />
                  <h4 className="flex h4 items-center mb-4">
                    Powered by Viction
                  </h4>
                </div>
              </div>
            </Tilt>
          </div>

          {/* <Gradient /> */}
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

export default Features;
