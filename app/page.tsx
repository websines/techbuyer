"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/page-components/About";
import Hero from "@/components/page-components/Hero";
import LetsMakeThingsHappenSection from "@/components/page-components/MakethingsHappen";
import Services from "@/components/page-components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] text-black">
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <Services />
        <div className="my-8 p-8 md:p-4 md:my-12 flex flex-col items-center justify-center gap-y-4 md:w-[80%] mx-auto bg-transparent">
          <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold">
            Hassle-free IT purchasing process with secure data erasure
          </h2>
          <p className="text-base font-medium text-center text-black">
            As we deal directly with you and the equipment we buy is stocked
            directly into our warehouses, this process cuts out the middle man,
            so you can be sure to get the best prices for your used equipment.
            With state-of-the-art data erasure technology from White Canyon and
            Blancco, we ensure that 100% of your data is deleted and provide
            full certification to support the data erasure of each device.
          </p>
        </div>
        <About />
        <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <LetsMakeThingsHappenSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
