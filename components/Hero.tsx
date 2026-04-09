import Image from "next/image"
import { GoPaperclip } from "react-icons/go";

export default function Hero() {
    return (
        <div className="relative bg-[#F2F2F2] p-6 rounded-xl border border-black/4">
            <a
            href="/resume.pdf"
            className="right-8 top-8 absolute"
            target="_blank"
            title="resume"
            >
           <GoPaperclip size={20} className="text-gray-500 hover:text-gray-700 cursor-pointer"/>
            </a>
            <div className="rounded-full overflow-hidden shadow-2xl w-25 h-25">
            <Image src='/shanky.png' alt="profile" width={100} height={100} className=" " />
            </div>
            <div className="flex  justify-between">

                <div className="mt-6">
                <h1 className="text-xl flex items-center gap-2">Shashank Kumar   
                 <svg
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g transform="translate(1.4066 1.4066) scale(2.81 2.81)">
                    <path
                        d="M 30.091 10.131 L 30.091 10.131 c 5.28 -13.046 23.695 -13.207 29.202 -0.255 l 0 0 l 0 0 c 12.959 -5.491 26.093 7.416 20.829 20.469 l 0 0 l 0 0 c 13.046 5.28 13.207 23.695 0.255 29.202 l 0 0 l 0 0 c 5.491 12.959 -7.416 26.093 -20.469 20.829 l 0 0 l 0 0 c -5.28 13.046 -23.695 13.207 -29.202 0.255 l 0 0 l 0 0 C 17.748 86.122 4.613 73.215 9.878 60.162 l 0 0 l 0 0 C -3.169 54.881 -3.33 36.467 9.623 30.96 l 0 0 l 0 0 C 4.131 18.001 17.038 4.866 30.091 10.131 z"
                        fill="#ffbf00"
                    />
                    <polygon
                        points="39.66,63.79 23.36,47.76 28.97,42.05 39.3,52.21 59.6,29.58 65.56,34.93"
                        fill="#FFFFFF"
                    />
                    </g>
                </svg>
              </h1>
                    <p className="text-sm text-gray-500">Senior Software Engineer - Testing</p>
                </div>


            </div>
            <p className="mt-6 text-sm md:max-w-md tracking-wide">
                Senior Software Engineer in Testing with <strong>4.8+ years</strong>  of experience in Manual, Automation, and API Testing.
                Proficient in Java Selenium test automation, API automation, and CI/CD integration, with expertise in frameworks
                like Selenium WebDriver, TestNG, Cucumber, RestAssured. Strong analytical and problem-solving skills with a focus
                on test coverage and efficiency.
            </p>

        </div>
    )
}