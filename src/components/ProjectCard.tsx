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
      <div className="flex flex-col">
        <h1>{projectName}</h1>
        <img src={picture1} />
        <img src={picture2} />
        <a href={deploymentLink}>Deployment Link</a>
        <a href={githubLink}>GitHub Repo</a>
        <a href={figmaLink}>Figma Design</a>
      </div>
    </>
  );
}
