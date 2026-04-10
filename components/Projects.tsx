'use client'
import ProjectCard from "./ProjectCard";
import {motion, useInView} from 'motion/react'
import { useRef } from "react";

const projects =[
    {
        name:"SEB",
        details:`Advanced procurement solution designed to simplify
        workflows, streamline supplier collaboration, and optimize supply chain efficiency through
        seamless transactions and real-time data exchange.`,
        sector:"Procurement",
        rotation:"-rotate-3 ml-auto",
        className:"bg-[#E6ECFF] p-4 rounded-lg border border-[#DEE7FF]"
    },                              
    {
        name:"Enact",
        details:`Tavant's AI-powered digital lending platform, designed to
        streamline mortgage lifecycle management (loan origination, processing, underwriting,
        and servicing).`,
        sector:"Banking / FinTech",
        rotation:"rotate-3",
        className:"bg-[#FFEEE5] p-4 rounded-lg border border-[#FCE8DC]"
    },
    {
        name:"Zycus Supplier Network(ZSN)",
        details:`Advanced procurement solution designed to simplify
        workflows, streamline supplier collaboration, and optimize supply chain efficiency through
        seamless transactions and real-time data exchange.`,
        sector:"Procurement",
        rotation:"-rotate-3 ml-auto",
        className:"bg-[#E6ECFF] p-4 rounded-lg border border-[#DEE7FF]"
    }
]

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const fadeUpVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: 'blur(2px)',
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.2,
                delay: i * 0.4,
                type: 'spring' as const
            },
        }),
    };
    
    return (
        <div ref={ref} className="bg-[#F2F2F2] p-6 rounded-xl border border-black/4">
            <h2 className="uppercase text-md font-medium">Projects</h2>
            <div className="flex flex-col gap-16 justify-between mt-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={index + 1}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
