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
      <div className="flex flex-col border border-gray mb-5 p-5 w-full scroll-view z-0 rounded-xl">
        <h1 className="text-3xl mb-3">{projectName}</h1>
        <p className="mb-3">{description}</p>
        <div className="flex justify-end">
          <div className="flex justify-between">
            {deploymentLink && (
              <a
                className="hover:underline underline-offset-8"
                href={deploymentLink}
              >
                Deployment Link
              </a>
            )}
            {githubLink && (
              <a
                className="hover:underline underline-offset-8 ml-5"
                href={githubLink}
              >
                GitHub Repo
              </a>
            )}
            {figmaLink && (
              <a
                className="hover:underline underline-offset-8 ml-5"
                href={figmaLink}
              >
                Figma Design
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
