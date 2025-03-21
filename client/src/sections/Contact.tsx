import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div
      className="py-mobileNav sm:py-navbar flex flex-col w-[90%]"
      id="contact"
    >
      <div className="flex justify-evenly items-center flex-wrap h-32">
        <a href="mailto: bgomez9212@gmail.com">
          <EmailIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/brandonjgomez/">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/bgomez9212">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}
