import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import HackReactor from "./sections/HackReactor";
import PersonalProjects from "./sections/PersonalProjects";
import Scrimba from "./sections/Scrimba";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <AboutMe />
      <PersonalProjects />
      <HackReactor />
      <Scrimba />
      <Contact />
    </div>
  );
}

export default App;
