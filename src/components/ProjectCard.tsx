import IPhoneGroup from "./IPhoneGroup";
import MacbookMockup from "./MacbookMockup";
import techObj from "../../technologies.json";
import { ReactNode } from "react";

type TechKey = keyof typeof techObj;

export default function ProjectCard({
  cardType,
  image1,
  image2,
  image3,
  project,
  jobTitle,
  summary,
  technologies,
  repoLink,
  siteLink,
}: {
  cardType: "IPhone" | "Macbook" | "API";
  image1?: string;
  image2?: string;
  image3?: string;
  project: string;
  jobTitle: string;
  summary: ReactNode;
  technologies: string[];
  repoLink: string;
  siteLink: string;
}) {
  image1 = image1 || "/placeholder.png";
  image2 = image2 || "/placeholder.png";
  image3 = image3 || "/placeholder.png";
  return (
    <div
      className={`rounded-lg w-full flex my-10 justify-between px-10 md:h-[275px] relative scroll-view ${cardType === "IPhone" ? "border-phone dark:border-phone" : cardType === "Macbook" ? "border-macbook dark:border-macbook" : "border-api dark:border-api"}`}
    >
      <div id="text" className="flex flex-col py-10 justify-between md:w-1/2">
        <div>
          <h1 className="text-4xl pb-3 sm:pb-0">{project}</h1>
          <h3 className="text-sm italic pb-3 sm:pb-0">{jobTitle}</h3>
        </div>
        <p className="pb-3 sm:pb-0">{summary}</p>
        <div id="tech" className="flex items-center w-fit bg-white rounded-md">
          {technologies.map((usedTech) => {
            const tech = techObj[usedTech as TechKey];
            return (
              <a href={tech.link} target="_blank" key={usedTech}>
                <img
                  className="h-5 m-1 cursor-pointer transform transition duration-300 ease-in-out hover:scale-150"
                  src={tech.image}
                />
              </a>
            );
          })}
          <a href={repoLink} target="_blank">
            <img
              src="/technologies/github.png"
              className="h-5 m-1 cursor-pointer transform transition duration-300 ease-in-out hover:scale-150"
            />
          </a>
        </div>
        <div className="w-full flex justify-end mt-5 text-lg sm:hidden">
          <a target="_black" href={siteLink}>
            {"See More >"}
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end w-1/2">
        {cardType === "Macbook" ? (
          <MacbookMockup image={image1} siteLink={siteLink} />
        ) : cardType === "IPhone" ? (
          <IPhoneGroup
            image1={image1}
            image2={image2}
            image3={image3}
            siteLink={siteLink}
          />
        ) : (
          <a href={siteLink} target="_blank">
            <img id="api" src="/demos/api.png" className="scale-[.8]" />
          </a>
        )}
      </div>
    </div>
  );
}
