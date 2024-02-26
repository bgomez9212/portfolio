import ProjectCard from "../components/ProjectCard";

export default function Scrimba() {
  return (
    <div className="pt-navbar flex flex-col w-[90%]" id="scrimba">
      <h1 className="text-3xl mb-5 underline">Scrimba</h1>
      <div className="flex justify-evenly flex-wrap">
        <ProjectCard
          projectName="Quizzical"
          description="The solo project of Scrimba's React section, using React and the Open Trivia Database (https://opentdb.com/), replicate a Figma design of a quiz application. I added a bit more than the project entailed, adding options for the user to decide the category of questions as well as the number of questions."
          githubLink="bgomez9212/scrimbaQuizzical"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?type=design&node-id=0-1&mode=design&t=ayFsM9aWk7R0vfWi-0"
        />
        <ProjectCard
          projectName="Movie Watchlist"
          description="The second solo project of Scrimba's Working with API's section. Using the Open Movie Database API (https://www.omdbapi.com/) along with HTML, CSS, and Javascript, create an application that allows users to create a movie watchlist. The design is provided in the form of a Figma design. This was the first introduction to Promises within Javascript."
          githubLink="bgomez9212/scrimbaMovieWatchlist"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/jhFRdFIdHpRxsDznNXtpXw/Movie-Watchlist?type=design&node-id=2-17&mode=design&t=SjkCQCFJTkwIKYnh-0"
        />
        <ProjectCard
          projectName="Color Scheme Generator"
          description="The first solo project of Scrimba's Working with API's section. Using The Color API (https://www.thecolorapi.com/) along with HTML, CSS, and Javascript, create an application that allows users to select a color and create color schemes based off of the selected color."
          githubLink="https://github.com/bgomez9212/scrimbaColorScheme"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/twasy8Bca4hW7gunLFSLoY/Color-Scheme-Generator?type=design&node-id=2-1155&mode=design&t=HshCzGuZXQQcAwCT-0"
        />
        <ProjectCard
          projectName="Travel Journal"
          description="The first solo project of Scrimba's React section, using React replicate a travel journal using a Figma design. Creating this application was a practice in creating reusable components, passing props and learning methods such as mapping over arrays to render each element of the array individually."
          githubLink="https://github.com/bgomez9212/scrimbaTravelJournal"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?type=design&node-id=0-1&mode=design&t=7XnJEVSpfE0pK93G-0"
        />
        <ProjectCard
          projectName="Password Generator"
          description=""
          githubLink="bgomez9212/scrimbaPasswordGen"
          deploymentLink="Making Websites Interactive"
          figmaLink="https://www.figma.com/file/YRO9Iw5IYaOorjnRyNz4bV/Random-Password-Generator?type=design&node-id=0-1&mode=design&t=yjxhrZFUo7VTWGfk-0"
        />
        <ProjectCard
          projectName="Learning Journal"
          description="The solo project from Scrimba's Responsive Design section. Using only HTML and CSS replicate a design from Figma that uses media-queries to change the layout of the website according to the size of the user's screen."
          githubLink="https://github.com/bgomez9212/scrimbaLearningJournal"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/hE5klIn1AEQ9XWZWmurs7y/Learning-Journal%2FBlog?type=design&node-id=0-1&mode=design&t=EARqP9QN3fm1nzco-0"
        />
      </div>
    </div>
  );
}
