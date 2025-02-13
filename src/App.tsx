import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center dark:bg-deepSeaBlue dark:text-white">
        <Navbar />
        <AboutMe />
        <ProjectCard
          cardType="Macbook"
          image1="/mealmachine.png"
          project="MealMachine"
          jobTitle="Full Stack Engineer"
          summary="Application that suggests recipes based on available ingredients"
          technologies={["vite", "react", "typescript", "tailwind", "node"]}
          repoLink="https://github.com/bgomez9212/MealMachineRedux"
        />
        <ProjectCard
          cardType="IPhone"
          image1="/suplex.png"
          image2="/suplex-2.png"
          image3="/suplex-3.png"
          project="Suplex"
          jobTitle="Fullstack Mobile Engineer"
          summary="Mobile application for rating professional wrestling matches"
          technologies={[
            "expo",
            "react-native",
            "typescript",
            "nativewind",
            "node",
          ]}
          repoLink="https://github.com/bgomez9212/digitalNotebook"
        />
        <ProjectCard
          cardType="Macbook"
          image1="/neonCollab.png"
          project="neonCollab"
          jobTitle="Chat Engineer"
          summary="Developed chat feature for leetcode-type application with social media features"
          technologies={["react", "css", "node"]}
          repoLink="https://github.com/Neon-Collab/Neon-Collab?tab=readme-ov-file#feedback-page"
        />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
