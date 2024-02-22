import { useState, useEffect } from "react";

export default function Navbar() {
  const [dynamicHeight, setDynamicHeight] = useState({
    pic: 200,
    pad: 20,
    shadow: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPicHeight = Math.max(200 - scrollPosition * 0.2, 75);
      const newPadding = Math.max(20 - scrollPosition * 0.02, 6);
      const newShadow = Math.min(scrollPosition * 0.005, 0.2);
      console.log(newShadow);
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
      className={`flex-col flex items-center fixed top-0 left-0 right-0 bg-white shadow-[rgba(0,0,10,${dynamicHeight.shadow})_0px_5px_0px_0px]`}
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
          <a href="#personal-projects" className="hover:underline">
            Personal Projects
          </a>
          <a href="#hack-reactor" className="hover:underline">
            HackReactor
          </a>
          <a href="#Scrimba" className="hover:underline">
            Scrimba
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
