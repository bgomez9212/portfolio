import camera from "/camera.png";
import frame from "/frame.png";

export default function IPhoneMockup({
  image,
  minusRotate,
  rotateDegree,
}: {
  image: string;
  minusRotate?: boolean;
  rotateDegree?: string;
}) {
  return (
    <div
      className={`relative max-w-[145px] ${minusRotate ? `-rotate-${rotateDegree}` : `rotate-${rotateDegree}`}`}
    >
      <img src={frame} className="h-full max-h-full max-w-full" />
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
