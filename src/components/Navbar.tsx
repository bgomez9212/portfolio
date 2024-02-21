import { useState, useEffect } from "react";

export default function Navbar() {
  const [dynamicHeight, setDynamicHeight] = useState({ pic: 200, pad: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPicHeight = Math.max(200 - scrollPosition * 0.2, 75);
      const newPadding = Math.max(20 - scrollPosition * 0.02, 6);
      setDynamicHeight({ pic: newPicHeight, pad: newPadding });
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex-col flex items-center fixed top-0 left-0 right-0">
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
          <h1 className="text-2xl">Software Developer</h1>
        </div>
      </div>
      <div className="w-1/2 flex justify-between">
        <a>Personal</a>
        <a>HackReactor</a>
        <a>Scrimba</a>
        <a>Contact</a>
      </div>
    </div>
  );
}
