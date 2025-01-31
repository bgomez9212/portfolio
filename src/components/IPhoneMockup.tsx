import camera from "../../public/camera.png";
import frame from "../../public/frame.png";

export default function IPhoneMockup({ image }: { image: string }) {
  return (
    <div className="relative h-full">
      <img src={frame} className="h-full opacity-25 max-h-full max-w-full" />
      <div className="absolute top-0">
        <img src={frame} />
      </div>
      <div className="absolute top-[1.3%] left-[3.5%] right-[3.1%]">
        <img
          style={{
            borderTopLeftRadius: "15% 6%",
            borderTopRightRadius: "12% 7%",
            borderBottomLeftRadius: "13% 6%",
            borderBottomRightRadius: "15% 6%",
          }}
          className="brightness-75 hover:brightness-100 hover:shadow-custom hover:cursor-pointer"
          src={image}
        />
      </div>
      <div className="absolute w-[30%] top-[2.5%] left-[35%]">
        <img src={camera} />
      </div>
    </div>
  );
}
