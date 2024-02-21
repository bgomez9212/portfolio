import ProjectCard from "../components/ProjectCard";

export default function HackReactor() {
  return (
    <div className="flex justify-evenly flex-wrap">
      <ProjectCard
        projectName="Neon Collab"
        description="Neon Collab was our final project in HackReactor. For this project we were partnered into teams of 5 and presented an original idea from a client. We had 10 days to flesh out the app from scratch, while being in contact with our client who was able to ask for changes at any time during the process. The pitch for this project was to create a collaborative LeetCode style application where users would be presented with a weekly coding challenge, then come friday they would be paired with another user based on their scores. The idea is to create better coders, pairing first place with last and working inward so that the users that struggled would be paired with users that could help them. My portion of this project was handling all facets of the chat portion. This included fleshing out the chat functionality, as well as creating the algorithm that would pair the users according to scores. "
        githubLink="https://github.com/Neon-Collab/Neon-Collab"
        deploymentLink=""
        figmaLink="https://www.figma.com/file/2MFs6FtGtTxSr8LfYYTzLx/neonCollab?type=design&node-id=0-1&mode=design&t=pR0x8Fsphng1RK9n-0"
      />
    </div>
  );
}
