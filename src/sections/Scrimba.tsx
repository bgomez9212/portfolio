import ProjectCard from "../components/ProjectCard";

export default function Scrimba() {
  return (
    <div className="pt-navbar flex flex-col w-[90%]" id="hack-reactor">
      <h1 className="text-3xl mb-5 underline">Scrimba</h1>
      <div className="flex justify-evenly flex-wrap">
        <ProjectCard
          projectName=""
          description=""
          githubLink=""
          deploymentLink=""
          figmaLink=""
        />
      </div>
    </div>
  );
}
