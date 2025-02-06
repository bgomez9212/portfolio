import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center dark:bg-deepSeaBlue dark:text-white">
        <ProjectCard
          cardType="Macbook"
          image1="/mealmachine.png"
          project="MealMachine"
          jobTitle="Full Stack Engineer"
          summary="Application that suggests recipes based on available ingredients"
        />
        <ProjectCard
          cardType="IPhone"
          image1="/suplex.png"
          image2="/suplex-2.png"
          image3="/suplex-3.png"
          project="Suplex"
          jobTitle="Fullstack Mobile Engineer"
          summary="Mobile application for rating professional wrestling matches"
        />
        {/* <Navbar />
        <AboutMe />
        <PersonalProjects />
        <HackReactor />
        <Scrimba />
        <Contact /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
