"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/page-components/Hero";
import Services from "@/components/page-components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <Services />
      </main>
    </div>
  );
}
