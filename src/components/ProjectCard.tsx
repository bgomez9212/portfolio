import IPhoneMockup from "./IPhoneMockup";
import MacbookMockup from "./MacbookMockup";

type ProjectCardProps = {
  projectName: string;
  description: string;
  deploymentLink: string;
  githubLink: string;
  figmaLink: string;
  demoLink?: string;
};

// export default function ProjectCard({
//   projectName,
//   description,
//   deploymentLink,
//   githubLink,
//   figmaLink,
//   demoLink,
// }: ProjectCardProps) {
//   return (
//     <>
//       <div className="flex-col block border border-gray mb-5 p-5 w-full scroll-view z-0 rounded-xl">
//         <h1 className="text-3xl mb-3">{projectName}</h1>
//         <p className="mb-3">{description}</p>
//         <div className="flex justify-end">
//           <div className="flex justify-between">
//             {deploymentLink ? (
//               <a
//                 className="hover:underline underline-offset-8"
//                 href={deploymentLink}
//               >
//                 Deployment Link
//               </a>
//             ) : demoLink ? (
//               <a className="hover:underline underline-offset-8" href={demoLink}>
//                 Demo Link
//               </a>
//             ) : null}
//             {githubLink && (
//               <a
//                 className="hover:underline underline-offset-8 ml-5"
//                 href={githubLink}
//               >
//                 GitHub Repo
//               </a>
//             )}
//             {figmaLink && (
//               <a
//                 className="hover:underline underline-offset-8 ml-5"
//                 href={figmaLink}
//               >
//                 Figma Design
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function ProjectCard({
  cardType,
  image,
}: {
  cardType: "IPhone" | "Macbook";
  image: string;
}) {
  return (
    <div className="border border-redAlert bg-gradient-to-r from-shadowBlue to-transparent to-75% rounded-lg w-4/5 flex my-10">
      <div className="">
        <h1 className="text-4xl mb-2">Company/App</h1>
        <h3 className="text-sm italic mb-10">Job Title</h3>
        <p className="mb-2">Summary</p>
        <div>Technologies</div>
      </div>
      {/* {cardType === "IPhone" ? (
        <IPhoneMockup image={image} />
      ) : (
        <MacbookMockup image={image} />
      )} */}
    </div>
  );
}
