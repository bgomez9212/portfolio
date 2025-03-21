import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import PersonalProjects from "./sections/PersonalProjects";
import HackReactor from "./sections/HackReactor";
import Scrimba from "./sections/Scrimba";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center dark:bg-deepSeaBlue dark:text-white">
        <Navbar />
        <AboutMe />
        <PersonalProjects />
        <HackReactor />
        <Scrimba />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
