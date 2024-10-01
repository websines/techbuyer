"use client";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

const features = [
  {
    icon: "/icon/support.svg",
    text: "Tell us what you want to sell",
  },
  {
    icon: "/icon/fast.svg",
    text: "We make you an offer within 24 hours",
  },
  {
    icon: "/icon/safe.svg",
    text: "We securely erase all data",
  },
  {
    icon: "/icon/money.svg",
    text: "We pay you directly and quickly",
  },
];

const AboutUs = [
  {
    icon: "/icon/star.svg",
    text: "Competitive pricing",
    description:
      "We offer the best prices in exchange for your used IT equipment",
  },
  {
    icon: "/icon/flexible.svg",
    text: "Wide variety",
    description:
      "We buy IT parts from over 150 brands including HP, Dell, IBM, Intel and Cisco",
  },
  {
    icon: "/icon/scalable.svg",
    text: "Quick response times",
    description:
      "Get a quote for your unwanted IT equipment within just 24 hours",
  },
  {
    icon: "/icon/team.svg",
    text: "Peace of mind",
    description: "We use state-of-the-art WipeDrive data erasure technology",
  },
  {
    icon: "/icon/design.svg",
    text: "Enviromentally friendly",
    description:
      "Make money on your unwanted IT parts and protect the environment",
  },
];

const About = () => {
  return (
    <div className="p-8 md:w-[80%] my-12 overflow-clip mx-auto md:p-4 bg-transparent">
      <Element
        name="about"
        className="flex flex-col items-center justify-center gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-10 bg-blue-600 rounded-xl cursor-pointer"
            >
              <button
                className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Image
                  src={feature.icon}
                  width={10000}
                  height={10000}
                  alt="icon"
                  className="w-8 h-8"
                />
              </button>
              <h3 className="text-xl font-bold mt-4 text-white">
                {feature.text}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-4 px-6 rounded-xl">
          <div className="flex flex-col items-start justify-center gap-4 w-[70%]">
            <h2 className="text-green-500 text-2xl mf:text-3xl font-semibold">
              The environmentally friendly way to dispose of your unwanted IT
              equipment
            </h2>
            <p className="text-base font-medium">
              By selling your used IT hardware to us, you will help support a
              more sustainable environment. When it is necessary to dispose of
              your decommissioned IT equipment, we will do so in an
              environmentally friendly manner that is fully compliant with
              industry standards.
            </p>
          </div>
          <Image
            src="/images/image-5.jpg"
            alt="earth"
            height={1000}
            width={1000}
            className="w-72 h-72"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <h2 className="text-2xl md:text-3xl font-medium text-blue-500">
            Why sell your used IT parts to us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {AboutUs.map((data, index) => (
              <div
                key={index}
                className="flex flex-col p-10 bg-neutral-800 rounded-xl cursor-pointer"
              >
                <button
                  className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-zinc-700 to-zinc-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <Image
                    src={data.icon}
                    width={10000}
                    height={10000}
                    alt="icon"
                    className="w-8 h-8"
                  />
                </button>
                <h3 className="text-xl font-bold mt-4 text-white text-wrap">
                  {data.text}
                </h3>
                <p className="text-xs text-white  font-medium mt-4 text-wrap">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
};

export default About;
