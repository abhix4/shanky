import Image from "next/image"

export default function Hero() {
    return (
        <div className="bg-[#F2F2F2] w-xl p-6 rounded-xl border border-black/4">
            {/* <div className="w-20 h-20 rounded-xl bg-yellow-200"></div>
             */}
            <Image src='/shanky.png' alt="profile" width={100} height={100} className="rounded-xl shadow-2xl " />
            <div className="flex  justify-between">

                <div className="mt-6">
                    <h1 className="text-xl">Shashank Kumar</h1>
                    <p className="text-sm text-gray-500">Senior Software Engineer - Testing</p>
                </div>


            </div>
            <p className="mt-6 text-sm max-w-md tracking-wide">
                Senior Software Engineer in Testing with 4.8+ years of experience in Manual, Automation, and API Testing.
                Proficient in Java Selenium test automation, API automation, and CI/CD integration, with expertise in frameworks
                like Selenium WebDriver, TestNG, Cucumber, RestAssured. Strong analytical and problem-solving skills with a focus
                on test coverage and efficiency.
            </p>

        </div>
    )
}