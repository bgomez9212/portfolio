type ProjectCardProps = {
  projectName: string;
  picture1: string;
  picture2: string;
  deploymentLink: string;
  githubLink: string;
  figmaLink: string;
};

export default function ProjectCard({
  projectName,
  picture1,
  picture2,
  deploymentLink,
  githubLink,
  figmaLink,
}: ProjectCardProps) {
  return (
    <>
      <div className="flex flex-col min-w-[30%] max-w-[45%] border">
        <h1 className="text-3xl">{projectName}</h1>
        <img src={picture1} />
        <img src={picture2} />
        <a href={deploymentLink}>Deployment Link</a>
        <a href={githubLink}>GitHub Repo</a>
        <a href={figmaLink}>Figma Design</a>
      </div>
    </>
  );
}
