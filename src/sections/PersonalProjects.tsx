import ProjectCard from "../components/ProjectCard";

export default function PersonalProjects() {
  return (
    <div
      className="py-mobileNav sm:py-navbar flex flex-col w-[90%]"
      id="personal-projects"
    >
      <h1 className="text-3xl mb-5 underline">Personal Projects</h1>
      <div className="flex justify-evenly flex-wrap">
        <ProjectCard
          projectName="MealMachine"
          description="MealMachine provides users with a list of recipes based on the ingredients a user has available to them. This app uses Firebase for authentication, PostgreSQL for the database, NodeJS for the backend and Vite+Typescript for the frontend. Originally this was a two-day sprint project I did in Hack Reactor for my solo project. And really it wasn't in a state I was very happy with after two days, just enough to be presentable. So after graduating it was something I wanted to revisit and decided to build again from the ground up. The base idea was to present people with recipes based off of what they had available in their kitchen. This app provides that as well as the ability to create a grocery list, search recipes, save recipes, and each recipe card will show users a list of ingredients they are missing, which can be added to their grocery list with a click of a button. Other features are that it is optimized for multiple screen sizes (mobile, tablet, desktop) and the inclusion of light and dark modes."
          githubLink="https://github.com/bgomez9212/MealMachineRedux"
          deploymentLink="https://mealmachine.up.railway.app"
          figmaLink="https://www.figma.com/file/tCVa3pg4py8YGqFfUWvkh0/MealMachine?type=design&node-id=0%3A1&mode=design&t=wA7fBIwr2RwqhgCd-1"
        />
        <ProjectCard
          projectName="Portfolio"
          description="This is the site you are currently visiting! While applying for jobs I noticed quite a few of them had inputs for portfolio sites, so to get some more practice and do something that wouldn't take weeks to complete, I started to work on this. I think having a place other than github to keep track of my projects is helpful and any additional coding I can do with a clear goal in mind is always great for me. The design was done by me, starting with using Figma to create a blueprint. This site is created with Vite+Typescript and deployed on Railway"
          githubLink="https://github.com/bgomez9212/portfolio"
          deploymentLink="https://brandongomez.up.railway.app"
          figmaLink="https://www.figma.com/file/YJOqi4hT8PbIODMxFTSfYN/Untitled?type=design&mode=design&t=wA7fBIwr2RwqhgCd-0"
        />
        <ProjectCard
          projectName="Digital Notebook (WIP)"
          description="Digital Notebook is an app I am currently working on to learn React Native. The pitch is: in the silly world of professional wrestling, us fans like to rate matches on a five-star scale, similar to how well-adjusted people might judge a movie. It will also act as a database, providing the average rating from multiple users for individual matches. Currently there is not an app that provides this utility to wrestling fans. Using Python I was able to build a web scraper that scrapes the details that I need for events and populate a relational database(PostgreSQL). Using this data I am able to organize matches by the event they occured on, as well as the participants involved. Then using React Native I'm working to be able to present this data to users."
          githubLink="https://github.com/bgomez9212/portfolio"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/fWXdSi8CaDkkY0UcANZ7hd/TheNotebook?type=design&mode=design&t=VXMgyeN7G03vGz0A-0"
        />
      </div>
    </div>
  );
}
