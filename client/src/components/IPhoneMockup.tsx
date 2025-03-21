import camera from "/demos/camera.png";
import frame from "/demos/frame.png";

export default function IPhoneMockup({ image }: { image: string }) {
  return (
    <div className="relative max-w-[145px]">
      <img src={frame} />
      <div className="absolute top-[1.3%] left-[3.5%] right-[3.1%]">
        <img
          style={{
            borderTopLeftRadius: "15% 6%",
            borderTopRightRadius: "12% 7%",
            borderBottomLeftRadius: "13% 6%",
            borderBottomRightRadius: "15% 6%",
          }}
          className="brightness-75 hover:brightness-100 hover:shadow-custom hover:cursor-pointer w-full h-full object-fill"
          src={image}
        />
      </div>
      <div className="absolute w-[30%] top-[2.5%] left-[35%]">
        <img src={camera} />
      </div>
    </div>
  );
}
