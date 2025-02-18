import ProjectCard from "../components/ProjectCard";

export default function HackReactor() {
  return (
    <div
      className="pt-mobileNav sm:pt-navbar flex flex-col w-[90%]"
      id="hack-reactor"
    >
      <h1 className="text-3xl underline scroll-view">HackReactor</h1>
      <div className="flex justify-evenly flex-wrap">
        <ProjectCard
          cardType="Macbook"
          image1="/projects/neonCollab.png"
          project="neonCollab"
          jobTitle="Fullstack Software Engineer"
          summary="Developed chat feature for leetcode-type application with social media features. I was responsible for the chat feature."
          technologies={["react", "css", "node", "postgres"]}
          repoLink="https://github.com/Neon-Collab/Neon-Collab?tab=readme-ov-file#feedback-page"
        />
        <ProjectCard
          cardType="API"
          project="TypeRave API"
          jobTitle="Backend Software Engineer"
          summary="Created the 'Questions and Answers' leg of an API for a retail website."
          repoLink="https://github.com/TypeRave/QuestionsAndAnswers"
          technologies={["node", "postgres"]}
        />
        <ProjectCard
          cardType="Macbook"
          project="Omega Outlet"
          jobTitle="Frontend Software Engineer"
          summary="Web application for retail clothing store. My responsibility was the ratings and reviews section."
          repoLink="https://github.com/Omega-outlet/FEC?tab=readme-ov-file#ratings--reviews"
          technologies={["react", "css", "node"]}
          image1="/projects/omegaoutlet.png"
        />
      </div>
    </div>
  );
}
