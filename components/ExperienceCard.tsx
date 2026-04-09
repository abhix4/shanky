import Image from "next/image";

export default function ExperienceCard({
    name,
    url,
    designation,
    duration
}: { url: string, name: string, designation: string, duration: string }) {
    return (
        <div className="flex  items-start gap-4  bg-[#FEFFFE] p-4 rounded-xl border border-black/2">
            {/* <div className="h-12 w-12 bg-yellow-100 rounded-xl shadow-2xl"></div> */}
            <div className="max-w-50 max-h-40 border border-black/6  p-1 rounded-xl overflow-hidden shadow-xl">
            <Image src={url} alt="company" width={50} height={50} className="rounded-xl overflow-hidden " />
            </div>
            <div>
                <h3>{name}</h3>
                <p className="text-sm text-gray-500">{designation}</p>
            </div>
            <p className="ml-auto text-sm ">{duration}</p>
        </div>
    )
}