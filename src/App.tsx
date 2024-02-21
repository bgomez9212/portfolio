import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import HackReactor from "./sections/HackReactor";
import PersonalProjects from "./sections/PersonalProjects";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <PersonalProjects />
      <HackReactor />
    </div>
  );
}

export default App;
