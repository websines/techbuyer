"use client";

import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:contact@techtoaster.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  min-h-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] text-black
    
    "
    >
      <Navbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Let&apos;s Talk</h1>
          <p className="text-md text-gray-500 py-4">
            As we deal directly with you and the equipment we buy is stocked
            directly into our warehouses, this process cuts out the middle man,
            so you can be sure to get the best prices for your used equipment
          </p>

          {[
            {
              title: "Quick Response Times",
              description:
                "Get a quote for your unwanted IT equipment within just 24 hours",
            },

            {
              title: "Fast Transactions",
              description: "We make you an offer within 24 hours",
            },
            {
              title: "Fast Payments",
              description: "We pay you directly and quickly",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 1.8 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Your message here"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
