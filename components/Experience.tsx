import ExperienceCard from "./ExperienceCard";

const exp = [
    {
        url:"/tavant.jpeg",
        name:"Tavant Technologies",
        duration:"April '25 – Present",
        designation:"Senior Quality Engineer"
    },
    {
        url:'/zycus.jpeg',
        name:"Zycus InfoTech",
        duration:"May ’21 – Mar ’25",
        designation:"Senior Software Engineer - Testing"
    }
]

export default function Experience() {
    return (
        <div className="bg-[#F2F2F2] p-6 rounded-xl border border-black/4">
            <h2 className="uppercase text-md font-medium">Experience</h2>
            <div className="flex flex-col gap-4 justify-between mt-6">
                {
                    exp.map((item:any) => <ExperienceCard key={item.name} url={item.url} name={item.name} duration={item.duration} designation={item.designation}/>)
                }

            </div>


        </div>
    )
}