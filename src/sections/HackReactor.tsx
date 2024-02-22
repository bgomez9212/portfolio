import ProjectCard from "../components/ProjectCard";

export default function HackReactor() {
  return (
    <div className="pt-navbar flex flex-col w-[90%]" id="hack-reactor">
      <h1 className="text-3xl mb-5 underline">HackReactor</h1>
      <div className="flex justify-evenly flex-wrap">
        <ProjectCard
          projectName="Neon Collab"
          description="Neon Collab was our final project in HackReactor. For this project we were partnered into teams of 5 and presented an original idea from a client. We had 10 days to flesh out the app from scratch, while being in contact with our client who was able to ask for changes at any time during the process. The pitch for this project was to create a collaborative LeetCode style application where users would be presented with a weekly coding challenge, then come friday they would be paired with another user based on their scores. The idea is to create better coders, pairing first place with last and working inward so that the users that struggled would be paired with users that could help them. My portion of this project was handling all facets of the chat portion. This included fleshing out the chat functionality, as well as creating the algorithm that would pair the users according to scores. "
          githubLink="https://github.com/Neon-Collab/Neon-Collab?tab=readme-ov-file#feedback-page"
          deploymentLink=""
          figmaLink="https://www.figma.com/file/2MFs6FtGtTxSr8LfYYTzLx/neonCollab?type=design&node-id=0-1&mode=design&t=pR0x8Fsphng1RK9n-0"
        />
        <ProjectCard
          projectName="TypeRave"
          description="This project was our backend capstone project in HackReactor, where the main goal was to optimize response times of a server that we created. The metrics of the goal was to be able to handle 1500 requests a second, with response times being under 2000 m/s. We deployed our server using AWS, using a PostgreSQL database and an Express server. This goal was met with many challenges, such as populating our PostgreSQL database on an AWS EC2 instance using a csv file, as well as using K6 to stress test our server locally, and Loader.io to test the server on the EC2 instance. Then using a load balancer to handle an excess of requests to our deployed server."
          githubLink="https://github.com/TypeRave/QuestionsAndAnswers"
          deploymentLink=""
          figmaLink=""
        />
        <ProjectCard
          projectName="Omega Outlet"
          description="Building Omega Outlet was the first group project the cohort participated in during our time at Hack Reactor. For this project our task was to create the front end of an online retail store. I worked in a group with 3 other engineers to complete this project, with my responsibilty being the Ratings and Reviews section. This included creating the format for the ratings and reviews, as well as creating the form that a user would use to submit their rating. Our group decided to try to replicate the Vuori website, so instead of using Figma we just used the Vuori site as our template."
          githubLink="https://github.com/Omega-outlet/FEC?tab=readme-ov-file#ratings--reviews"
          deploymentLink=""
          figmaLink=""
        />
      </div>
    </div>
  );
}
