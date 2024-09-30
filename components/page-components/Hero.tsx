"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="overflow-hidden mx-auto w-[80%] my-12 md:p-4 bg-transparent flex flex-col md:flex-row items-center justify-between gap-y-4">
      <div className="flex flex-col items-center gap-y-8 md:max-w-[50%] p-2">
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-500">
          Sell your used IT equipment to us - we offer the best prices!
        </h1>
        <p className="font-medium text-sm">
          With the Techbuyer decommissioning service, we will buy back your used
          IT equipment, offering the best market prices and trade-in values in
          exchange for your used IT parts. We buy any data center equipment
          including servers, HDDs, CPUs, server memory and other IT hardware
          from over 150 different brands including HPE, Dell, Intel, IBM and
          Cisco.{" "}
        </p>
        <Link
          href={"/contact"}
          className="px-8 py-2 w-full border-2 border-black dark:border-white uppercase bg-white hover:bg-blue-500 text-black transition duration-200  hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] text-lg text-center hover:text-white font-semibold"
        >
          Get a quote
        </Link>
      </div>
      <div className="w-full p-4">
        <Image
          src={"/images/image-4.jpg"}
          height={1000}
          width={1000}
          alt="hero"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
