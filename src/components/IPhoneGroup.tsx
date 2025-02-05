import IPhoneMockup from "./IPhoneMockup";

export default function IPhoneGroup({ image }: { image: string }) {
  return (
    <div className="flex relative justify-center items-center w-full mx-[8%]">
      <div className="translate-x-10">
        <IPhoneMockup image={image} minusRotate={true} rotateDegree="12" />
      </div>
      <div className="-translate-y-3">
        <IPhoneMockup image={image} />
      </div>
      <div className="-translate-x-10">
        <IPhoneMockup image={image} minusRotate={false} rotateDegree="12" />
      </div>
    </div>
  );
}
