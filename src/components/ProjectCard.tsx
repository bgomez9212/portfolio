import IPhoneGroup from "./IPhoneGroup";
import MacbookMockup from "./MacbookMockup";
import techArr from "../../technologies.json";

export default function ProjectCard({
  cardType,
  image1,
  image2,
  image3,
  project,
  jobTitle,
  summary,
  technologies,
}: {
  cardType: "IPhone" | "Macbook";
  image1: string;
  image2?: string;
  image3?: string;
  project: string;
  jobTitle: string;
  summary: string;
  technologies: string[];
}) {
  image2 = image2 || "/placeholder.png";
  image3 = image3 || "/placeholder.png";
  return (
    <div
      id={`${cardType === "IPhone" ? "border-phone" : "border-macbook"}`}
      className={`rounded-lg w-4/5 flex my-10 justify-between px-10 max-h-[275px] relative`}
    >
      <div id="text" className="flex flex-col py-10 justify-between w-1/2">
        <div>
          <h1 className="text-4xl mb-2">{project}</h1>
          <h3 className="text-sm italic">{jobTitle}</h3>
        </div>
        <p className="">{summary}</p>
        <div id="tech" className="flex items-center w-fit bg-white rounded-md">
          {techArr.map((tech) => {
            if (technologies.indexOf(tech.name) > -1) {
              return (
                <a href={tech.link} target="_blank" key={tech.name}>
                  <img
                    className="h-5 m-1 cursor-pointer transform transition duration-300 ease-in-out hover:scale-150"
                    src={tech.image}
                  />
                </a>
              );
            }
          })}
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        {cardType === "Macbook" ? (
          <MacbookMockup image={image1} />
        ) : (
          <IPhoneGroup image1={image1} image2={image2} image3={image3} />
        )}
      </div>
    </div>
  );
}
