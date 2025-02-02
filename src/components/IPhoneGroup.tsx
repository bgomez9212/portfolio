import IPhoneMockup from "./IPhoneMockup";

export default function IPhoneGroup({ image }: { image: string }) {
  return (
    <div className="flex relative max-w-[425px] w-full h-full justify-center items-center">
      <div className="h-[100%] absolute left-12">
        <IPhoneMockup image={image} minusRotate={true} rotateDegree="12" />
      </div>
      <div className="h-[100%]">
        <IPhoneMockup image={image} />
      </div>
      <div className="h-[100%] absolute right-12">
        <IPhoneMockup image={image} minusRotate={false} rotateDegree="12" />
      </div>
    </div>
  );
}
