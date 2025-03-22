import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Section from "./Section";

interface SuplexData {
  events: number | undefined;
  matches: number | undefined;
  wrestlers: number | undefined;
}

export default function PersonalProjects() {
  const [suplexData, setSuplexData] = useState<SuplexData>({
    events: undefined,
    matches: undefined,
    wrestlers: undefined,
  });

  async function getSuplexData() {
    const url = "https://portfolio-server-production-df8d.up.railway.app/";
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
        summary={`API for Suplex Application. Developed a web scraper to intermittently inject data into database. Currently contains ${suplexData.events?.toLocaleString()} events, ${suplexData.matches?.toLocaleString()} matches, and ${suplexData.wrestlers?.toLocaleString()} wrestlers`}
        technologies={["python", "selectolax", "postgres", "node"]}
        repoLink="https://github.com/bgomez9212/digitalNotebook"
        siteLink="https://github.com/bgomez9212/digitalNotebook"
      />
      <ProjectCard
        cardType="Macbook"
        image1="/projects/mealmachine.png"
        project="MealMachine"
        jobTitle="Full Stack Engineer"
        summary={
          <>
            Application that suggests recipes based on available ingredients
            using the{" "}
            <a
              href="https://spoonacular.com/food-api"
              target="_blank"
              className="underline"
            >
              Spoonacular API
            </a>
            .
          </>
        }
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
