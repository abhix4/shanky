import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
    return (
        <div className="bg-[#F2F2F2] p-6 rounded-xl border border-black/4">
            <h2 className="uppercase text-md font-medium">Contact</h2>
            <p className="text-sm mt-6 max-w-md">I’m always open to new projects, collaborations, or a conversation about design. If you have an idea in mind or want to connect, feel free to get in touch.</p>

            <div className="flex gap-3 mt-12">
                <a href="https://www.linkedin.com/in/shashank-kumar-341a5a160/"><FaLinkedin size={20}  className="text-gray-600 hover:text-gray-700"/></a>
                <a href="mailto:shashankkumar648@gmail.com"><IoMailSharp  size={20} className="text-gray-600 hover:text-gray-700"/></a>
                <a href="https://github.com/Shankymoti"> <FaGithub size={20} className="text-gray-600 hover:text-gray-700"/></a>
                <div className="flex gap-1 items-center ml-auto">
                     <IoLocationSharp size={16} className="text-gray-600" />
                     <p className="text-sm text-gray-500">Bangalore, 🇮🇳</p>
                </div>
            </div>
        </div>
    )
}   