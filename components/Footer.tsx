import Image from "next/image";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-8 p-6 md:p-4 flex flex-col md:flex-row items-center justify-center md:w-[80%] mx-auto inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <Image src={'/'} alt="footer-logo" height={300} width={300} className="w-48" /> */}
        <h1 className="text-3xl font-semibold">TECHBUYER</h1>
        <div className="flex flex-row items-center justify-between gap-4">
          <FaPhoneAlt /> <p className="text-sm font-medium">(123)-456-7890</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <FaAddressBook />{" "}
          <p className="text-sm font-medium">
            Ohio <br /> United States
          </p>
        </div>
        <p className="text-sm font-medium mt-8 mb-2">
          © 2024 Techbuyer All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
