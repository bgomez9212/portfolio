import ProjectCard from "../components/ProjectCard";
import Section from "./Section";

export default function Scrimba() {
  return (
    <Section title="Scrimba" id="scrimba">
      <ProjectCard
        cardType="Macbook"
        project="Quizzical"
        jobTitle="Frontend Engineer"
        summary={
          <>
            Quiz application with user-selected categories using the{" "}
            <a
              href="https://opentdb.com/"
              target="_blank"
              className="underline"
            >
              Open Trivia Database
            </a>
            .
          </>
        }
        image1="/projects/quizzical.png"
        technologies={["react", "css"]}
        repoLink="https://github.com/bgomez9212/scrimbaQuizzical"
        siteLink="https://scrimbaquizzical-production.up.railway.app/"
      />
      <ProjectCard
        cardType="Macbook"
        project="Watchlist"
        jobTitle="Frontend Engineer"
        summary={
          <>
            Web app used to create a watchlist, using the{" "}
            <a
              href="https://www.omdbapi.com/"
              target="_blank"
              className="underline"
            >
              Open Movie Database API
            </a>
            .
          </>
        }
        technologies={["javascript", "html", "css"]}
        repoLink="https://github.com/bgomez9212/scrimbaMovieWatchlist"
        siteLink="https://scrimbamoviewatchlist-production.up.railway.app/"
        image1="/projects/watchlist.png"
      />
      <ProjectCard
        cardType="Macbook"
        project="Color Scheme Generator"
        jobTitle="Frontend Engineer"
        summary={
          <>
            Generate color schemes based on user-selected colors, using the{" "}
            <a
              href="https://www.thecolorapi.com/"
              target="_blank"
              className="underline"
            >
              Color API
            </a>
            .
          </>
        }
        technologies={["javascript", "html", "css"]}
        repoLink="https://github.com/bgomez9212/scrimbaColorScheme"
        siteLink="https://scrimbacolorscheme-production.up.railway.app/"
        image1="/projects/colorgenerator.png"
      />
    </Section>
  );
}
