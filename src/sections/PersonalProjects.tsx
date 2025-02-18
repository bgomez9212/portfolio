import ProjectCard from "../components/ProjectCard";

export default function PersonalProjects() {
  return (
    <div
      className="pt-mobileNav sm:pt-navbar flex flex-col w-4/5"
      id="personal-projects"
    >
      <h1 className="text-3xl underline scroll-view">Personal Projects</h1>
      <div className="flex justify-evenly flex-wrap">
        <ProjectCard
          cardType="IPhone"
          image1="/projects/suplex.png"
          image2="/projects/suplex-2.png"
          image3="/projects/suplex-3.png"
          project="Suplex"
          jobTitle="Fullstack Mobile Engineer"
          summary="Mobile application for rating professional wrestling matches."
          technologies={[
            "expo",
            "react-native",
            "typescript",
            "nativewind",
            "node",
            "postgres",
          ]}
          repoLink="https://github.com/bgomez9212/digitalNotebook"
        />
        <ProjectCard
          cardType="API"
          project="Suplex API"
          jobTitle="Backend Software Engineer"
          summary="API for Suplex Application. Developed a web scraper to intermittently injects data into database."
          technologies={["python", "postgres", "selectolax"]}
          repoLink="https://github.com/bgomez9212/digitalNotebook"
        />
        <ProjectCard
          cardType="Macbook"
          image1="/projects/mealmachine.png"
          project="MealMachine"
          jobTitle="Full Stack Engineer"
          summary="Application that suggests recipes based on available ingredients"
          technologies={[
            "vite",
            "react",
            "typescript",
            "tailwind",
            "node",
            "postgres",
          ]}
          repoLink="https://github.com/bgomez9212/MealMachineRedux"
        />
      </div>
    </div>
  );
}
