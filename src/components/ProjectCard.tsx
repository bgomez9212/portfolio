type ProjectCardProps = {
  projectName: string;
  description: string;
  deploymentLink: string;
  githubLink: string;
  figmaLink: string;
};

export default function ProjectCard({
  projectName,
  description,
  deploymentLink,
  githubLink,
  figmaLink,
}: ProjectCardProps) {
  return (
    <>
      <div className="flex flex-col border w-[90%] mb-5 p-5">
        <h1 className="text-3xl mb-3">{projectName}</h1>
        <p className="mb-3">{description}</p>
        <div className="flex justify-end">
          <div className="flex w-1/3 justify-between">
            <a className="hover:underline" href={deploymentLink}>
              Deployment Link
            </a>
            <a className="hover:underline" href={githubLink}>
              GitHub Repo
            </a>
            <a className="hover:underline" href={figmaLink}>
              Figma Design
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
