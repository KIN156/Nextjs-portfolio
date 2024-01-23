"use client";

import Image from "next/image";
import Contactlink from "@/app/components/contactlink.jsx";
import HeroSection from "@/app/components/HeroSection.jsx";
import TechStack from "@/app/components/Techstack.jsx";
import Project from "@/app/components/Projects.jsx";
import Contact from "@/app/components/Contact.jsx";
import Experience from "@/app/components/Experience.jsx";
import Slider from "@/app/components/Slider.jsx";
export default function Home() {
  return (
    <main className="flex bg-zinc-800 flex-col h-screen justify-start max-w-full overflow-x-hidden items-center text-zinc-200 mon cursor-basic">
        <Contactlink />
        <HeroSection />
        <TechStack />
        <Project />
        <Experience />
        <Contact />
        
    </main>
  );
}
