export default function Navbar() {
  return (
    <div className="flex-col flex items-center fixed top-0 left-0 right-0">
      <div id="top-half" className="w-full flex justify-center mb-5">
        <div className="flex items-center justify-center border-b-2 w-[90%] py-5">
          <h1 className="text-2xl">Brandon Gomez</h1>
          <div className="h-[200px] w-[200px] flex justify-center mx-20">
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
