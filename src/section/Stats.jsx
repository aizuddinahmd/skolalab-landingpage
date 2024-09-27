import React from "react";
import Section from "../components/Section";
import Counter from "../components/Counter";

const Stats = () => {
  return (
    <Section className=" flex  items-center justify-center md:gap-0 gap-6">
      <div className="w-1/4 h-24 md:h-24 flex flex-col gap-1 md:gap-2 items-center md:p-0 p-1 justify-center sm:border-r-[2px] border-r-[0px]  border-slate-300">
        <Counter number={13400} />

        <p className="body-2 text-center">TOTAL GAMER</p>
      </div>
      <div className="w-1/4 h-24 md:h-24 flex flex-col gap-1 md:gap-2 items-center justify-center sm:border-r-[2px] border-r-[0px]   border-slate-300">
        <div className="flex flex-row">
          <Counter number={4300} />
        </div>
        <p className="body-2 text-center">Daily Active User</p>
      </div>
      <div className="w-1/4 h-24 md:h-24 flex flex-col gap-1 md:gap-2 items-center justify-center ">
        <Counter number={66} />
        <p className="body-2 text-center">TOTAL GAMES</p>
      </div>
    </Section>
  );
};

export default Stats;
