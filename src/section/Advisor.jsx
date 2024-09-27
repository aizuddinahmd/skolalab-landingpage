import React from "react";
import { service3 } from "../assets";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { advisors } from "../constants";

const Advisor = () => {
  return (
    <Section className="">
      <div className="relative container">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Advisor" />
        {advisors.map((advisor) => (
          <div className="sticky bg-n-8 top-0 h-screen flex justify-center items-center">
            <div className="container lg:flex overflow-hidden">
              <div className="max-w-[25rem] flex justify-center flex-col">
                <h2 className="h2 mb-4 md:mb-8">{advisor.name}</h2>
                <p className="body">{advisor.description}</p>
              </div>

              <div className="lg:ml-auto xl:w-[38rem]">
                <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                  <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                    <div className="w-[60] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                      <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                        <img
                          src={service3}
                          className="w-full h-full object-cover rounded-full"
                          width={520}
                          height={400}
                          alt={advisor.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="sticky bg-n-8 top-0 mb-40 flex justify-center items-center">
          <div className="container lg:flex overflow-hidden">
            <div className="max-w-[25rem] flex justify-center flex-col">
              <h2 className="h2 mb-4 md:mb-8">Roland ONG</h2>
              <p className="body">
                Serial entrepreneur with 20+ years of experience in the game
                industry, Roland has reaped huge success from bring WoW to China
                and listing the 9 Ltd in Nasdaq
              </p>
            </div>

            <div className="lg:ml-auto xl:w-[38rem]">
              <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                  <div className="w-[60] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                      <img
                        src={service3}
                        className="w-full h-full object-cover rounded-full"
                        width={520}
                        height={400}
                        alt="Scary robot"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bg-n-7 top-0 h-screen flex items-center justify-center">
          <div className="container lg:flex overflow-hidden">
            <div className="xl:w-[38rem]">
              <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                  <div className="w-[60] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                      <img
                        src={service3}
                        className="w-full h-full object-cover rounded-full"
                        width={520}
                        height={400}
                        alt="Scary robot"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[25rem] lg:ml-auto flex justify-center flex-col">
              <h2 className="h2 mb-4 md:mb-8">Martin Hoon</h2>
              <p className="body">
                Martin has 20+ years of immense experience in the field of ICT,
                Cloud, Mobile Gaming and Blockchain with a vision to contribute
                to the growth of Web3 world
              </p>
            </div>
          </div>
        </div>

        <div className="sticky bg-n-8 top-0 h-screen  flex justify-center items-center">
          <div className="container lg:flex overflow-hidden">
            <div className="max-w-[25rem] flex justify-center flex-col">
              <h2 className="h2 mb-4 md:mb-8">Tess Hau</h2>
              <p className="body">
                Tess Hau is an investor & advisor to high performing startups
                globally. She had successful investment and exits in VR,
                biotech, construction, crypto companies
              </p>
            </div>

            <div className="lg:ml-auto xl:w-[38rem]">
              <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                  <div className="w-[60] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                      <img
                        src={service3}
                        className="w-full h-full object-cover rounded-full"
                        width={520}
                        height={400}
                        alt="Scary robot"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Section>
  );
};

export default Advisor;
