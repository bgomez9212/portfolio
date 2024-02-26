import { useState, useEffect } from "react";

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
      className={`flex-col flex items-center fixed top-0 left-0 right-0 bg-white ${dynamicHeight.shadow}`}
    >
      <div className="w-full flex justify-center mb-5">
        <div
          className="flex items-center justify-center border-b-2 w-[90%]"
          style={{
            paddingTop: `${dynamicHeight.pad}px`,
            paddingBottom: `${dynamicHeight.pad}px`,
          }}
        >
          <h1 className="text-2xl">Brandon Gomez</h1>
          <div
            id="pic-contain"
            style={{
              height: `${dynamicHeight.pic}px`,
              width: `${dynamicHeight.pic}px`,
            }}
            className="flex justify-center mx-20"
          >
            <img src="/self.jpg" className="w-full object-cover rounded-full" />
          </div>
          <h1 className="text-2xl">Software Engineer</h1>
        </div>
      </div>
      <div className={`w-[90%] flex justify-center pb-3`}>
        <div className="w-1/2 flex justify-between">
          <a
            href="#personal-projects"
            className="hover:underline hover:font-bold"
          >
            Personal Projects
          </a>
          <a href="#hack-reactor" className="hover:underline hover:font-bold">
            HackReactor
          </a>
          <a href="#scrimba" className="hover:underline hover:font-bold">
            Scrimba
          </a>
          <a href="#contact" className="hover:underline hover:font-bold">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
