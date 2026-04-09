// import ExperienceCard from "./ExperienceCard";

import StackCard from "./StackCard";

const skills = [
    { name: "Selenium", image: "/selenium.png" },
    { name: "TestNG", image: "/testng.png" },
    { name: "Cucumber", image: "/cucumber.png" },
    { name: "Gherkin", image: "/cucumber.png" },
    { name: "POM", image: "/selenium.png" },
    // { name: "XPath", image: "xpath.png" },
    // { name: "Rest Assured", image: "rest-assured.png" },
    { name: "Postman", image: "/postman.jpeg" },
    { name: "Playwright", image: "/playwright.webp" },
    { name: "Typescript", image: "/typescript.png" },
    { name: "Core Java", image: "/java.png" },
    { name: "JavaScript", image: "/javascript.jpg" },
    // { name: "Object Oriented Programming", image: "encapsulation.png" },
    

    { name: "GitHub", image: "/github.png" },
    { name: "Jenkins", image: "/jenkins.png" },
    { name: "GoCD", image: "/gocd.png" },
    { name: "Rancher", image: "/rancher.png" },
    { name: "ArgoCD", image: "/argocd.png" },
    { name: "Maven", image: "/maven.png" },

    // { name: "Functional Testing", image: "functional-testing.png" },
    // { name: "Integration Testing", image: "integration-testing.png" },
    // { name: "System Testing", image: "system-testing.png" },
    // { name: "Regression Testing", image: "regression-testing.png" },
    // { name: "Smoke Testing", image: "smoke-testing.png" },
    // { name: "API Testing", image: "api-testing.png" },

    { name: "Jira", image: "/jira.png" },
    { name: "IntelliJ IDEA", image: "intellij.svg" },
    { name: "Eclipse", image: "/eclipse.png" },

    { name: "Linux", image: "/linux.svg" }
];

export default function StackAndSkills() {
    return (
        <div className="bg-[#F2F2F2] p-6 rounded-xl border border-black/4">
            <h2 className="uppercase text-md font-medium">Stack & Skills</h2>
            <div className="flex flex-wrap gap-1 mt-6">
                {
                    skills.map((skill: any) => <StackCard key={skill.name} title={skill.name} url={skill.image} />)
                }
            </div>


        </div>
    )
}