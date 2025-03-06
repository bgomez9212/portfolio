import { useEffect, useState } from "react";

export default function AboutMe() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
  }, [position]);

  return (
    <div className="w-3/4 sm:w-3/4 flex flex-col text-center text-md h-screen z-0 justify-between items-center pt-[400px]">
      <div>
        Welcome! I am a fullstack web and mobile application developer based in
        Reno, NV, that specializes in the PERN stack. <br />I have brought some
        of my own ideas to life, and now I'm eager to help you do the same.
      </div>
      {position === 0 && (
        <div>
          <img className="moveArrow opacity-50" src="/down.png" />
        </div>
      )}
    </div>
  );
}
