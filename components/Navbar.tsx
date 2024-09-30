"use client";

import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
  return (
    <Element
      name="top"
      className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6 xl:w-4/5 2xl:w-[68%]"
    >
      <Link href={"/"}>
        <h1 className="text-xl md:text-2xl font-semibold">TECHBUYER</h1>
      </Link>
      <div className="absolute right-1/2 translate-x-[30%] transform">
        <div className="hidden md:flex items-center gap-x-10 text-gray-700 font-medium text-lg cursor-pointer">
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>
          <ScrollLink
            to={"services"}
            smooth={true}
            className="hover:text-blue-500"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to={"about"}
            smooth={true}
            className="hover:text-blue-500"
          >
            About
          </ScrollLink>
          <ScrollLink
            to={"contact"}
            smooth={true}
            className="hover:text-blue-500"
          >
            Contact
          </ScrollLink>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <a href="tel:1234567890" className="hidden lg:flex">
          <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
            (123)-456-7890
          </button>
        </a>
        <Link
          href={"/contact"}
          className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
        >
          Contact Us
        </Link>
      </div>
    </Element>
  );
};

export default Navbar;
