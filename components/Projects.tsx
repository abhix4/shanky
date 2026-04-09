// import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

const projects =[
    {
        name:"Enact",
        details:`Tavant’s AI-powered digital lending platform, designed to
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
    return (
        <div className="bg-[#F2F2F2] p-6 rounded-xl border border-black/4">
            <h2 className="uppercase text-md font-medium">Projects</h2>
            <div className="flex flex-col gap-16 justify-between mt-6">

                {
                    projects.map((project: any) => <ProjectCard key={project.name} name={project.name} details={project.details} sector={project.sector} rotation={project.rotation} className={project.className}/>)
                }


            </div>


        </div>
    )
}