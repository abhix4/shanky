import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import StackAndSkills from "@/components/StackAndSkills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F4F4F5] min-h-screen py-12 flex justify-center font-poppins">
      {/* Main */}
      <div className="p-4 flex flex-col gap-4 bg-[#FEFFFF] rounded-xl shadow-2xl">
        <Hero />
        <Experience />
        <StackAndSkills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
