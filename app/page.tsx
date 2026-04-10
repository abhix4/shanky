"use client"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import StackAndSkills from "@/components/StackAndSkills";
import {motion} from 'motion/react'


export default function Home() {


  const fadeUpVariants: any = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(6px)',
    },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.3, 1],
      },
    }),
  };

  return (
    <div className="w-full bg-[#F4F4F5] md:py-12 flex justify-center font-poppins">
      {/* Main */}
      <div className="p-2 md:p-4 w-full max-w-xl flex flex-col gap-4 bg-[#FEFFFF] rounded-xl shadow-2xl">
        <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        >
          <Hero />
        </motion.div>
        <motion.div
         variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        >
          <Experience />
        </motion.div>
        <motion.div
         variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={3}
        >
          <StackAndSkills />
        </motion.div>
        <motion.div
         variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
        >
          <Projects />
        </motion.div>
        <motion.div
         variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}
