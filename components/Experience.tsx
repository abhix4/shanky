import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <div className="bg-[#F2F2F2] w-xl p-6 rounded-xl border border-black/4">
            <h2 className="uppercase text-md font-medium">Experience</h2>
            <div className="flex flex-col gap-4 justify-between mt-6">

                <ExperienceCard url='/tavant.jpeg' name="Tavant Technologies" duration="April 2025 – Present" designation="Senior Quality Engineer" />
                <ExperienceCard url='/zycus.jpeg' name="Zycus InfoTech" duration="May 2021 – March 2025" designation="Senior Software Engineer - Testing" />


            </div>


        </div>
    )
}