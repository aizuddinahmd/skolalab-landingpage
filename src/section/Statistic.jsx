import { tokenomics } from "../constants";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Counter from "../components/Counter";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Tilt } from "react-tilt";
import chart from "../assets/chart.png";

const Statistic = () => {
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
    <Section id="statistic" className="pt-[12rem] -mt-[5.25] bg-n-8">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Tokenomics" />

        <div className="flex items-center justify-center mb-8">
          <img src={chart} className="h-96" alt="piechart" />
        </div>
        <div className="relative grid md:grid-cols-3 gap-4 mb-10">
          {/* <Counter number={75} /> */}
          {tokenomics.map((item) => (
            <Tilt
              options={defaultOptions}
              onMouseMove={onMouseMove}
              className="block group bg-zinc-800 border-zinc-700 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[26rem] border  rounded-3xl"
              //   style={{
              //     backgroundImage: `url(${item.backgroundUrl})`,
              //   }}
              key={item.id}
            >
              <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
              <div className="relative z-2 flex flex-col p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex flex-row gap-2">
                  <Counter number={item.number} />
                  <h2 className="h2">{item.numberFormat}</h2>
                </div>
              </div>

              {/* {item.light && <GradientLight />} */}

              {/* <ClipPath /> */}
            </Tilt>
          ))}
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

export default Statistic;
