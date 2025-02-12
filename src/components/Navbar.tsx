import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [dynamicHeight, setDynamicHeight] = useState({
    pic: 200,
    pad: 20,
    shadow: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPicHeight = Math.max(200 - scrollPosition * 0.2, 75);
      const newPadding = Math.max(20 - scrollPosition * 0.02, 6);
      const newShadow = scrollPosition > 30 ? "shadow-lg" : "";
      setDynamicHeight({
        pic: newPicHeight,
        pad: newPadding,
        shadow: newShadow,
      });
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex-col z-10 flex items-center fixed top-0 left-0 right-0 bg-white dark:bg-deepSeaBlue dark:text-white dark:shadow-white ${dynamicHeight.shadow}`}
    >
      <div className="w-full flex justify-center mb-2">
        <div
          className="flex items-center justify-center border-b-2 border-b-iceBlue w-[90%]"
          style={{
            paddingTop: `${dynamicHeight.pad}px`,
            paddingBottom: `${dynamicHeight.pad}px`,
          }}
        >
          <div className="w-[90%] absolute md:flex items-end justify-end hidden">
            <ModeToggle />
          </div>
          <h1 className="text-2xl mr-10">Brandon Gomez</h1>
          <div
            id="pic-contain"
            style={{
              height: `${dynamicHeight.pic}px`,
              width: `${dynamicHeight.pic}px`,
            }}
            className="flex justify-center"
          >
            <img src="/self.jpg" className="w-full object-cover rounded-full" />
          </div>
          <h1 className="text-2xl text-right ml-10">Software Engineer</h1>
        </div>
      </div>
      <div className="border-b-2 border-b-shadowBlue w-4/5 mb-3" />
      <div className="flex justify-center pb-3 w-[90%] max-w-[600px]">
        <div className="flex justify-between flex-wrap sm:flex-nowrap w-full">
          <a
            href="#personal-projects"
            className="hover:underline decoration-redAlert underline-offset-8 w-1/2 sm:w-auto"
          >
            Personal Projects
          </a>
          <a
            href="#hack-reactor"
            className="hover:underline decoration-redAlert underline-offset-8 w-1/2 sm:w-auto text-right"
          >
            HackReactor
          </a>
          <a
            href="#scrimba"
            className="hover:underline decoration-redAlert underline-offset-8 w-1/2 sm:w-auto"
          >
            Scrimba
          </a>
          <a
            href="#contact"
            className="hover:underline decoration-redAlert underline-offset-8 w-1/2 sm:w-auto text-right"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
