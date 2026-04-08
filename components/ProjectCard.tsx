import Image from "next/image"

export default function ProjectCard({
    name,
    sector,
    details,
    rotation,
    className
}: { name: string, sector: string, details: string, rotation: string, className: string }) {
    return (
        <div className={`flex flex-col gap-4 max-w-2xs  bg-[#FEFFFE] p-4 rounded-xl border border-black/10 shadow-2xl ${rotation}`}>
            {/* <div className="h-12 w-12 bg-yellow-100 rounded-xl"></div> */}
            <Image src="/pin.avif" alt="pin" width={55} height={55} className="mx-auto" />
            <div className="ml-2">
                <h3>{name}</h3>
                <p className="text-sm text-gray-500">{sector}</p>
            </div>
            <p className={`text-sm ${className}`}>{details}</p>
        </div>
    )
}