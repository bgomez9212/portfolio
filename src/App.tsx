import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import HackReactor from "./sections/HackReactor";
import PersonalProjects from "./sections/PersonalProjects";
import Scrimba from "./sections/Scrimba";
import { ThemeProvider } from "./components/ThemeProvider";
import ProjectCard from "./components/ProjectCard";
import mealmachine from "/mealmachine.png";
import suplex from "/public/suplex.png";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center dark:bg-deepSeaBlue dark:text-white">
        <ProjectCard cardType="Macbook" image={mealmachine} />
        {/* <ProjectCard cardType="IPhone" image={suplex} /> */}
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
