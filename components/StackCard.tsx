import Image from "next/image";

export default function StackCard({ url, title }: { url?: string, title: string }) {
    return (
        <div className="flex gap-2 bg-[#FEFFFE] items-center p-2 rounded-xl border border-dashed border-black/15">
            {/* <div className="h-6 w-6 bg-yellow-100 rounded-sm"></div> */}
            {
                url && <Image src={url} alt="stack" width={20} height={20} className="rounded-sm" />
            }
            
            <h3 className="text-xs md:text-sm">{title} </h3>

        </div>
    )
}