import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import HackReactor from "./sections/HackReactor";
import PersonalProjects from "./sections/PersonalProjects";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <AboutMe />
      <PersonalProjects />
      <HackReactor />
    </div>
  );
}

export default App;
