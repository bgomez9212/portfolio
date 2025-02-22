import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Section from "./Section";

export default function PersonalProjects() {
  const [suplexData, setSuplexData] = useState({
    events: 0,
    matches: 0,
    wrestlers: 0,
  });

  async function getSuplexData() {
    const url = "https://digitalnotebook-production.up.railway.app/api/info";
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getSuplexData().then((res) => setSuplexData(res[0]));
  }, []);

  return (
    <Section title="Personal Projects" id="personal-projects">
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
        siteLink="https://github.com/bgomez9212/digitalNotebook"
      />
      <ProjectCard
        cardType="API"
        project="Suplex API"
        jobTitle="Backend Software Engineer"
        summary={`API for Suplex Application. Developed a web scraper to intermittently inject data into database. Currently contains ${suplexData.events} events, ${suplexData.matches} matches, and ${suplexData.wrestlers} wrestlers`}
        technologies={["python", "postgres", "selectolax"]}
        repoLink="https://github.com/bgomez9212/digitalNotebook"
        siteLink="https://github.com/bgomez9212/digitalNotebook"
      />
      <ProjectCard
        cardType="Macbook"
        image1="/projects/mealmachine.png"
        project="MealMachine"
        jobTitle="Full Stack Engineer"
        summary="Application that suggests recipes based on available ingredients using the Spoonacular API (https://spoonacular.com/food-api)."
        technologies={[
          "vite",
          "react",
          "typescript",
          "tailwind",
          "node",
          "postgres",
        ]}
        repoLink="https://github.com/bgomez9212/MealMachineRedux"
        siteLink="https://mealmachine.up.railway.app/"
      />
    </Section>
  );
}
